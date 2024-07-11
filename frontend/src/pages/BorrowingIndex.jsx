import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BorrowingIndex = () => {
  const [borrowings, setBorrowings] = useState([]);

  const loadBorrowings = () => {
    axios
      .get("http://127.0.0.1:8000/api/borrowings")
      .then((response) => {
        setBorrowings(response.data);
      })
      .catch((error) => {
        alert("Error fetching data: ", error);
      });
  };

  const handleDelete = (id) => {
    if (
      window.confirm("Are you sure you want to delete this borrowing record?")
    ) {
      axios
        .delete(`http://127.0.0.1:8000/api/borrowings/${id}`)
        .then((response) => {
          alert("Borrowing record deleted successfully");
          loadBorrowings();
        })
        .catch((error) => {
          alert("Error deleting data: ", error);
        });
    }
  };

  useEffect(() => {
    loadBorrowings();
  }, []);

  return (
    <div className="container-fluid">
      <h1 className="h3 mb-4 text-gray-800">Borrowing Data</h1>
      <Link to="/borrowings/create" className="btn btn-primary mb-3">
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
                  <th>User</th>
                  <th>Song</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {borrowings.map((borrowing, index) => (
                  <tr key={index}>
                    <td>{borrowing.user.name}</td>
                    <td>{borrowing.song.title}</td>
                    <td className="text-center">
                      <Link
                        to={`/borrowings/${borrowing.id}/edit`}
                        className="btn btn-warning m-1"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(borrowing.id)}
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
    </div>
  );
};

export default BorrowingIndex;
