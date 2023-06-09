import { GoogleSignin } from '@react-native-google-signin/google-signin';

export const configureGoogleSignin = async () => {
  await GoogleSignin.configure({
    webClientId: '765672974439-2gssr3k82oph27ghs1ok6dfv4fnutifu.apps.googleusercontent.com', // Replace with your web client ID
    offlineAccess: false, // Set to true to enable offline access
  });
};

export const signInWithGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    // Handle the signed-in user information
    console.log(userInfo);
  } catch (error) {
    // Handle error
    console.log(error);
  }
};