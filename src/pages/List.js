import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const List = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user details by userId
    const fetchUser = async () => {
      try {
        const response = await fetch("http://localhost:5000/users");
        const users = await response.json();
        console.log(users); // Log the users array
        const userIndex = parseInt(userId, 10);
        setUser(users[userIndex]);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUser();
  }, [userId]);

  return (
    <div className="card">
      {user ? (
        <>
          <h1 className="username">{user.username}</h1>
          <p className="email">{user.email}</p>
          <h3>Links:</h3>
          <ul>
            {user.links.map((link, index) => (
              <li key={index}>
                {link.title}: <a href={link.url} target="_blank" rel="noopener noreferrer">{link.url}</a>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default List;