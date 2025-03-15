# UserManager

## Description
UserManager is a web application that allows users to register, edit their usernames, and view the total number of registered users. The project follows a simple CRUD (Create, Read, Update, Delete) operation for user management.

## Technologies Used
### Frontend:
- HTML
- CSS (Bootstrap for styling)
- Embedded JavaScript (EJS) for templating

### Backend:
- **Node.js**: Runtime environment for executing JavaScript code.
- **Express.js**: Web framework for handling routes and requests.
- **MySQL2**: Database for storing user details.
- **dotenv**: For managing environment variables.
- **bcrypt**: For password hashing.
- **method-override**: To support PUT and DELETE requests in HTML forms.

## Features
- User registration with email, username, and password.
- Secure password storage using bcrypt.
- View the total number of registered users.
- Edit username with password authentication.
- Responsive UI with Bootstrap.

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Nazimxc/UserManager.git
   ```
2. Navigate to the project directory:
   ```sh
   cd UserManager
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Create a `.env` file in the root directory and add your database credentials:
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=yourpassword
   DB_NAME=usermanager
   ```
5. Run the application:
   ```sh
   npm start
   ```
6. Open `http://localhost:8000` in your browser.

## API Endpoints
| Method | Endpoint          | Description         |
|--------|------------------|---------------------|
| GET    | `/`              | Home page          |
| GET    | `/user`          | Show all users     |
| GET    | `/user/new`      | Add new user form  |
| POST   | `/user/new`      | Create a new user  |
| GET    | `/user/:id/edit` | Edit username form |
| PATCH  | `/user/:id`      | Update username    |

## Contributing
Feel free to fork this repository and submit pull requests.

## License
This project is licensed under the MIT License.

![totaluser](https://github.com/user-attachments/assets/01134079-7eea-4ffc-8321-e74023e2555b)
![listtuser](https://github.com/user-attachments/assets/9b3389c4-0dc4-40fb-bdbe-e749c286e02a)
![adduser](https://github.com/user-attachments/assets/662b44dc-3129-4a14-8c83-6d935d984698)
![edituser](https://github.com/user-attachments/assets/5c86f59f-52a9-4fd9-8f0c-83f27a81bd94)

