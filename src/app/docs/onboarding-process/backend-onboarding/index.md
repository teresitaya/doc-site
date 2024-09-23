# {{ NgDocPage.title }}
Welcome to the team! We are excited to have you on board as a new Backend Developer. This document will guide you through the onboarding process and help you set up your local development environment with the necessary tools and configurations for C# .NET Core and Google Cloud.

#### Pre-Onboarding Checklist
Before you start, ensure you have the following:
- A computer with administrative access.
- Internet connection.
- An active company Google Cloud account.
- Access to the team’s repository on Azure DevOps (request access if not already provided).
- Visual Studio or preferred IDE (e.g., JetBrains Rider) installed.

#### Step 1: Install Required Software

1. **.NET Core SDK**
   - Download and install the latest .NET Core SDK from [dotnet.microsoft.com](https://dotnet.microsoft.com/download).
   - Verify the installation by running the following command in your terminal:
     ```bash
     dotnet --version
     ```

2. **Google Cloud SDK**
   - Download and install the Google Cloud SDK from [cloud.google.com/sdk](https://cloud.google.com/sdk/docs/install).
   - Authenticate with your company Google Cloud account:
     ```bash
     gcloud auth login
     ```
   - Set the default project:
     ```bash
     gcloud config set project <PROJECT_ID>
     ```

3. **Git**
   - Download and install Git from [git-scm.com](https://git-scm.com/).
   - Configure Git with your user information:
     ```bash
     git config --global user.name "Your Name"
     git config --global user.email "your.email@example.com"
     ```

4. **Docker (if required for microservices or containerized environments)**
   - Download and install Docker from [docker.com](https://www.docker.com/products/docker-desktop).
   - Verify the installation by running:
     ```bash
     docker --version
     ```

#### Step 2: Set Up Your IDE (Visual Studio or Rider)

1. **Download and Install Visual Studio or Rider**
   - Download and install [Visual Studio](https://visualstudio.microsoft.com/vs/) or [JetBrains Rider](https://www.jetbrains.com/rider/).

2. **Install Required Extensions/Plugins**
   - For Visual Studio, ensure the following workloads are installed:
     - **ASP.NET and web development**
     - **Azure development** (optional if you use Azure alongside Google Cloud)
   - Install necessary extensions:
     - **Resharper** (for code productivity, optional for VS users)
     - **Google Cloud Tools for Visual Studio**
   - For Rider, you can install relevant plugins for C# development and Google Cloud integration via the JetBrains marketplace.

#### Step 3: Getting Started

1. **Clone the Repository**:
   - Use the following command to clone the repository:
     ```bash
     git clone https://rp@dev.azure.com/rp/project-backend.git
     ```

2. **Set Up Dependencies**:
   - Navigate to the project folder and install any required dependencies using:
     ```bash
     dotnet restore
     ```
   - If Docker is used, spin up the necessary services with:
     ```bash
     docker-compose up
     ```

3. **Environment Variables**:
   - Copy the `.env.example` file to `.env` and configure the required environment variables for local development (e.g., database connection strings, Google Cloud credentials).
   - Example:
     ```bash
     DATABASE_URL="Server=localhost;Database=MyDB;User Id=sa;Password=Your_password123;"
     GOOGLE_CLOUD_PROJECT_ID="<PROJECT_ID>"
     ```

4. **Run the Application**:
   - To run the application locally, use the following command:
     ```bash
     dotnet run
     ```

5. **Running Tests**:
   - Execute unit tests using:
     ```bash
     dotnet test
     ```
   - For integration tests, follow the documentation in the `tests/` folder.

#### Step 4: Set Up Google Cloud

1. **Configure Google Cloud Services**:
   - Ensure you have access to the necessary Google Cloud services such as Cloud Storage, Firestore, Pub/Sub, or Compute Engine. Reach out to the DevOps team if you need access to any services or projects.

2. **Deploying to Google Cloud**:
   - For deployment, follow the deployment documentation available in the repository. Example deployment commands:
     ```bash
     gcloud app deploy
     ```
   - Ensure you configure the right environment variables for production, staging, or development environments.

#### Step 5: Additional Resources and Support

1. **Documentation**
   - Familiarize yourself with the project’s documentation available in the repository’s [README.md file](https://rp@dev.azure.com/rp/project-backend) or the project wiki.

2. **Team Communication**
   - Join the team’s communication channels (Slack, Google Chat, etc.) and introduce yourself.

3. **Mentorship and Support**
   - You will be paired with a mentor who can guide you through the architecture, tools, and processes. Don’t hesitate to ask questions or request assistance.

#### Conclusion
You are now set up and ready to start contributing to the project. We look forward to seeing your contributions and collaboration. Welcome to the team!

If you have any questions or run into any issues, please reach out to your mentor or any team member. Happy coding!
