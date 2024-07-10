import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

const BorrowerIndex = () => {
  const [users, setUsers] = useState([]);
  const loadUsers = () => {
    axios
      .get("http://127.0.0.1:8000/api/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        alert("Error fetching data: ", error);
      });
  };

  // const handleDelete = (id) => {
  //   if (window.confirm("Are you sure you want to delete this user?")) {
  //     axios
  //       .delete(`http://127.0.0.1:8000/api/users/${id}`)
  //       .then((response) => {
  //         alert("User deleted successfully");
  //         loadUsers();
  //       })
  //       .catch((error) => {
  //         alert("Error deleting data: ", error);
  //       });
  //   }
  // };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="container-fluid">
      <h1 className="h3 mb-4 text-gray-800">Borrower Data</h1>
      {/* <Link to="/user/create" className="btn btn-primary mb-3">
        Create
      </Link> */}
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
                  <th>Name</th>
                  <th>Email</th>
                  {/* <th>Actions</th> */}
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    {/* <td className="text-center">
                      <Link
                        to={`/user/${user.id}/edit`}
                        className="btn btn-warning m-1"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="btn btn-danger m-xl-1"
                      >
                        Delete
                      </button>
                    </td> */}
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

export default BorrowerIndex;
