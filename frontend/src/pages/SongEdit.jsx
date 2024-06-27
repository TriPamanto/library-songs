import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const SongEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [songData, setSongData] = useState({
    title: "",
    artist: "",
    // album: "",
    genre: "",
    year: "",
  });

  const loadSong = useCallback(() => {
    axios
      .get(`http://127.0.0.1:8000/api/songs/${id}`)
      .then((response) => {
        setSongData(response.data.data);
      })
      .catch((error) => {
        alert("Error fetching data: ", error);
      });
  }, [id]);

  useEffect(() => {
    loadSong();
  }, [loadSong]);

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
      .put(`http://127.0.0.1:8000/api/songs/${id}`, songData)
      .then((response) => {
        alert("Song updated successfully");
        navigate("/song");
      })
      .catch((error) => {
        alert("Error updating song: ", error);
      });
  };

  return (
    <div className="container-fluid">
      <h1 className="h3 mb-4 text-gray-800">Edit Song</h1>
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
            type="text"
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
export default SongEdit;
