import React from "react";

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
`;

// Menyematkan CSS ke dalam elemen <style>
const Register = () => {
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
              <form className="user">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-user"
                    id="exampleFirstName"
                    placeholder="Full Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-user"
                    id="exampleInputEmail"
                    aria-describedby="emailHelp"
                    placeholder="Email Address"
                  />
                </div>
                <div className="form-group row">
                  <div className="col-sm-6 mb-3 mb-sm-0">
                    <input
                      type="password"
                      className="form-control form-control-user"
                      id="exampleInputPassword"
                      placeholder="Password"
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="password"
                      className="form-control form-control-user"
                      id="exampleRepeatPassword"
                      placeholder="Repeat Password"
                    />
                  </div>
                </div>
                <button className="btn btn-primary btn-user btn-block">
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
