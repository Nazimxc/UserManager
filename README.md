# User Manager

## Overview
User Manager is a web-based application that allows users to register, edit their usernames, and manage user data efficiently.

## Features
- User Registration
- Edit Username
- Display All Users
- Count Total Users

## Technologies Used
### **Frontend:**
- HTML
- Bootstrap

### **Backend:**
- Node.js
- Express.js
- EJS (Embedded JavaScript Templates)
- MySQL (Database)
- bcrypt (for password hashing)
- dotenv (for environment variables)
- method-override (to support PUT and DELETE requests in forms)

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/Nazimxc/UserManager.git
cd UserManager
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root directory and add your database credentials:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=usermanager
SESSION_SECRET=your_secret_key
```

### 4. Run the Server
```bash
node index.js
```
Or if using nodemon:
```bash
nodemon index.js
```

## API Endpoints
| Method | Endpoint          | Description          |
|--------|------------------|----------------------|
| GET    | `/`              | Homepage            |
| GET    | `/user`          | List all users      |
| POST   | `/user/new`      | Add a new user      |
| GET    | `/user/:id/edit` | Edit a user         |
| PATCH  | `/user/:id`      | Update user details |


## License
This project is licensed under the MIT License.



![totaluser](https://github.com/user-attachments/assets/01134079-7eea-4ffc-8321-e74023e2555b)
![listtuser](https://github.com/user-attachments/assets/9b3389c4-0dc4-40fb-bdbe-e749c286e02a)
![adduser](https://github.com/user-attachments/assets/662b44dc-3129-4a14-8c83-6d935d984698)
![edituser](https://github.com/user-attachments/assets/5c86f59f-52a9-4fd9-8f0c-83f27a81bd94)

