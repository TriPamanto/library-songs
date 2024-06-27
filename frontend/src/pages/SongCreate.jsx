import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SongCreate = () => {
  const navigate = useNavigate();
  const [songData, setSongData] = useState({
    title: "",
    artist: "",
    // album: "",
    genre: "",
    year: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSongData({
      ...songData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/songs", songData)
      .then((response) => {
        alert("Song added successfully");
        navigate("/song");
      })
      .catch((error) => {
        alert("Error adding song: ", error);
      });
  };

  return (
    <div className="container-fluid">
      <h1 className="h3 mb-4 text-gray-800">Add New Song</h1>
      <Link to="/song" className="btn btn-secondary mb-2">
        Back
      </Link>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={songData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="artist">Artist</label>
          <input
            type="text"
            className="form-control"
            id="artist"
            name="artist"
            value={songData.artist}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="album">Album</label>
          <input
            type="text"
            className="form-control"
            id="album"
            name="album"
            value={songData.album}
            onChange={handleInputChange}
            required
          />
        </div> */}
        <div className="form-group">
          <label htmlFor="genre">Genre</label>
          <input
            type="text"
            className="form-control"
            id="genre"
            name="genre"
            value={songData.genre}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="year">Release Year</label>
          <input
            type="number"
            className="form-control"
            id="year"
            name="year"
            value={songData.year}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default SongCreate;
