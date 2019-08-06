import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

import config from "config/firebase";

firebase.initializeApp(config);

export default firebase;
