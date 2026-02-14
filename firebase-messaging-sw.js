// Give the service worker access to Firebase Messaging.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in your app's MessagingSenderId.
firebase.initializeApp({
  apiKey: "AIzaSyDwrZVBhR0VSbkbiktvkOsW3iSYJ6PFJ9A",
  authDomain: "swapskill.web.app",
  projectId: "swapskill-6e456",
  storageBucket: "swapskill-6e456.firebasestorage.app",
  messagingSenderId: "692315602994",
  appId: "1:692315602994:web:65cd15b1eafe9d7d133c2b"
});

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
