export function htmlReport(data) {
  return `
    <!doctype html>
    <html lang="en">
        <title>K6 Load Test: Performance Report</title>
            <style>
                body {
                    margin: 1rem;
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                }
                h1 {
                    color: #2c3e50;
                    border-bottom: 2px solid #ecf0f1;
                    padding-bottom: 1rem;
                }
                .summary {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 1rem;
                    margin: 2rem 0;
                }
                .metric {
                    background: #f8f9fa;
                    padding: 1rem;
                    border-radius: 8px;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.12);
                }
                .metric h4 {
                    margin: 0 0 0.5rem 0;
                    color: #2c3e50;
                }
                .metric .value {
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: #2980b9;
                }
                .failure {
                    color: #e74c3c;
                }
                .success {
                    color: #27ae60;
                }
            </style>
        </head>
        <body>
            <h1>K6 Load Test Results</h1>
            <div class="summary">
                <div class="metric">
                    <h4>Virtual Users</h4>
                    <div class="value">${data.metrics.vus.values.max}</div>
                </div>
                <div class="metric">
                    <h4>Total Requests</h4>
                    <div class="value">${data.metrics.http_reqs.values.count}</div>
                </div>
                <div class="metric">
                    <h4>HTTP Request Duration (p95)</h4>
                    <div class="value">${data.metrics.http_req_duration.values['p(95)']} ms</div>
                </div>
                <div class="metric">
                    <h4>Failed Requests</h4>
                    <div class="value ${data.metrics.http_req_failed.values.rate > 0.01 ? 'failure' : 'success'}">
                        ${data.metrics.http_req_failed.values.rate * 100}%
                    </div>
                </div>
            </div>
        </body>
    </html>`;
}
