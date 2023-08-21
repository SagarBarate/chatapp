import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_GW7CMUvmway40B6rE1FsJj0gTEaDyD4",
  authDomain: "reactchatapp-6126e.firebaseapp.com",
  projectId: "reactchatapp-6126e",
  storageBucket: "reactchatapp-6126e.appspot.com",
  messagingSenderId: "286429856053",
  appId: "1:286429856053:web:de179e1dfaba0ca8114c7c",
  measurementId: "G-C05R75ET96"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();




















// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";


// const firebaseConfig = {
//   apiKey: "AIzaSyA_GW7CMUvmway40B6rE1FsJj0gTEaDyD4",
//   authDomain: "reactchatapp-6126e.firebaseapp.com",
//   projectId: "reactchatapp-6126e",
//   storageBucket: "reactchatapp-6126e.appspot.com",
//   messagingSenderId: "286429856053",
//   appId: "1:286429856053:web:de179e1dfaba0ca8114c7c",
//   measurementId: "G-C05R75ET96"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth();
// export const storage = getStorage();
// export const db = getFirestore();






































// // import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// // import {getAuth} from "firebase/auth";
// // import { getStorage} from "firebase/storage";
// // import { getFirestore } from "firebase/firestore";


// // const firebaseConfig = {

// //   // apiKey: "AIzaSyBKgyQY90_CsTVFVDqOjx9vTlJ8h5w38S8",
// //   // authDomain: "catchup-203f6.firebaseapp.com",
// //   // projectId: "catchup-203f6",
// //   // storageBucket: "catchup-203f6.appspot.com",
// //   // messagingSenderId: "864717946184",
// //   // appId: "1:864717946184:web:4695776a085709cc8d477d",
// //   // measurementId: "G-QRVS83HN75"


// //   apiKey: "AIzaSyA4fz2eqwYNaveLLfIDNoZiFQtEzboRpOo",
// //   authDomain: "chat-16dd5.firebaseapp.com",
// //   projectId: "chat-16dd5",
// //   storageBucket: "chat-16dd5.appspot.com",
// //   messagingSenderId: "751013626364",
// //   appId: "1:751013626364:web:951157172ce31298ce7279",
// //   measurementId: "G-JHMP7NGQX7"
// // };

// // // Initialize Firebase
// // export const app = initializeApp(firebaseConfig);
// // export const auth = getAuth();
// // export const analytics = getAnalytics(app);
// // export const storage = getStorage();
// // export const db = getFirestore();
