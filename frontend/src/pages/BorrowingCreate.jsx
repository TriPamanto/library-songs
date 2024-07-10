import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BorrowingCreate = () => {
  const [users, setUsers] = useState([]);
  const [songs, setSongs] = useState([]);
  const [user_id, setUserId] = useState("");
  const [song_id, setSongId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/users").then((response) => {
      setUsers(response.data);
    });
    axios.get("http://127.0.0.1:8000/api/songs").then((response) => {
      setSongs(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const borrowing = { user_id, song_id };

    axios
      .post("http://127.0.0.1:8000/api/borrowings", borrowing)
      .then((response) => {
        alert("Borrowing record created successfully");
        navigate("/borrowings");
      })
      .catch((error) => {
        alert("Error creating borrowing record: ", error);
      });
  };

  return (
    <div className="container-fluid">
      <h1 className="h3 mb-4 text-gray-800">Create Borrowing</h1>
      <div className="card shadow mb-4">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>User</label>
              <select
                className="form-control"
                value={user_id}
                onChange={(e) => setUserId(e.target.value)}
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
              <label>Song</label>
              <select
                className="form-control"
                value={song_id}
                onChange={(e) => setSongId(e.target.value)}
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
      </div>
    </div>
  );
};

export default BorrowingCreate;
