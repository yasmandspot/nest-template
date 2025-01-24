# Task Reference

- Task URL (Trello/Jira):

# Summary of Changes

<!-- List the key changes made in this MR -->

-
-
-

# Context

<!-- Explain why you chose this implementation approach and any important considerations -->

- Implementation approach:
- Technical decisions:
- Alternatives considered:

# Checklist

- [ ] Should include the label 'HP' in the MR if the card has a high-priority
- [ ] Should include an image of the requirements covered in the MR
- [ ] Should include the MR link in the requirement (or the issue description point) listed in the card
- [ ] Should the tests run successfully in the MR
- [ ] Should include the behaviour test that covers the requirements included in the MR
- [ ] Should the implementation fulfil the described requirement
- [ ] Should not include more than one requirement per MR unless the requirements are too tight and small
- [ ] Should not include more than 5 requirements in the MR
- [ ] Should not have more than 250 lines in changes (without including .svg or any similar static file)
- [ ] Should not include spell errors in the MR code updates (pending evaluation of automatic tools) or the MR name and description
- [ ] Should not include spell errors in the commit descriptions or the branch name (if it exists, comment it to the developer for future work, but should not block the MR)
- [ ] Should use descriptive and concise names for variables and functions
- [ ] Should the implementation code be readable
- [ ] Should the implementation code be maintainable in the time
- [ ] Should use descriptive and concise error messages
- [ ] Should refactor duplicate code into reusable functions
- [ ] Should include the role label 'Backend' in the MR
- [ ] Should include the label 'Script' in the MR if changes contain a script
- [ ] Should the test descriptions include the requirement as redacted in the Trello card
  - This will make it easier for the reviewer to determine whether the tests were included or not and review if the tests accomplish what the requirement was meant for.
  - In the case of the parametric tests include the requirement as the last param
- [ ] Should not add business logic in the controllers unless the actual tech debt does not allow us to do it in another way. The goal is to achieve unique responsibility for each layer in the application. Ex: Controllers should only validate API requests and handle errors. The Services are responsible for handling any logic associated with a functional requirement. Repositories should only be responsible for reading and writing to the database.
- [ ] Should avoid adding too frequent events that access the database in the scheduler lambda unless it is strictly necessary
  - Too frequent events accessing the database will cause instability in the database, which has already happened. Therefore, it should be taken into consideration in any update made.
- [ ] Should avoid merging business logic with any extra implementation detail
  - For example (The examples below are directly related to the patterns used in the implementation of the Findr project. It is important to highlight it due to the diversity of opinions regarding software architecture. The idea with these examples is to set the tone for new developers.)
    - The database item conversions into readable items should be done at the stage of the repositories unless the actual tech debt prevents us from doing it in the correct way
    - The integration of third-party services like Sendgrid should be included in separate classes exporting only the necessary function for sending the email to the services containing the business logic, keeping them isolated from the “how” the email is sent.
- [ ] Should certainly include comments for the parts of the code that refer to tricky corner cases, special conditions, third-party service issues avoided by using a specific approach, parts of the code that can’t be changed like in the third-party service issues, and similar conditions, including the reference link if proceed
- [ ] Should properly validate any data input, like the expected:
  - length
  - values
  - structure
  - range (for numerical fields)
  - type of field
- [ ] Should avoid performance impacts in the platform, like changes including a high level of queries to the database
- [ ] Should avoid adding new dependencies unnecessarily, especially in the Lambdas, where some space problems have been suffered in the past due to the limited space defined for the lambdas in AWS
- [ ] Should accomplish with TypeScript programming standards Google TypeScript Style Guide
  - This means the reviewers must study the style guide beforehand
- [ ] Should the code be well-designed and fitted to the surrounding architecture

## Only for bugs:

- [ ] Should update the related behaviour tests or add a new one when an issue was discovered and the tests didn’t detect it
