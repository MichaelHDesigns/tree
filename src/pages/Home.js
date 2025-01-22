import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [links, setLinks] = useState([]);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    title: "",
    url: "",
  });
  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Add link to the list
  const addLink = () => {
    if (formData.title && formData.url) {
      setLinks([...links, { title: formData.title, url: formData.url }]);
      setFormData({ ...formData, title: "", url: "" });
    }
  };

  // Save data (including username, email, and links) to the backend
  const saveData = async () => {
    const userData = {
      username: formData.username,
      email: formData.email,
      links: links,
    };

    console.log(userData);

    const response = await fetch("http://localhost:5000/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      alert("Data saved!");
      setLinks([]); // Clear links after saving
      setFormData({ username: "", email: "", title: "", url: "" });
    } else {
      alert("Error saving data");
    }
  };

  // Navigate to the user list page when clicked
  const viewUserList = () => {
    // You can fetch all users and use the index to navigate if needed
    navigate("/users");
  };

  return (
    <div>
      <h1>Link Manager</h1>
      <form>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          placeholder="Link Title"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          type="url"
          name="url"
          placeholder="Link URL"
          value={formData.url}
          onChange={handleChange}
        />
        <button type="button" className="add-button" onClick={addLink}>
          Add Link
        </button>
      </form>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            {link.title} - {link.url}
          </li>
        ))}
      </ul>
      <button className="save-button" onClick={saveData}>Save</button>
    </div>
  );
};

export default Home;