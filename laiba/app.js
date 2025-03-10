
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getDatabase, ref, push, onChildAdded } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAgyLpDrfXx5Qth72w9NlRrAk1X5WHlg30",
    authDomain: "real-time-chat-2e034.firebaseapp.com",
    projectId: "real-time-chat-2e034",
    storageBucket: "real-time-chat-2e034.firebasestorage.app",
    messagingSenderId: "1021814621560",
    appId: "1:1021814621560:web:6b33968b0175fd4c50748d",
    measurementId: "G-925H64PY5Y"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getDatabase(app);

  window.sendMessage = function () {     
    let username = document.getElementById("username").value;     
    let message = document.getElementById("message").value;      
    
    if (username === "" || message === "") return; 

    push(ref(db, "messages"), {         
        name: username,         
        text: message     
    });

    document.getElementById("message").value = "";
}
onChildAdded(ref(db, "messages"), function(snapshot) {     
    let data = snapshot.val();     
    let messageBox = document.getElementById("messages");     
    let msgElement = document.createElement("p");     
    msgElement.textContent = data.name + ": " + data.text;     
    messageBox.appendChild(msgElement);     
    messageBox.scrollTop = messageBox.scrollHeight;     
}); 

