import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// CSS dalam tag <style>
const styles = `
.bg-gradient-primary {
  background-color: #4e73df;
  background-image: linear-gradient(180deg, #4e73df 10%, #224abe 100%);
  background-size: cover;
}

.bg-login-image {
  background: url('path_to_your_image.jpg');
  background-position: center;
  background-size: cover;
}

.vh-100 {
  height: 100vh;
}

.btn-google {
  background-color: #ea4335;
  color: white;
}

.btn-facebook {
  background-color: #3b5998;
  color: white;
}

.d-flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-center {
  max-width: 400px;
  width: 100%;
}

.password-container {
  display: flex;
  align-items: center;
}

.password-input {
  flex: 1;
}

.password-toggle {
  margin-left: 10px;
  cursor: pointer;
  color: #6c757d;
}
`;

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false);
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const togglePasswordConfirmationVisibility = () => {
    setShowPasswordConfirmation((prevState) => !prevState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Email format is invalid.");
      setTimeout(() => setError(""), 3000);
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    const userData = {
      name: name,
      email: email,
      password: password,
      password_confirmation: passwordConfirmation,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/register",
        userData
      );

      if (response.data.success) {
        console.log("Signup successful:", response.data);
        navigate("/login"); // Redirect to login page after successful signup
      } else {
        setError(response.data.errors); // Handle API errors
      }
    } catch (error) {
      if (error.response) {
        console.error("Error status:", error.response.status);
        console.error("Error data:", error.response.data);
        if (error.response.status === 422) {
          const errors = error.response.data.errors;
          if (errors.email) {
            setError("Email is already taken. Please login instead.");
          } else {
            setError("Registration failed.");
          }
        } else {
          setError("Registration failed.");
        }
      } else if (error.request) {
        console.error("No response from server:", error.request);
        setError("No response from server.");
      } else {
        console.error("Error setting up the request:", error.message);
        setError("Error setting up the request.");
      }
    }
  };

  return (
    <>
      <style>{styles}</style>
      <div className="bg-gradient-primary vh-100 d-flex-center">
        <div className="card o-hidden border-0 shadow-lg my-5 card-center">
          <div className="card-body p-0">
            <div className="p-5">
              <div className="text-center">
                <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
              </div>
              <form className="user" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-user"
                    id="exampleFirstName"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-user"
                    id="exampleInputEmail"
                    aria-describedby="emailHelp"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group password-container">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control form-control-user password-input"
                    id="exampleInputPassword"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    className="password-toggle"
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-eye-slash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                        <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-eye"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                      </svg>
                    )}
                  </span>
                </div>
                <div className="form-group password-container">
                  <input
                    type={showPasswordConfirmation ? "text" : "password"}
                    className="form-control form-control-user password-input"
                    id="exampleRepeatPassword"
                    placeholder="Repeat Password"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                  />
                  <span
                    onClick={togglePasswordConfirmationVisibility}
                    className="password-toggle"
                  >
                    {showPasswordConfirmation ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-eye-slash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                        <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-eye"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                      </svg>
                    )}
                  </span>
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <button
                  type="submit"
                  className="btn btn-primary btn-user btn-block"
                >
                  Register Account
                </button>
                <hr />
              </form>
              <div className="text-center">
                <a className="small" href="#/login">
                  Already have an account? Login!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
