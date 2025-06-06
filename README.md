# React Hotel Review Application
React Application that has state management with _Context API_ developed with TDD in mind that use _Cypress_ for _End to End_ testing (E2E) and _React Testing Library_ tool for _unit testing_.

## Git commands mostly used

- `git remote add origin <repository url>` to sync project to remote
- `git push --force -u -origin master` to push to remote
- `git add .` to add changes to commit
- `git commit -m "message"` to do commit with message
- `git push -u origin master` to push changes to origin
- `git log --oneline` to view commit logs
- `git status` to view current git status

## React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration
If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Starting project setup and scaffolding + basic structure
`npm create vite@latest [project-name]` to create a React project using Vite, then follow the prompts. After project creation go to project folder and run these commands: `npm install` and `npm run dev` to try application.

## Setup Json server
We'll follow instruction in this page to create a fake server https://my-json-server.typicode.com/:
1. Create a repository on GitHub (<your-username>/<your-repo>)
2. Create a db.json file
3. Visit https://my-json-server.typicode.com/<your-username>/<your-repo> to access your server

No registration. Nothing to install.

We can also install [JSON Server|https://github.com/typicode/json-server] in Local environment and it is my choice.

`npm install json-server` to install Json Server and then create a file db.json and pass it to Json Sever Cli with this command
`npx json-server db.json` or `json-server --watch db.json`, run json-server --help for a list of options.

## Unit Test Components

`npm install -D vitest` to install vitest that is a tool for testing more here: https://vitest.dev/

From this page: https://dev.to/abhi0498/vitest-blazing-fast-component-testing-for-react-2992
// package.json
{
  "scripts": {
    "test": "vitest",
    "test:watch": "vitest --watch",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage"
  }
}

These scripts facilitate various testing scenarios:

- `test`: Run all tests.
- `test:watch`: Execute tests in watch mode.
- `test:ui`: Launch the Vitest UI.
- `test:coverage`: Generate a coverage report.

`npm install -D vitest jsdom` 'Cause i had a problem a try to run this install command but i'm not sure that is needed.

`npm run test` to run test with vitest. The first test 

The first test is written in a file that has the same name and the same extension that the relative component but we have .test. suffix between the name and te extension of the component file.
In this example we have: NavBar.jsx - NavBar.test.jsx.
When we run this first test we can see that a new foder is created: `__snapshots__` that have a file inside named: _navBar.test.jsx.snap_ that is a HTML file rendered and used to test the rendered component.

> Relative commit: First Component test example. 

In the second example we pass a _prop_ to the NavBar component and a new snapshot is (re)generated, but if we change the value for the prop the snapshot is not regenerated and 'cause the prop in the test and the prop in the snapshot doesn't match the test fail.

`vitest -u` or `vitest --update` to update snapshot, more on this: https://vitest.dev/guide/snapshot.html
We'll add another command in package.json, `test:snapUpdate` --> `npm run test:snapUpdate` to update snapshot.

> Relative commit: Second unit component test.

Vitest has a very useful feature that show you how many lines of code have been covered by your tests.
The higher your testing coverage, the more reason to assume your code is stable.
You can check the test coverage of your code by executing the test script command with the --coverage flag and an extra -- in between, or use the following command in your terminal.

`npm run test -- --coverage` is executed with a new script command added to package.json script section `test:coverage`

> [!Note]
> Testing coverage only tells us something about the lines and the functions of your code that have been tested and not their actual implementation. Having a test coverage of 100% doesn't mean that there aren't any bugs in your code, as there will always be edge cases. Also, reaching a testing coverage of 100% means that you may end up spending more time on writing tests than on actual code. Usually, a testing coverage above 80% is considered good practice.

We have a value of 33% of coverage in the branch column and that can be inceremented by implement other prop in the NavBar component tha now is missing, now we have title prop but the component can receive three prop (goBack and openForm).

More on https://vitest.dev/guide/coverage.html;

> Relative commit: Vitest Unit test coverage.

