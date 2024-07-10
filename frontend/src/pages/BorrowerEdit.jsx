import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const BorrowerEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });

  const loadUser = useCallback(() => {
    axios
      .get(`http://127.0.0.1:8000/api/users/${id}`)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        alert("Error fetching data: ", error);
      });
  }, [id]);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://127.0.0.1:8000/api/users/${id}`, userData)
      .then((response) => {
        alert("User updated successfully");
        navigate("/borrower");
      })
      .catch((error) => {
        alert("Error updating user: ", error);
      });
  };

  return (
    <div className="container-fluid">
      <h1 className="h3 mb-4 text-gray-800">Edit Borrower</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={userData.email}
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

export default BorrowerEdit;
