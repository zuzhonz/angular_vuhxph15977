// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// base api url
 const B_A_U = "http://localhost:3000/"
//

export const environment = {
  production: false,

  //google cloud login client id config 
  GOOGLE_CLIENT_ID: "983733345847-dc3vtpllmi9s8gkurdvs3i1r3c84c0o8.apps.googleusercontent.com",

  // config api service 
  Base_api:B_A_U,
  student_api: `${B_A_U}students`,
  subjects_api: `${B_A_U}subjects`,

  
  //firebase config upload flie
  firebase: {
    apiKey: "AIzaSyBFmJP-SVIt4c62ixHBiN3jnR_JT5Ygstk",
    authDomain: "angular-ph15977.firebaseapp.com",
    projectId: "angular-ph15977",
    storageBucket: "angular-ph15977.appspot.com",
    messagingSenderId: "983733345847",
    appId: "1:983733345847:web:c072b35431295451aee9b2",
    measurementId: "G-P3ED1GH0XT"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
