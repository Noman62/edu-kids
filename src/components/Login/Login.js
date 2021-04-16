import React, { useContext, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  //   const [user, setUser] = useState([]);
  const [loggedInUser, setLoggedInUser]=useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };


  const provider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const credential = result.credential;
        const token = credential.accessToken;
        const googleUser = result.user;
        setLoggedInUser(googleUser);
        history.replace(from);
        console.log(result.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        // ...
      });
  };
  return (
    <div
      class="card shadow-sm p-3 mb-5 bg-body rounded"
      style={{
        width: "18rem",
        textAlign: "center",
        marginLeft: "40%",
        marginTop: "10%",
      }}
    >
      <div class="card-body">
        <h3 class="p-3 mb-2 bg-warning text-dark">Login Page</h3>
        <button
          class="p-3 mb-2 bg-success text-white rounded-pill"
          onClick={handleGoogleSignIn}
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
