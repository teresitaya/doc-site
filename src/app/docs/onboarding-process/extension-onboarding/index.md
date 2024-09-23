# {{ NgDocPage.title }}

Welcome to the team! We're excited to have you on board as a new Browser Extension Developer. This document will guide you through the onboarding process and help you set up your local development environment using the WXT framework, ReactJS, and TypeScript.

#### Pre-Onboarding Checklist
Before you start, ensure you have the following:
- A computer with administrative access.
- Internet connection.
- Access to the team's repository on GitHub/Bitbucket/Azure DevOps (request access if not already provided).
- An active developer account for the relevant browser (e.g., Chrome Web Store, Mozilla Add-ons, etc.).

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

3. **WXT CLI**
   - Install the WXT CLI globally:
     ```bash
     npm install -g @wxt/cli
     ```
   - Verify the installation:
     ```bash
     wxt --version
     ```

4. **Visual Studio Code (VS Code)**
   - Download and install VS Code from [code.visualstudio.com](https://code.visualstudio.com/).

5. **Browser Developer Tools**
   - Ensure you have the Chrome and/or Firefox Developer Tools installed, which allow you to test and debug extensions:
     - [Chrome Extensions Developer Dashboard](https://chrome.google.com/webstore/developer/dashboard)
     - [Firefox Developer Hub](https://addons.mozilla.org/en-US/developers/)

#### Step 2: Set Up Your Development Environment

1. **Clone the Repository**:
   - Clone the project repository using Git:
     ```bash
     git clone https://github.com/organization/project-browser-extension.git
     ```

2. **Install Dependencies**:
   - Navigate to the project folder and install dependencies using npm:
     ```bash
     npm install
     ```

3. **Environment Variables**:
   - Set up environment variables by copying the `.env.example` file to `.env` and configuring the necessary variables for local development.
   - Example:
     ```bash
     API_BASE_URL="https://api.example.com"
     BROWSER="chrome"
     ```

4. **Running the Extension in Development Mode**:
   - Use WXT to build and load the extension into your browser’s developer environment:
     ```bash
     npm run start:chrome
     ```
   - For Firefox or other browsers, adjust the command accordingly:
     ```bash
     npm run start:firefox
     ```

5. **Building the Extension for Production**:
   - When you're ready to build the extension for production, use the following command:
     ```bash
     npm run build
     ```

#### Step 3: Set Up VS Code

1. **Install Required Extensions**
   - Launch VS Code and install the following extensions:
     - **ESLint**: `ESLint`
     - **Prettier - Code Formatter**: `Prettier`
     - **ReactJS Snippets**: `ES7+ React/Redux/React-Native snippets`
     - **TypeScript Hero**: `TypeScript Hero`
     - **Debugger for Chrome**: `Debugger for Chrome`
     - **Jest**: `Jest` (if testing with Jest)
     - **GitLens**: `GitLens — Git supercharged`

#### Step 4: Running Tests

1. **Unit Tests**:
   - Run unit tests using the following command:
     ```bash
     npm run test
     ```

2. **Integration Tests**:
   - If there are integration tests, run them using:
     ```bash
     npm run test:integration
     ```

3. **Debugging**:
   - Use the VS Code Chrome Debugger extension to debug the browser extension directly within the IDE.

#### Step 5: Additional Resources and Support

1. **Documentation**
   - Familiarize yourself with the project’s documentation available in the repository’s [README.md file](https://rp@dev.azure.com/rp/project-browser-extension) or the project wiki.

2. **Team Communication**
   - Join the team’s communication channels (Slack, Google Chat, etc.) and introduce yourself.

3. **Mentorship and Support**
   - You will be paired with a mentor who can help guide you through the project architecture, development practices, and tools used by the team.

#### Conclusion
You are now set up and ready to start developing your browser extension. We look forward to your contributions and collaboration. Welcome to the team!

If you have any questions or run into any issues, don't hesitate to reach out to your mentor or any team member. Happy coding!
