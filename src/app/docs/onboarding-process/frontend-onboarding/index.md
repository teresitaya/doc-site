# {{ NgDocPage.title }}

### Onboarding Process for New Frontend Developer

Welcome to the team! We're excited to have you on board as a new Frontend Developer. This document will guide you through the onboarding process and help you set up your local development environment with the necessary tools and preconditions.

#### Pre-Onboarding Checklist
Before you start, ensure you have the following:
- A computer with administrative access.
- Internet connection.
- An active RP account.
- Access to the team's repository on Azure DevOps (request access if not already provided).

#### Step 1: Install Required Software

1. **Node.js and npm**
   - Download and install the latest LTS version of Node.js from [nodejs.org](https://nodejs.org/).
   - Verify the installation by running the following commands in your terminal:
     ```bash
     node -v
     npm -v
     ```

2. **Git**
   - Download and install Git from [git-scm.com](https://git-scm.com/).
   - Configure Git with your user information:
     ```bash
     git config --global user.name "Your Name"
     git config --global user.email "your.email@example.com"
     ```

3. **Angular CLI**
   - Install the Angular CLI globally:
     ```bash
     npm install -g @angular/cli
     ```
   - Verify the installation:
     ```bash
     ng version
     ```

#### Step 2: Set Up Visual Studio Code (VS Code)

1. **Download and Install VS Code**
   - Download and install VS Code from [code.visualstudio.com](https://code.visualstudio.com/).

2. **Install Required Extensions**
   - Launch VS Code and install the following extensions:
     - Angular Snippets: `Angular Snippets`
     - Angular Language Service: `Angular Language Service`
     - Auto Close Tag: `Auto Close Tag`
     - Auto Comment Blocks: `Auto Comment Blocks`
     - Better Comments: `Better Comments`
     - GitHub Copilot: `GitHub Copilot`
     - GitHub Copilot Chat: `GitHub Copilot Chat`
     - Auto Rename Tag: `Auto Rename Tag`
     - Code Spell Checker: `Code Spell Checker`
     - ESLint: `ESLint`
     - Git Graph: `Git Graph`
     - CSS Peek: `CSS Peek`
     - Nx Console: `Nx Console`
     - npm Dependency Links: `npm Dependency Links`

#### Step 3: Getting Started

1. **Clone the repository**: 
    ```bash 
    git clone https://rp@dev.azure.com/rp/RP/_git/rp-portal-shell
    ````
2. **Install dependencies**: 
    ```bash
     npm install
     ```
4. **Initialize git submodule**: 
     ```bash
    git submodule init
     ```
5. **Update git submodule**:
     ```bash
    git submodule update
    ```
7. **Start the dev server**:
    ``` bash 
    npm run start
    ```

#### Step 4: Additional Resources and Support

1. **Documentation**
   - Familiarize yourself with the project’s documentation available in the repository’s [README.md file](https://rp@dev.azure.com/rp/RP/_git/rp-portal-shell) or the project wiki.

2. **Team Communication**
   - Join the team’s communication channels in Google Chat and introduce yourself.

3. **Mentorship and Support**
   - Feel free to reach out to your assigned mentor or any team member for help and guidance.

#### Conclusion
You are now set up and ready to start contributing to the project. We look forward to seeing your great work and collaboration. Welcome to the team!

If you have any questions or run into any issues, do not hesitate to ask for help. Happy coding!