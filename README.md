# Documentation Portal

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.3 and [ng-docs](https://ng-doc.com/) library.

## Table of Content
- [Documentation Portal](#documentation-portal)
  - [Table of Content](#table-of-content)
  - [Introduction](#introduction)
  - [Quick Start](#quick-start)
  - [Documentation Development](#documentation-development)

## Introduction

Welcome to the Documentation Portal. This project is built using Angular, a powerful and widely-used framework for building web applications, and the ng-docs library, a tool specifically designed to facilitate the creation of documentation within Angular projects.

The main goal of this project is to provide a comprehensive and user-friendly platform for documentation. It leverages the power of TypeScript, a statically typed superset of JavaScript that adds optional types, classes, and modules to JavaScript, enhancing the development experience.

With the use of npm, the package manager for JavaScript, managing dependencies for the project becomes a breeze. This allows us to focus more on developing the features that matter.

Whether you're a developer looking to contribute or a user seeking information, we hope this portal serves your needs effectively and efficiently.
 
## Quick Start

Follow these steps to get the project up and running on your local machine:

1. **Clone the repository:** Use the command `git clone https://github.com/teresitaya/doc-site.git` to clone the repository to your local machine.

2. **Navigate into the directory:** Use the command `cd doc-site` to navigate into the directory of the cloned repository.

3. **Install dependencies:** Use the command `npm install` to install all the necessary dependencies for the project.

4. **Start the development server:** Use the command `npm start` or `ng serve` to start the development server. Once the server is running, navigate to `http://localhost:4200/` in your web browser. The application will automatically reload if you change any of the source files.

5. **Build the project:** Use the command `npm run build` or `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

6. **Run unit tests:** Use the command `npm test` or `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Documentation Development

This project uses the ng-docs library for creating and managing documentation. Here's how you can create and update the documentation:
1. **Navigate into the directory:** Use the command `cd src/app/docs` to navigate into the docs directory.
   
2. **Creating a [New Page](https://ng-doc.com/docs/file-entities/page):** To create a new documentation page, use the following command:

```bash
ng g @ng-doc/builder:page "Page Name"
```
2. **Creating a [New Category](https://ng-doc.com/docs/file-entities/category):** To create a new documentation category, use the following command:

```bash
ng g @ng-doc/builder:category "Category Name"
```
1. **Creating a [New API](https://ng-doc.com/docs/file-entities/api):** To create a new documentation API, use the following command:

```bash
ng g @ng-doc/builder:api
```

