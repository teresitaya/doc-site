# {{ NgDocPage.title }}

This document aims to establish a set of guidelines that developers should adhere to when contributing to the project. These best practices are designed to ensure a consistent development process, high code quality, and comprehensive documentation.

#### 2.1 Semantic Versioning
Follow semantic versioning (SemVer) guidelines for version increments:
- **Major Release**: Significant new features, code refactoring, or third-party library upgrades.
  - Update the first number of the version.
  - Update `RELEASE_NOTES.md` and relevant documentation.
- **Minor Release**: Smaller new features or improvements.
  - Update the second number of the version.
  - Update `RELEASE_NOTES.md` and other related documentation.
- **Patch Release**: Low-risk bug fixes.
  - Update the third number of the version.
  - Update `RELEASE_NOTES.md`, `CHANGE_LOGS.md` and other related documentation.

#### 2.2 Automated Code Standard Review
Implement automated code standard checks to enforce best practices and minimize errors in every pull request (PR):
- **Automated Checks Implementation**: Integrate automated code standard checks into the PR workflow to systematically review code against predefined standards and practices.
- **Enforcement of Best Practices**: Ensure that these checks enforce adherence to coding guidelines, style conventions, and other established standards, helping maintain code quality and consistency.

#### 2.3 Code Formatting
Integrate a code formatting extension or tool to ensure consistent code formatting across the project:
- **Automated Formatting Setup**: Configure the code formatting tool to automatically format code changes upon saving or committing, ensuring consistency without manual intervention.
- **Enforce Formatting Rules**: Integrate code formatting rules into the linting process to enforce standards and catch any deviations during code reviews and continuous integration (CI) processes.

#### 2.4 Code Comments
Enhance code readability and maintainability by incorporating meaningful comments:
- **Class/Method Declaration Comments**: Add comments to every new class/method declaration to provide a clear understanding of its purpose and functionality at a high level.
- **Internal Method Comments**: Insert internal comments within methods to explain complex logic or functionality, aiding comprehension for developers who may encounter the code in the future.

#### 2.5 Unit Test Coverage Increase
Promote code robustness and error minimization by mandating an increase in unit test coverage with every PR:
- **Coverage Requirement**: Make it a prerequisite for every PR to include additional unit tests, ensuring basic flows are thoroughly tested.
- **Error Minimization**: By expanding test coverage, the likelihood of undetected bugs decreases, leading to more reliable code.

#### 2.6 Test Cases Compliance
Guarantee adherence to defined test cases for all work items:
- **Comprehensive Testing**: Ensure that all specified test cases for each work item are meticulously reviewed and verified to meet compliance standards.
- **Validation of Test Coverage**: Confirm that the executed test cases adequately cover the functionality outlined in the work items, ensuring thorough testing of the implemented features.

#### 2.7 Pull Request Naming Convention
Follow a consistent naming convention for PR titles:
- **Prefix**: Use `PR` and a relevant prefix indicating the type of change.
  - `feat`: New feature implementation.
  - `fix`: Bug fix.
  - `refactor`: Code refactoring.
  - `docs`: Documentation changes.
  - `style`: Code style/formatting changes.
  - `test`: Adding or modifying tests.
  - `chore`: Routine tasks/tooling changes.
- **Brief Description**: Provide a concise and descriptive title summarizing the purpose of the PR.
- **Issue Reference**: Include the corresponding issue number from your issue tracking system (e.g., GitHub issues) if applicable.

Example Pull Request Titles:
- `PR-feat: Add user authentication functionality`
- `PR-fix: Resolve issue with form validation (#456)`
- `PR-refactor: Update data fetching logic`
- `PR-docs: Update README with deployment instructions`
- `PR-test: Add unit tests for user service`
- `PR-style: Format codebase using Prettier`
- `PR-chore: Update Angular dependencies`

#### 2.8 UI/UX Check for Major/Minor Releases
Perform UI/UX checks for every major or minor release to ensure quality standards are met.

#### a. Standards Applied to Frontend Solutions
1. **Semantic Versioning**: Follow versioning guidelines. Update version in `package.json` field of each project.
2. **Automated Code Standard Review**: Apply linting for frontend code using the `eslint` library for Angular environments.
3. **Code Formatting**: Ensure consistent code formatting using the `prettier` library for Angular environments.
4. **Code Comments**: Include meaningful comments using the `Better Comments` extension for VSO.
5. **Unit Test Coverage Increase**: Increase unit test coverage.
6. **Test Cases Compliance**: Check test cases compliance.
7. **Pull Request Naming Convention**: Follow guidelines.
8. **UI/UX Check for Major/Minor Releases**: Perform UI/UX checks for every major or minor release to ensure quality standards.

#### b. Standards Applied to Backend Solutions
1. **Semantic Versioning**: Follow versioning guidelines.
2. **Automated Code Standard Review**: Apply linting for backend code using one of these options: `StyleCop`, `ReSharper`, `.Code`.
3. **Code Formatting**: Ensure consistent code formatting using `dotnet format` with `.editorconfig` file.
4. **Code Comments**: Include meaningful comments using one of these options: `XML Documentation Comments`, `GhostDoc`, `CodeMaid`, `DocFX`.
5. **Unit Test Coverage Increase**: Increase unit test coverage.
6. **Test Cases Compliance**: Check test cases compliance.
7. **Pull Request Naming Convention**: Follow guidelines.

#### c. Standards Applied to Extension Solution
1. **Semantic Versioning**: Follow versioning guidelines. Update version in `manifest.json` field of each project.
2. **Automated Code Standard Review**: Apply linting for frontend code using the `eslint` library for Typescript environments.
3. **Code Formatting**: Ensure consistent code formatting using the `prettier` library for Typescript environments.
4. **Code Comments**: Include meaningful comments using the `Better Comments` extension for VSO.
5. **Unit Test Coverage Increase**: Increase unit test coverage.
6. **Test Cases Compliance**: Check test cases compliance.
7. **Pull Request Naming Convention**: Follow guidelines.
