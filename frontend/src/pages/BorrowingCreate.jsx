import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const BorrowingCreate = () => {
  const navigate = useNavigate();
  const [borrowingData, setBorrowingData] = useState({
    user_id: "",
    song_id: "",
  });
  const [users, setUsers] = useState([]);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    // Fetch users and songs for the dropdowns
    axios
      .get("http://127.0.0.1:8000/api/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching users!", error);
      });

    axios
      .get("http://127.0.0.1:8000/api/songs")
      .then((response) => {
        setSongs(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching songs!", error);
      });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBorrowingData({
      ...borrowingData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/borrowings", borrowingData)
      .then((response) => {
        alert("Borrowing added successfully");
        navigate("/borrowings");
      })
      .catch((error) => {
        alert("Error adding borrowing: ", error);
      });
  };

  return (
    <div className="container-fluid">
      <h1 className="h3 mb-4 text-gray-800">Add New Borrowing</h1>
      <Link to="/borrowings" className="btn btn-secondary mb-2">
        Back
      </Link>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="user_id">User</label>
          <select
            className="form-control"
            id="user_id"
            name="user_id"
            value={borrowingData.user_id}
            onChange={handleInputChange}
            required
          >
            <option value="">Select User</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="song_id">Song</label>
          <select
            className="form-control"
            id="song_id"
            name="song_id"
            value={borrowingData.song_id}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Song</option>
            {songs.map((song) => (
              <option key={song.id} value={song.id}>
                {song.title}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BorrowingCreate;
