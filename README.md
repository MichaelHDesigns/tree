Link Manager Application
Overview
The Link Manager Application allows users to manage their links easily. It provides an intuitive interface where users can submit links with their titles and view a list of all users and their respective links.

Technologies Used
Frontend: React (located in the /src folder)
Backend: Express (located in the /backend folder)
Data Storage: User data is stored in JSON format in the /data folder.
Project Structure
/src: Contains React components (Home, User List, User Details)
/backend: Contains Express server and API routes
/data: Stores user data in JSON format
Getting Started
Clone the Repository
Clone the repository to your local machine:

bash
Copy
Edit
git clone https://github.com/MichaelHDesigns/tree.git
cd tree
Install Dependencies
Install the necessary dependencies for both the backend and frontend:

Copy
Edit
npm install
Run the Application
Start the backend and frontend servers:

sql
Copy
Edit
npm start
This will start the Express server on http://localhost:5000 and the React app on http://localhost:3000.

How to Use
Add User Data
On the homepage, enter your username, email, and link details (title and URL). Click "Add Link" to add more links. Once you're done, click "Save" to save the user data.

View User List
After saving the data, you can view the list of all users by navigating to the /users route. Click on a username to view the details for that user, including their email and links.

Backend Data Storage
Data is saved in the /data folder in .json files. Each user has their data stored in a separate file.

API Endpoints
POST /save: Saves user data (username, email, links) to the backend.
GET /users: Fetches a list of all users and their data.
Accessing the Application
Open http://localhost:3000 to view the application.
Open http://localhost:5000/users to see a list of users.
