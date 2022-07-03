import { getAuth, signInWithEmailAndPassword,signOut } from "firebase/auth";

export const ingreso =(email,password)=>{
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log('Login exitoso',user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Error login',errorCode);
      });
}
 export const cerrarSesion =()=>{
    const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
  console.log('SignOut exitoso')
}).catch((error) => {
  // An error happened.
  console.log('SignOut error')
});
 }