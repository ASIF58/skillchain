# SwapSkill (SkillChain) 

**SwapSkill** is a peer-to-peer learning platform designed to bridge the gap between knowledge seekers and experts. It allows users to exchange skills without monetary transactions, fostering a community of collaborative learning.

> *Empowering education through mutual exchange.*

[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://swapskill.web.app)
[![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=flat&logo=firebase)](https://firebase.google.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
- [About the Project](#about-the-project)
- [Key Features](#key-features)
- [Live Demo](#live-demo)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Future Scope](#future-scope)
- [Contributing](#contributing)
- [Contact](#contact)

##  About the Project
Traditional education can be expensive and inaccessible. **SwapSkill** solves this by creating a barter system for knowledge. If you know *Coding* and want to learn *Guitar*, SwapSkill helps you find a guitarist who wants to learn to code.

This project was built to facilitate:
- **Zero-cost learning:** Trade time and expertise instead of money.
- **Community building:** Connect with learners globally.
- **Skill verification:** User ratings and feedback loops.

## ✨ Key Features
* **User Authentication:** Secure login and registration using Firebase Auth.
* **Smart Matching:** Find users whose "Skills to Learn" match your "Skills to Teach."
* **Real-time Database:** Instant updates for user profiles and skill listings using Cloud Firestore.
* **Responsive Design:** Optimized for both desktop and mobile usage.
* **Search & Filter:** Easily browse skills by category (Tech, Music, Languages, etc.).

## 🚀 Live Demo
You can view the live deployed project here:  
👉 **[https://swapskill.web.app](https://swapskill.web.app)**

## 🛠️ Tech Stack
This project utilizes a modern serverless architecture:

* **Frontend:** HTML5, CSS3, JavaScript (ES6+)
* **Backend / Database:** Google Firebase (Firestore)
* **Authentication:** Firebase Authentication
* **Hosting:** Firebase Hosting
* **Development Tools:** VS Code, Git

## 💻 Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites
* Node.js and npm installed
* A Firebase project created in the [Firebase Console](https://console.firebase.google.com/)

### Installation

1.  **Clone the repo**
    ```sh
    git clone https://github.com/ASIF58/skillchain.git
    ```
2.  **Navigate to the project directory**
    ```sh
    cd swapskill
    ```
3.  **Install Firebase CLI (if not already installed)**
    ```sh
    npm install -g firebase-tools
    ```
4.  **Login to Firebase**
    ```sh
    firebase login
    ```
5.  **Initialize Firebase (Select your project)**
    ```sh
    firebase init
    ```

##  Usage
1.  Sign up for a new account.
2.  Navigate to your **Profile** and add your skills (what you can teach) and interests (what you want to learn).
3.  Use the **Home** page to browse other users.
4.  Connect with a match and start swapping skills!

## Future Scope
* **Skill Credits (Tokenization):** Implementing a "Skill Coin" for uneven trades.
* **AI Recommendations:** Better matching algorithms using machine learning.
* **Mobile App:** Native Android/iOS application.

##  Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📞 Contact
**Your Name** - [swapskill.project@gmail.com]

Project Link: [https://github.com/ASIF58/skillchain](https://github.com/ASIF58/skillchain)
