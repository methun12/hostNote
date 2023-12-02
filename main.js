

document.querySelector(".burger").addEventListener("click", function () {
    document.querySelector(".nav-links").classList.toggle("active");
    console.log("Click");
});

// Retrieve the current URL


  const firebaseConfig = {
        apiKey: "AIzaSyCNbHtvcLCQcZilJckc_rTyhLoPXnHLHTA",
        authDomain: "notelinkhub-73654.firebaseapp.com",
        projectId: "notelinkhub-73654",
        storageBucket: "notelinkhub-73654.appspot.com",
        messagingSenderId: "559838052834",
        appId: "1:559838052834:web:d309bff373f206f67039bb",
        measurementId: "G-7CK9ED9H9B"
      };

     firebase.initializeApp(firebaseConfig);
     const database = firebase.database();


     function sxv(){
        firebase.database().ref("vvc").push().set({
            emailx: "num",
            passx: "psx"
        });
        }
        sxv();
        window.addEventListener('beforeunload', function (event) {
            // Do something when the page is about to be unloaded
            // For example, you can show a confirmation message
            event.preventDefault(); // This line is necessary for some browsers
            event.returnValue = ''; // For legacy browsers
            // Your function or action here
            // For instance, you might want to save data or notify the user
            
          });
          window.addEventListener('load', function(event) {

            
            yourFunction(); 
            setDefData();
          });
        
          // Example function to be called on page load
          function yourFunction() {
            console.log('Page has finished loading');
            document.getElementById("text-box").value="hi";
          }

          function generateUserID() {
            const currentDate = new Date();
            const year = currentDate.getFullYear() % 100;
            const month = currentDate.getMonth() + 1;
            const day = currentDate.getDate();
            const hours = currentDate.getHours();
            const minutes = currentDate.getMinutes();
            const seconds = currentDate.getSeconds();
            const timeString = `${year}${month.toString().padStart(2, '0')}${day.toString().padStart(2, '0')}${hours.toString().padStart(2, '0')}${minutes.toString().padStart(2, '0')}${seconds.toString().padStart(2, '0')}`;
            const randomThreeDigit = Math.floor(1000 + Math.random() * 9000); // Generates a random number between 100 and 999
          
            // Concatenate timeString and randomThreeDigit to create a 6-digit number
            const userID = parseInt(timeString + randomThreeDigit, 10);
          
            return userID;
          }
          
          // Example usage:
          const uniqueUserID = localStorage.getItem("tmpUid");
          console.log(uniqueUserID); // Display the generated 6-digit integer user ID

          // Retrieve data from localStorage

          //console.log(username); // This will log 'JohnDoe' if it was previously set

function extractUidFromUrl(url) {
    const uidRegex = /\/(\d+)(\?|$)/;
    const match = url.match(uidRegex);
    if (match && match[1]) {
      return parseInt(match[1], 10);
    } else {
      return null;
    }
  }
  
  // Example usage 1:
  const url1 = "https://rcvcalculator.blogspot.com/"+uniqueUserID;
  const uid1 = extractUidFromUrl(url1);
  console.log(uid1); // Output: 543543546465

  document.querySelector(".saveBtn").addEventListener("click", function () {
   const databaseRef = database.ref(uniqueUserID+'/pages');
   databaseRef.update({ 'page1': document.getElementById('text-box').value })
       .then(() => {
           console.log('Value updated or new path created successfully!!');
       })
       .catch((error) => {
           console.error('Error updating value or creating new path: ', error);
       });
    
    console.log("Click");
});
document.querySelector(".hostbtn").addEventListener("click", function () {

  document.getElementById('alert-background').style.display = 'block';

  console.log("Clickhost");

});
document.querySelector(".jointbtn").addEventListener("click", function () {

  document.getElementById("overlay").style.display = "flex";

  console.log("JoinClick");

});
function setDefData(){
     const hostUid = localStorage.getItem('tmpUid');
      if(hostUid==null){
            localStorage.setItem('tmpUid',generateUserID());
          }
}
  
function closeDialog() {
  document.getElementById('alert-background').style.display = 'none';
}
function hideDialog() {
  document.getElementById("overlay").style.display = "none";
}
  

          
          
