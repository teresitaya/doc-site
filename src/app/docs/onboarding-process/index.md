# {{ NgDocPage.title }}

A smooth and well-structured onboarding process is crucial for helping you, as a new developer, become productive as quickly as possible. Our onboarding process is broken down into more detail:

#### **Setup Documentation**
Ensuring that you can set up your development environment without major roadblocks is the first critical step. Here's what this includes:

- **Repository Access**: 
  - **Instructions**: Follow the steps provided to request or gain access to the necessary repositories. 
  - **Permissions**: Contact the team lead for access and ensure you're aware of which branches are relevant for your tasks (e.g., `development`, `main`, or feature branches).

- **Cloning Repositories**: 
  - **Git Workflow**: The team follows specific version control practices. Whether we use Git Flow or trunk-based development, you’ll need to be aware of the process.
  - **Example**: Use this command to clone the main repository:
    ```bash
    git clone https://github.com/organization/project.git
    ```

- **Setting Up Dependencies**:
  - **Instructions**: A list of dependencies like Node.js, Docker, etc., will be provided with clear installation steps.
  - **Automation**: Where possible, you'll have scripts available (e.g., `setup.sh`) to automate the installation of dependencies or to spin up Docker containers.

- **Environment Configuration**:
  - **Environment Variables**: You will be provided with the necessary environment variables for local development. We will also provide a sample `.env` file (e.g., `.env.example`) to guide you.
  - **Secrets Management**: You’ll learn how we handle sensitive information like API keys and credentials, possibly using tools like GCloud Secrets Manager or Vault.

- **Running the Application**:
  - **Instructions**: A step-by-step guide will show you how to run the application locally, whether through Docker, `npm run dev`, or other commands.
  - **Test Data**: Guidance will be provided on how to set up or access test data, seed the database if needed, and identify which services or endpoints need to be active for the app to function locally.

- **Running Tests**:
  - **Unit Tests**: You'll receive instructions on running unit tests (e.g., `npm run test`) and how to check coverage or logs.
  - **Integration Tests**: There will be documentation on how to set up and run integration tests.
  - **Debugging Tools**: We’ll provide tips on debugging with tools like Chrome DevTools, VSCode, or other relevant platforms.
- **For specific guidance check each Solution Onboarding Process Document**:
  - [Frontend](/onboarding-process/frontend-onboarding)
  - [Backend](/onboarding-process/backend-onboarding)
  - [Extension](/onboarding-process/extension-onboarding)
  - [QE](/onboarding-process/qe-onboarding)
  - [SRE](/onboarding-process/sre-onboarding)

#### **Mentorship/Buddy System**
The mentorship or buddy system will help you quickly integrate with the team culture and our technical processes.

- **Mentor Assignment**: 
  - You will be paired with a senior or experienced engineer. This person will help answer your questions, review your code, and ensure you follow our best practices.
  - Your buddy will also introduce you to team rituals like stand-ups, retrospectives, key tools (AzureDevops, Google Workspace), and our engineering workflows.

- **First Month Engagement**:
  - **1:1 Meetings**: We recommend weekly 1:1 meetings with your mentor to provide feedback, resolve blockers, and track your progress.
  - **Pair Programming**: You'll have some pair programming sessions to help you get familiar with the codebase, coding standards, and contribute to smaller tasks.

- **Knowledge Transfer**:
  - Your buddy will provide you with guidance on the project's architecture and technical decisions.
  - You’ll be introduced to best practices, coding standards, and where to find key documentation and repositories.

#### **90-Day Plan**
The 90-day plan is designed to help you integrate smoothly into the team with clear goals and expectations. It is structured into three phases: learning, contributing, and taking ownership.

- **First 30 Days (Learning & Setup)**:
  - **Goals**: By the end of your first month, you should be familiar with the company’s tools, codebase, and workflows. You should also feel confident in setting up and running the local environment, navigating the repositories, and understanding the broader architecture.
  - **Tasks**: You’ll start with simple bug fixes, documentation updates, or small feature additions to get comfortable with our processes.
  - **Training**: Internal training sessions or relevant resources (like coding standards and system architecture overview) will be made available to help you understand our environment.

- **Next 30 Days (Contributing)**:
  - **Goals**: By the end of your second month, you should be contributing meaningfully to the codebase. You'll be expected to work on more complex work items and take part in code reviews.
  - **Tasks**: In this phase, you'll work on medium-sized features and contribute to sprint planning and retrospectives.
  - **Team Integration**: You’re encouraged to start leading stand-ups or retrospectives to build confidence and improve communication within the team.

- **Final 30 Days (Ownership & Improvement)**:
  - **Goals**: By the end of the third month, you should be taking ownership of small features or projects. At this stage, you'll demonstrate your ability to take a work item from planning to execution and delivery.
  - **Tasks**: You'll work on cross-team collaborations, implement significant parts of the application, or handle complex bugs that require in-depth problem-solving.
  - **Feedback & Evaluation**: At the end of 90 days, you’ll receive formal feedback from your mentor and team lead to review your progress and areas for improvement.

By following this onboarding process, you'll gradually become comfortable with the codebase, team dynamics, and company standards, allowing you to contribute efficiently and confidently.