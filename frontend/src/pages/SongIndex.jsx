import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SongIndex = () => {
  const [songs, setSongs] = useState([]);
  const loadSongs = () => {
    axios
      .get("http://127.0.0.1:8000/api/songs")
      .then((response) => {
        setSongs(response.data.data);
        // console.log(response.data.data);
      })
      .catch((error) => {
        alert("Error fetching data: ", error);
      });
  };
  // console.log(songs);
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this song?")) {
      axios
        .delete(`http://127.0.0.1:8000/api/songs/${id}`)
        .then((response) => {
          alert("Song deleted successfully");
          loadSongs();
        })
        .catch((error) => {
          alert("Error deleting data: ", error);
        });
    }
  };

  useEffect(() => {
    loadSongs();
  }, []);

  return (
    <div className="container-fluid">
      <h1 className="h3 mb-4 text-gray-800">Song Data</h1>
      <Link to="/song/create" className="btn btn-primary mb-3">
        Create
      </Link>
      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr className="text-center">
                  <th>Title</th>
                  <th>Artist</th>
                  {/* <th>Album</th> */}
                  <th>Genre</th>
                  <th>Release Year</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {songs.map((song, index) => (
                  <tr key={index}>
                    <td>{song.title}</td>
                    <td>{song.artist}</td>
                    {/* <td>{song.album}</td> */}
                    <td>{song.genre}</td>
                    <td>{song.year}</td>
                    <td className="text-center">
                      <Link
                        to={`/song/${song.id}/edit`}
                        className="btn btn-warning m-1"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(song.id)}
                        className="btn btn-danger m-xl-1"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Genre</th>
            <th>Release Year</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song, index) => (
            <tr key={index}>
              <td>{song.title}</td>
              <td>{song.artist}</td>
              <td>{song.album}</td>
              <td>{song.genre}</td>
              <td>{song.year}</td>
              <td>
                <Link to={`/song/${song.id}/edit`} className="btn btn-warning">Edit</Link>
                <button onClick={() => handleDelete(song.id)} className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};
export default SongIndex;
