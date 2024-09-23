# CI/CD Workflow


This document provides a detailed overview of the CI/CD Workflow defined for RP development process. The primary objectives are to simplify the deployment process, guarantee the quality of the code, and uphold a systematic methodology for the roll-out of new features and updates. This guide encompasses the journey from code creation to production deployment, emphasizing crucial steps, checkpoints, and responsibilities.

### CI/CD Workflow Overview

The CI/CD workflow consists of the following stages:

1. **Analysis**
2. **Code Development**
3. **Development Branch**
4. **QE/Beta Branch**
5. **Production**


#### 1. Analysis
- **Activities**: Initial review, research, and analysis of requirements.
- **Outcome**: A clear understanding of the requirements and backlogs to be implemented.

#### 2. Code Development
- **Activities**: Write and update code based, unit test and documentation on the requirements.
- **Tools**: Integrated Development Environment (IDE) with necessary plugins or extensions based on the project requirements.
- **Outcome**: Approved PR to Development Environment.

#### 3. Development Branch
- **Activities**:
  - **Build**: Compile the code.
  - **Security Scan**: Perform a security scan of the code.
  - **Unit Test**: Execute unit tests to verify the functionality.
  - **Code Analysis**: Analyze the code for quality and adherence to standards.
  - **Review** Review the build results, security scan reports, unit test results, and code analysis.
- **Tools**: Devops.
- **Outcome**: Approved PR to Beta Environment.
- **Gate**: PM approval required before promoting the code to QE/Beta.
![CI/CD Workflow](assets/img/CI-CD-Workflow.png)

#### 4. Beta Branch
- **Activities**:
  - **Development Branch Activities**: Build/Security Scan/Unit Test/Code Analysis/Review.
  - **Regression Testing**: Execute a comprehensive suite of regression tests.
  - **User Acceptance Testing (UAT)**: Conduct UAT to ensure the changes meet the user requirements.
  - **Develop/Update Automation Test**: This step involves creating or modifying automated tests to ensure the functionality of new or updated features in the application.
- **Tools**: Selenium, Appium, JUnit/TestNG, other test automation frameworks.
- **Outcome**: Confirm that the code is stable and meets quality standards.
- **Outcome**: Approved PR to Production Environment.
- **Outcome**: Create Internal Release Notes.
- **Gate**: Approval required from QE and stakeholders before promoting the code to production.

#### 5. Production
- **Activities**:
  - **Release Validation Test**: Manual/Automated Test executed to ensure Release and previous features stability. 
- **Outcome**: The code is deployed to the production environment, making the new features or updates live.
- **Outcome**: Public Release Notes is wrote.

#### Conclusion
Adhering to this CI/CD workflow ensures a consistent, high-quality approach to software development and deployment at RP. By following the detailed steps and utilizing the specified tools, we can achieve a reliable and efficient CI/CD process, leading to better collaboration, minimized errors, and faster recovery from issues.