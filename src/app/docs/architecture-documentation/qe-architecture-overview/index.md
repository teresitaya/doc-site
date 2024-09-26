# {{ NgDocPage.title }}

The purpose of this document is to define the testing strategy for RiskPhysics, which will be developed using the Scrum agile methodology. It describes how testing will be conducted iteratively and incrementally to ensure that the software meets the specified requirements and maintains high quality.

#### Scope
This document covers the Testing Strategies for all sprints in the software development life cycle of RiskPhysics. It defines the types of tests, entry and exit criteria, testing environments, and the roles and responsibilities within the testing team.

####  Testing Objectives
- **Continuous Quality Assurance**: Validate that each product increment meets the specified functional and non-functional requirements.
- **Early Defect Detection**: Identify and fix defects within each sprint to prevent the accumulation of issues.
- **Adaptability**: Adjust testing according to changes in requirements and priorities of each sprint.
- **Continuous Improvement**: Provide rapid and continuous feedback to improve development and testing processes in each sprint.

#### Testing Scope
- **Areas to be Tested**:
    - During each sprint, testing will focus on the User Stories and tasks defined in the Sprint Backlog.
    - A review of existing functionalities (regression testing) will be conducted to ensure that new developments do not affect current features.
- **Areas Out of Scope**:
    - TBD

#### Testing Approach
- **Types of Testing**
  - **Unit Testing**: Developers will write and execute unit tests for each new user story, work item or task.
  - **Integration Testing**: Conducted to ensure that components developed in different sprints work correctly together. To achieve this goal we need:
    - Identify the components.
    - Establish the integration criteria.
    - Define which integrations will be tested.
    - Include the tests in the sprint planning (In the first moment at least the identification of test cases and manual execution).
    - Define which Test Cases will be automated.
    - Automating tests to ensure they run consistently and include a tag to classify the test.
    - Include a tag in the pull request that specifies the type of test based on the change made.
    - Configure scripts to run integration tests automatically after build using CI/CD tools (include a tag in the pull request that specifies the type of test and also include in test ).
  They will be executed every time a tag with the integration type is included in a pull request and this one is completed.
  - **System Testing**: Validate that the complete system, including new features, meets the specified requirements. To achieve this goal we need:
    - Identify System Test Cases for functional and non-functional test
    - Ensure the environment is as similar to production as possible to obtain accurate results.
    - Prepare the test data required to execute the system test cases.
    - Automating tests to ensure they run consistently.
    - Configure scripts to run integration tests automatically after merging dev to beta or beta to prod branches using CI/CD tools.
  - **Regression Testing**: Automated or manual regression tests will be executed to verify that changes do not introduce new defects. To achieve this goal we need:
    - Identify Regression Test Cases
    - Define which of these regressions will be tested
    - Include the tests in the sprint planning (In the first moment at least the manual execution).
    - Define which Test Cases will be automated.
    - Automating tests to ensure they run consistently and include a tag to classify the test.
    - Configure scripts to run integration tests automatically after build using CI/CD tools.
    - Review and adjust regression testing strategy based on results and feedback.
    - Configure scripts to run integration tests automatically after merging local to dev branches using CI/CD tools.
  - **Exploratory Testing**: Performed to discover unforeseen defects.

#### Entry and Exit Criteria
![QE Process](assets/img/QE_Process.png)
- **Entry Criteria**
  - Detailed and approved user stories.
  - Testing environment set up and accessible.
  - Test cases designed for the sprint's user stories.
  - Test data prepared and available.
- **Exit Criteria**
  - All user stories of the sprint have been tested and meet the acceptance criteria.
  - No critical defects remain open related to the sprint functionalities.
  - Critical regression tests have passed.
  - Positive feedback from sprint reviews.

#### Testing Environment
- **Hardware and Software Requirements**
  - Dev environment.
  - Beta environment that mirrors production.
  - Production environment.
  - Configurations adaptable to test specific sprint functionalities.
  - Kubernetes for running automated tests.
- **Test Data**
  - Test data will be updated in each sprint to reflect new testing scenarios based on user stories.
- **Testing Tools**
  - Test management tool: Azure Devops.
#### Test Automation
  - **Automation Strategy**
    - Regression and critical acceptance tests will be automated to enable rapid execution in each sprint.
    - Unit tests will be automated by developers for all new functionalities.
  - **Automation Tools**
    - Check [Test Automation Framework ADR](/architecture-documentation/architectural-decision-records/adrs-list#test-automation-framework)
    - **Handling test execution in the cloud**:
    | VMs | Kubernetes|
    |----------------------------|-----------------------------------------------------------------------------------------------|
Tests can be executed on VMs by installing the Playwright library and running tests similarly to a local environment. | Tests can be executed in Kubernetes by deploying Playwright containers. Kubernetes can manage scaling and distribution of test executions using Playwright's built-in support for running tests in parallel.|
    -**Automation Scope**
     - In each sprint, automated tests will be added for new functionalities and for regression coverage
#### Defect Management
- **Defect Management Process**
  - **Detection**: Defects found during the sprint will be logged immediately in Azure DevOps.
  - **Classification and Prioritization**: Defects will be classified and prioritized in the daily Scrum meeting.
  - **Resolution**: Developers will work on fixing defects as part of the sprint work.
  - **Verification**: Testers will verify the fix and close the defect if it is adequately resolved.

- **Defect Tracking Tools**
  - Azure DevOps

- **Planning and Scheduling**
  - **Testing Schedule**
    - **Sprint Testing**: Will be conducted during each sprint, with daily reviews and immediate feedback.
    - **Release Testing**: Will be conducted at the end of each release, integrating tests from all sprints.
  - **Effort Estimation**
    - Testing efforts will be estimated during sprint planning for each user story and task.

#### Impediments
To manage and address impediments effectively by utilizing Azure DevOps work items. This approach helps in promptly identifying, tracking, and resolving issues that block or delay progress within the project.

#### Test Metrics and Reporting
- **Key Metrics**
  - Number of user stories completed and tested in each sprint.
  - Number of defects found and fixed in each sprint.
  - Average time to fix defects in each sprint.
  - Automated test coverage.

- **Reports**
  - Daily test status report during the sprint.
  - Report at the end of each sprint and at the end of each release.

#### Test Closure

- **Closure Activities**
  - Test feedback at the end of each sprint.
  - Preparation of the final test report at the end of each release.

- **Lessons Learned**
  - Document lessons learned during each sprint retrospective to improve in future sprints.

#### Appendices

- **Supporting Documentation**   
[Include links or references to any additional documentation, such as testing policies, test case templates, etc.]
