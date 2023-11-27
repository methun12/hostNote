

document.querySelector(".burger").addEventListener("click", function () {
    document.querySelector(".nav-links").classList.toggle("active");
    console.log("Click");
});
// Retrieve the current URL


 const firebaseConfig = {
     apiKey: "AIzaSyB_qtM8qcqyTqTzjI4V11oVh3udO2HwT6s",
     authDomain: "notelinkhub.firebaseapp.com",
     projectId: "notelinkhub",
     storageBucket: "notelinkhub.appspot.com",
     messagingSenderId: "659379402785",
     appId: "1:659379402785:web:8fa24c5508971c8d23cb60",
     measurementId: "G-61XM19G1HF"
     };
    // const app = initializeApp(firebaseConfig);
   //  const analytics = getAnalytics(app);
   const app = initializeApp(firebaseConfig);
     const analytics = getAnalytics(app);
