const B_A_U = "https://62d8e5fb9088313935969acd.mockapi.io/"

export const environment = {
  production: true,

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
   },

};
