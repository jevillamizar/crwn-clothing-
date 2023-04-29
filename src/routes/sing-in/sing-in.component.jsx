<<<<<<< Updated upstream
import { signInWithGoolePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGoolePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>Sing In Page</h1>
            <button onClick={logGoogleUser}>Sing in with Google popup</button>
        </div>
    );
=======
import {
  signInWithGoolePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  
  const logGoogleUser = async () => {
    const { user } = await signInWithGoolePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sing In Page</h1>
      <button onClick={logGoogleUser}>Sing in with Google popup</button>
      
    </div>
  );
>>>>>>> Stashed changes
};

export default SignIn;