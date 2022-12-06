<script>
    // @ts-nocheck
    import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
    import { app, auth, googleProvider} from '$firebase';
    import { getAnalytics, setUserProperties } from "firebase/analytics";
    import { base } from "$app/paths";


    
    // function loginWithGoogle() {
	// 	alert('clicked')
	// }
    const loginWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            const analytics = getAnalytics(app);

            // The signed-in user info.
            const user = result.user;
            setUserProperties(analytics, { 
                email: user.email
            });

            window.location.href = base;
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // console.log(error);
        });
    }
</script>
<div class="flex justify-center">
    <!-- <form class="flex flex-col" action="">
        <label for="email">Email</label>
        <input id="email" type="text" placeholder="Your email here">
        <label for="password" type="password" >Password</label>
        <input id="password" type="password" placeholder="Your password here">
        <button type="submit" class="rounded-sm bg-gray-400 w-min">Login</button>
    </form> -->
    <button on:click={loginWithGoogle} class="p-2 border-2 border-gray-200 rounded-lg" ><img class="inline-block" src="/icon/google.png" alt="google"> Login with Google</button>
</div>