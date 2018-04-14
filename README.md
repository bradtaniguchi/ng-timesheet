# NgTimesheet

## Description

NgTimesheet is an angular firebase project that allows teams of users to keep track of their "timesheets" or timepunches for projects using a realtime database, progressive web app features such as offline data, material design, and responsive UI.

## Installing and running locally

To run the application locally for development need to first create a firebase project from the firebase console found [here](https://console.firebase.google.com). Next you need to update your local environment variables. This can easily be done by creating a file `.env` in the root of this project, and adding the following environment variables so your `.env` file looks like:

```
FIREBASE_API_KEY=<your-app-api-key>
FIREBASE_PROJECT_ID=<your-app-id>
FIREBASE_AUTH_DOMAIN=<your-app-id>.firebaseapp.com
```

Finally, you can run the project by running `npm run start`. Navigate to `http://localhost:4200/` and the app will automatically reload when you change any source files.

To deploy you will need to install the package `firebase` globally and authenticate.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running Tests

Run `npm run test` to execute unit tests via [Karma](https://karam-runner.github.io) Any pushes to the following branches will also automatically be tested at [circleci.com](https://circleci.com/)

* master
* test-\*
* ci-\*

E2E tests are not currently being worked on yet, but will be in the future.

## Deployment

Like most other firebase app, you can deploy to your firebase project by running `npm run deploy`, this will build your angular files and run the command `firebase deploy` to deploy the files to the set firebase project.

## Built With

[Angular](https://github.com/angular/angular), [@angular/cli](https://github.com/angular/angular-cli), [@angular/material](https://github.com/angular/material2), [firebase](https://github.com/firebase/firebase-js-sdk), [angularfire2](https://github.com/angular/angularfire2)

## Contributing

### Got a question or a problem?

Open an issue with the prefix/label `help`

### Found a bug?

Open an issue with the prefix/label `bug`

### Want a feature?

Open an issue with the prefix/label `feature-request`

## Authors

[Brad Taniguchi](https://github.com/bradtaniguchi)

## License

The MIT License

```
Copyright 2018 Brad Taniguchi

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
