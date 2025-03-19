<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBwDBiie8xqHXnCFyVXUrtnqJf4wqHTOOM",
    authDomain: "edms-95b04.firebaseapp.com",
    projectId: "edms-95b04",
    storageBucket: "edms-95b04.firebasestorage.app",
    messagingSenderId: "254253556664",
    appId: "1:254253556664:web:f31ff033b649524a05e54d",
    measurementId: "G-DYKE4433TL"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>