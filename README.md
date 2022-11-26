[![pipeline](https://github.com/TaylorShane/shanetaylor.dev/actions/workflows/node.js.yml/badge.svg)](https://github.com/TaylorShane/shanetaylor.dev/actions/workflows/node.js.yml)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

# ShaneTaylor.dev

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.1.

## Commit Messages <a name="CommitMessages"><a>

### Conventions <a name="CommitMessageConventions"><a>

This repository follows the [Conventional Changelog](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular) to commit code.

The commit message header consists of the following and cannot be any longer than 72 characters:
`<type>(<scope>):<subject>`

Where type is required and must be one of the following:

```
'build' 'chore' 'deploy' 'docs' 'feat' 'fix' 'perf' 'refactor' 'revert' 'test'
```

Subject is mandatory and is a succinct description of the change and CANNOT contain numbers.

The scope, body, and footer are optional and CAN contain numbers.

Example 1: commit message:

```
feat(charts): implement mock chart data

Implement mock chart data for github service

Closes issue 123
```

**Important!**

> Only commit messages of type `feat`, `fix`, `perf` and `chore` will be shown in the release notes (changelog).

> Only the _type_, the _scope_ and the _subject_ is shown in the release notes (changelog).

### Pre Hooks <a name="PreHooks"><a>

When a commit is made, we use Husky to check only the staged files with `eslint`, `eclint`, and run the unit tests. If any of these stages fail, the commit will fail. Please correct the issues and run the commit again. If you really want to just do the commit without these checks, simply run the commit with the flag `--no-verify`.

## Plugins <a name="Plugins"><a>

We use Prettier for formatting and linting of our files to maintain consistency and readability. Please install as this is REQUIRED.

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

It is recommended that you use VSCode along with the following plugins, for the best developer experience and avoid reformats happening when running pre commit hooks:

- [Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)
- [Beautify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify) - for HTML formatting only
- [Code Metrics](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-codemetrics)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree)

## Creating a new release

For a new release

- `yarn version <patch | minor | major>`
- commit
- git push --follow-tags
  For a new tag:
- `git tag <tagname> -a`
- `git push origin --tags`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
