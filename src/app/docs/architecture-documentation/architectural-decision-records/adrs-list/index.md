### RiskPhysics ADRs List
| ADR                  | Description                                                                                   |
|----------------------------|-----------------------------------------------------------------------------------------------|
| [Angular and Micro Frontends](/architecture-documentation/architectural-decision-records#angular-and-micro-frontends)     | Choosing UI Framework |

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
