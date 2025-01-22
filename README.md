Link Manager Application
Overview
The Link Manager Application allows users to manage their links by providing a user-friendly interface where users can submit links along with their titles. It also lets users view a list of all users and their respective links. This application is built using:

React for the frontend (located in the /src folder)
Express for the backend (located in the /backend folder)
JSON data storage in the /data folder
Project Structure
/src - Contains all the React components, including the Home page, User List, and individual user details.
/backend - Contains the Express server setup and API routes for handling data operations.
/data - Stores user data in JSON format.
Getting Started
Clone the Repository
Clone the repository to your local machine:
git clone https://github.com/MichaelHDesigns/tree.git
cd tree

Install Dependencies
Install the necessary dependencies for both the backend and frontend:
npm install

Run the Application
Start both the backend and frontend servers:
npm start

This will start:

The Express server on http://localhost:5000
The React app on http://localhost:3000
How to Use
Add User Data
On the homepage, enter your username, email, and link details (title and URL).
Click "Add Link" to add more links.
Once you're done, click "Save" to save the user data.
View User List
After saving the data:

Navigate to the /users route to view the list of all users.
Click on a username to view the details for that user, including their email and links.
Backend Data Storage
Data is saved in the /data folder in the form of .json files. Each user has their data stored in a separate file.

API Endpoints
POST /save: Saves user data (username, email, links) to the backend.
GET /users: Fetches a list of all users and their data.
Accessing the Application
Open http://localhost:3000 to view the application.
Open http://localhost:5000/users to see a list of users.
