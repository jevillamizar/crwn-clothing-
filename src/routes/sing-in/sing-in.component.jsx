import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGoolePopup,
  signInWithGooleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  useEffect( () => async () => {
    const response = await getRedirectResult(auth);
    
    if(response){
        const userDocRef = await createUserDocumentFromAuth(response.user);
    }
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGoolePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sing In Page</h1>
      <button onClick={logGoogleUser}>Sing in with Google popup</button>
      <button onClick={signInWithGooleRedirect}>
        Sing in with Google Redirect
      </button>
    </div>
  );
};

export default SignIn;
