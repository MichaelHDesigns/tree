const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");  // Import CORS

const app = express();
const PORT = 5000;

// Use CORS middleware
app.use(cors());

app.use(express.json());

 // Counter to create unique filenames
let userCount = 1;

app.post("/save", (req, res) => {
  console.log(req.body);

  const { username, email, links } = req.body;

  if (!username || !email || !links || links.length === 0) {
    console.log("Missing required fields");
    return res.status(400).send("Missing required fields");
  }

  const userData = { username, email, links };
  const filename = `user${userCount}.json`;
  const filepath = path.join(__dirname, "data", filename);

  fs.writeFile(filepath, JSON.stringify(userData, null, 2), (err) => {
    if (err) {
      console.error("Error saving file:", err);
      return res.status(500).send("Error saving file");
    }
    userCount++;
    res.send("File saved successfully");
  });
});

const getUsersData = (req, res) => {
  const dataDirectory = path.join(__dirname, "data");

  // Read all files in the /data/ folder
  fs.readdir(dataDirectory, (err, files) => {
    if (err) {
      return res.status(500).send("Error reading data directory");
    }

    // Filter to only get .json files
    const jsonFiles = files.filter(file => file.endsWith(".json"));

    // Read all JSON files and send back as an array
    const users = jsonFiles.map((file) => {
      const filePath = path.join(dataDirectory, file);
      const fileData = fs.readFileSync(filePath, "utf-8");
      return JSON.parse(fileData);
    });

    res.json(users);
  });
};

// Endpoint to fetch users' data
app.get("/users", getUsersData);

// Serve static files for React app (optional)
app.use(express.static(path.join(__dirname, "client", "build")));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});