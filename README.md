# Virtual Coworking Office Platform

The **Virtual Coworking Office Platform** is an innovative project developed by **Team Metaverse Realms** during the **CreateX** competition held at **M. L. V. Textile and Engineering College, Rajasthan**. This platform is designed to transform remote work by creating an interactive 2D virtual office space where users can collaborate in real time.

---

## 🚀 Features

- **Interactive 2D Office**: Move your avatar in a dynamic virtual workspace and interact with others.
- **Real-Time Updates**: Powered by **Socket.IO** for seamless communication and movement tracking.
- **User Authentication**: Secure and reliable login to manage user sessions.


---

## 🛠️ Tech Stack

| **Frontend**       | **Backend**        | **Database**    | **Real-Time**      |
|---------------------|--------------------|-----------------|-------------------|
| ReactJS + Vite     | Express.js         | MongoDB         | Socket.IO          |
| TypeScript         | Node.js            |                 | WebSockets         |

---

## 🏆 Acknowledgments

A special shoutout to **CreateX** for organizing this amazing competition and fostering innovation.  
We also extend our heartfelt gratitude to all mentors, organizers, and participants for their support and collaboration.

### About Team Metaverse Realms

We are a group of passionate developers united by a shared vision to bring virtual office experiences to life. This project reflects our dedication to pushing the boundaries of creativity and technology.

---




## 🖥️ Installation and Setup

### Prerequisites

Ensure the following are installed on your system:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)

### Clone the Repository

```bash
git clone https://github.com/your-username/virtual-office.git
cd virtual-office
Install Dependencies
Server Dependencies:
```
```
bash
Copy code
cd server
npm install
Client Dependencies:
```
```
bash
Copy code
cd client
npm install
```
🏃 Running the Application
Development Mode
Start MongoDB:
Ensure MongoDB is running locally or through a cloud instance.

Start the Server:
Navigate to the server directory and start the backend server:
```
bash
Copy code
cd server
npm run dev
Start the Client:
Navigate to the client directory and start the React app:
```
```
bash
Copy code
cd client
npm start
Access the Application:
Open your browser and visit http://localhost:5173.
```
```
🌳 Project Structure
plaintext
Copy code
virtual-office/
├── client/               # ReactJS frontend
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── hooks/        # Custom React hooks
│   │   ├── context/      # Context API for global state management
│   │   ├── styles/       # CSS or Tailwind styles
│   │   └── utils/        # Utility functions
│   └── public/           # Static assets
├── server/               # Express.js backend
│   ├── controllers/      # Controller logic for routes
│   ├── models/           # MongoDB models
│   ├── routes/           # API endpoints
│   ├── middleware/       # Express middleware
│   └── utils/            # Utility functions
├── shared/               # Shared configurations or utilities
└── README.md             # Project documentation
🔧 Configuration
Environment Variables
Create a .env file in the server directory and add the following variables:
```
```
env
Copy code
PORT=5000
MONGO_URI=mongodb://localhost:27017/virtual-office
JWT_SECRET=your_jwt_secret
🚧 Features in Progress
Voice/Video Integration: Add real-time audio and video calls.
```
🤝 Contribution Guidelines
We welcome contributions from the community! To contribute:

Fork this repository.
```
Clone your forked repository:
bash
Copy code
git clone https://github.com/your-username/virtual-office.git
Create a new branch for your feature:
bash
Copy code
git checkout -b feature-name
Make your changes and commit them:
bash
Copy code
git commit -m "Add feature-name"
Push to your branch:
bash
Copy code
git push origin feature-name
Create a Pull Request on the main repository.
```
👤 About the Developer
Name: Ashutosh Paliwal
Role: Full Stack Developer
Email: ashutsohpaliwal26@gmail.com
LinkedIn: Ashutosh Paliwal

👤 About the Developer
Name: Harsh Raj Singh Rathore
Role: Frontend Developer
Email: raj.harsh0123456@gmail.com
LinkedIn: Harsh Raj

👤 About the Developer
Name: Pranjali Bhatt
Role: UI/UX Designer
Email: pranjalibhatt09@gmail.com
LinkedIn: Pranjali Bhatt

👤 About the Developer
Name: Mahi Sharma
Role: Frontend Developer
Email: mahisharma31109@gmail.com
LinkedIn: Mahi Sharma

## ⭐ Show Your Support

If you liked our project, give it a ⭐ and share it with others!
