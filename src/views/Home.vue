<template>
  <button @click="googleLogin">Googleでログイン</button>
  <div>ログインユーザーは: {{ displayname }}です</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import firebase from "firebase/app";
type displayname = string | null;
export default defineComponent({
  setup() {
    const displayname = ref("" as displayname);

    function googleLogin() {
      console.log(process.env.APIKEY);
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          if (result.user) {
            displayname.value = result.user.displayName;
            console.log(displayname);
          }

          // ...
          console.log("ugegegeß");
        })
        .catch(function(error) {
          console.log("error");
          // Handle Errors here.
          // const errorCode = error.code;
          // const errorMessage = error.message;
          // // The email of the user's account used.
          // const email = error.email;
          // // The firebase.auth.AuthCredential type that was used.
          // const credential = error.credential;
          // ...
        });
    }

    return {
      googleLogin,
      displayname
    };
  }
});
</script>
