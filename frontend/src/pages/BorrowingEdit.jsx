import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const BorrowingEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [borrowingData, setBorrowingData] = useState({
    user_id: "",
    song_id: "",
  });
  const [users, setUsers] = useState([]);
  const [songs, setSongs] = useState([]);

  // Function to fetch borrowing details by ID
  const loadBorrowing = useCallback(() => {
    axios
      .get(`http://127.0.0.1:8000/api/borrowings/${id}`)
      .then((response) => {
        setBorrowingData(response.data);
      })
      .catch((error) => {
        alert("Error fetching data: ", error);
      });
  }, [id]);

  // Function to fetch users and songs for dropdowns
  useEffect(() => {
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
        setSongs(response.data.data); // Access 'data' property for songs
      })
      .catch((error) => {
        console.error("There was an error fetching songs!", error);
      });
  }, []);

  // Handle input change for borrowing fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBorrowingData({
      ...borrowingData,
      [name]: value,
    });
  };

  // Handle form submission for updating borrowing
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://127.0.0.1:8000/api/borrowings/${id}`, borrowingData)
      .then((response) => {
        alert("Borrowing updated successfully");
        navigate("/borrowings");
      })
      .catch((error) => {
        alert("Error updating borrowing: ", error);
      });
  };

  return (
    <div className="container-fluid">
      <h1 className="h3 mb-4 text-gray-800">Edit Borrowing</h1>
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

export default BorrowingEdit;
