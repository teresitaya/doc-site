### RiskPhysics ADRs List
| ADR                  | Description                                                                                   |
|----------------------------|-----------------------------------------------------------------------------------------------|
| [Angular and Micro Frontends](/architecture-documentation/architectural-decision-records/adrs-list#angular-and-micro-frontends)     | Choosing UI Framework |
| [Test Automation Framework](/architecture-documentation/architectural-decision-records/adrs-list#test-automation-framework) |  Choosing Test Automation Framework |

#### Angular and Micro Frontends

**Title**: Choosing Angular and Micro Frontends with Nx  
**Date**: 2024-09-25  
**Status**: Accepted  

**Context**: We need a scalable and maintainable frontend architecture for our application that supports independent teams working on different parts of the system. The application requires a robust, component-driven framework with strong tooling and support for building modular applications. Additionally, we want the ability to break the application into micro frontends to enable independent deployment and scaling of different UI modules.

We evaluated several options, including Angular, React, Vue.js, and Svelte, as well as different monorepo management tools.

**Decision**: We chose to use Angular as the primary UI framework and Nx as the tool to manage micro frontends. This decision was made based on the following factors:

   - **Component Reusability**: Angular provides a strong component-driven architecture with built-in support for features like dependency injection, forms, routing, and HTTP services, reducing the need for additional libraries.
   - **Enterprise-Grade Framework**: Angular's comprehensive tooling and built-in TypeScript support provide the structure needed for large-scale applications, particularly when multiple teams are involved.
   - **Nx for Monorepo and Micro Frontends**: Nx provides a monorepo structure that simplifies the management of multiple frontends and libraries, making it easy to share code between micro frontends. Its generators, code scaffolding, and built-in testing support reduce manual overhead.
   - **Separation of Concerns**: With micro frontends, we can independently develop, test, and deploy different sections of the application, improving agility.
   - **Team Expertise**: The team has prior experience with Angular, which will speed up development and reduce learning curves.
  
**Consequences**:
   - **Positive**:
     - **Maintainability**: The component-based architecture and modularity of Angular and Nx will make the application easier to maintain and scale.
     - **Independent Deployment**: Using micro frontends allows different teams to develop, test, and deploy UI modules independently without affecting other parts of the application.
     - **Improved Developer Productivity**: Nx's tooling and generators will accelerate development and reduce errors.
     - **Future-Proofing**: Angular's frequent updates and strong community support ensure long-term viability.
      
   - **Negative**:
     - **Steeper Learning Curve**: New team members unfamiliar with Angular and Nx may experience a learning curve.
     - **Initial Setup Overhead**: Setting up a micro frontend architecture adds complexity to the initial project configuration.

### Test Automation Framework
**Title**: Selection of Test Automation Framework  
**Date**: 2024-09-26  
**Status**: Accepted  

**Context**:
We are building a large-scale application requiring robust end-to-end (E2E) testing, integration with CI/CD pipelines, cross-browser support, and fast feedback loops. Our testing framework must provide flexibility in handling authentication, API testing, and parallel test execution. Additionally, ease of setup, debugging capabilities, and community support are critical to accelerating our development workflow. 

After evaluating various tools like Selenium, Playwright, and Cypress, we considered the following requirements:
- Support for multiple programming languages (Java, TypeScript, JavaScript)
- Cross-browser support (Chrome, Firefox, Edge, Safari)
- Parallel execution and CI/CD integration
- Fast execution times for faster feedback
- Built-in support for debugging, API testing, and cookie handling
- **Additional Tools**:
  - **JUnit5 + Playwright with Java**: Chosen as our primary testing stack to leverage Java for backend testing with a familiar toolchain.
  - **Maven**: For dependency management and to streamline Playwright test commands into our CI/CD pipeline.
  - **Postman**: For API testing to complement Playwright's E2E tests.
  - **JMeter**: For performance and load testing.
- **Alternatives Considered**:
  - **Selenium**: While Selenium supports multiple languages and browsers, the WebDriver-based architecture introduces complexity in test setup and slower execution. It also requires additional tools for debugging and API testing, which could slow down our CI/CD pipeline.
  - **Cypress**: Cypress offers an excellent JavaScript-based testing experience, fast execution, and strong debugging features. However, it lacks comprehensive cross-browser support (limited to Chrome, Edge, and Firefox in beta) and has no mobile device testing support, making it unsuitable for our requirements.

**Decision**:
We have selected **Playwright** as our test automation framework for the following reasons:
- **Language Support**: Playwright supports Java, JavaScript, TypeScript, and Python, giving us flexibility in language choice.
- **Browser Support**: Playwright supports Chrome, Firefox, WebKit (Safari, Edge), which fulfills our cross-browser testing requirements.
- **Execution Speed**: Playwright's direct browser control makes test execution significantly faster compared to Selenium's WebDriver-based architecture.
- **Built-in Features**: Playwright offers built-in handling for cookies, local storage, and automatic waits, simplifying complex testing scenarios.
- **Parallel Execution**: Playwright supports out-of-the-box parallel test execution without the need for additional setup like Selenium Grid.
- **CI/CD Integration**: It integrates easily with most CI/CD pipelines, aligning well with our automation goals.
- **Debugging Tools**: It offers strong debugging tools, including network tracing and time-travel debugging features that simplify the development process.

**Consequences**:
  - **Positive**:
    - Faster test execution and reduced test flakiness due to Playwright's direct browser control and automatic waits.
    - Simplified CI/CD integration and parallel test execution, speeding up our test feedback loop.
    - Comprehensive debugging and network tracing tools will reduce debugging time during development.
    - Built-in mobile device testing support allows us to future-proof the framework for mobile platforms.

  - **Negative**:
    - Slight learning curve for team members unfamiliar with Playwright.
    - Playwright lacks a robust script recorder like Selenium IDE, which may require additional manual effort during test creation.

**References**:
- (2024, April 11). Cypress Documentation: Comprehensive Cypress Test Automation Guide. Retrieved September 3, 2024, from [https://docs.cypress.io/guides/overview/why-cypress](https://docs.cypress.io/guides/overview/why-cypress)
- The Selenium Browser Automation Project. (2023, November 17). Selenium. Retrieved September 3, 2024, from [https://www.selenium.dev/documentation](https://www.selenium.dev/documentation)
- Installation. (n.d.). Playwright. Retrieved September 3, 2024, from [https://playwright.dev/docs/intro](https://playwright.dev/docs/intro)

