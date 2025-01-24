import http from 'k6/http';
import { check, sleep } from 'k6';
import { htmlReport } from './report.js';

export const options = {
  stages: [
    { duration: '30s', target: 20 }, // Ramp up to 20 users over 30 seconds
    { duration: '1m', target: 20 }, // Stay at 20 users for 1 minute
    { duration: '30s', target: 0 }, // Ramp down to 0 users over 30 seconds
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% of requests should be below 500ms
    http_req_failed: ['rate<0.01'], // Less than 1% of requests should fail
  },
};

export function handleSummary(data) {
  return {
    '/reports/summary.html': htmlReport(data),
  };
}

export default function () {
  const BASE_URL = __ENV.BASE_URL || 'http://host.docker.internal:3000';

  // Health check endpoint
  const healthCheck = http.get(`${BASE_URL}/health`);
  check(healthCheck, {
    'health check status is 200': (r) => r.status === 200,
  });

  sleep(1);
}
