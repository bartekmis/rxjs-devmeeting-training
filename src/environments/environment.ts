// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAb_AEPj5nRpg8V4QoYZHRkjsSQGGLhyX8",
    authDomain: "rxjs-training.firebaseapp.com",
    databaseURL: "https://rxjs-training.firebaseio.com",
    projectId: "rxjs-training",
    storageBucket: "rxjs-training.appspot.com",
    messagingSenderId: "658855149396"
  }
};
