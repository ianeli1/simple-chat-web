import firebase from 'firebase';
import uuid from 'uuid';
firebase.initializeApp(
  JSON.parse(import.meta.env.SNOWPACK_PUBLIC_FIREBASE_CONFIG!),
);
const auth = firebase.auth();
const storage = firebase.storage();

export async function checkAuth() {
  return await new Promise<boolean>((resolve) => {
    auth.onAuthStateChanged((a) => {
      if (a?.uid) {
        resolve(true);
      } else resolve(false);
    });
  });
}

/**
 *
 * @param email The user's email
 * @param password The user's password
 *
 * @returns {string} Firebase JWT Token
 *
 * @throws `invalid-email` if the email address is not valid.
 * @throws `user-disabled` Thrown if the user corresponding to the given email has been disabled.
 * @throws `user-not-found` Thrown if there is no user corresponding to the given email.
 * @throws `wrong-password` Thrown if the password is invalid for the given email, or the account corresponding to the email does not have a password set.
 */
export async function signIn(email: string, password: string) {
  try {
    const u = await auth.signInWithEmailAndPassword(email, password);

    /**safas */
    return await u.user?.getIdToken(true);
  } catch (e) {
    if (e.code) {
      //get the last part of "auth/what-went-wrong"
      throw e.code.split('/').pop();
    } else {
      throw e;
    }
  }
}

export async function uploadImage(
  uri: string,
  progress?: (percentage: number) => void,
): Promise<string> {
  try {
    const response = await fetch(uri);
    const blob = await response.blob();
    const ref = storage.ref().child(uuid.v4());
    await new Promise<void>((resolve, reject) => {
      ref.put(blob).on(
        'state_changed',
        progress &&
          ((snap) => progress((snap.bytesTransferred / snap.totalBytes) * 100)),
        (e) => {
          console.log('An error ocurred while uploading an image', { uri, e });
        },
        () => resolve(),
      );
    });

    return (await ref.getDownloadURL()) as string;
  } catch (e) {
    throw e;
  }
}
