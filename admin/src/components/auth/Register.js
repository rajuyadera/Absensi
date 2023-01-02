import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const Register = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/register", {
        name: name,
        username: username,
        password: password,
        confPassword: confPassword,
      });
      toast(response.data.msg, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.msg);
      }
    }
  };
  
return (
    <>
  <div class="container position-sticky z-index-sticky top-0"></div>
      <main class="main-content  mt-0">
        <section>
          <div class="page-header min-vh-100">
            <div class="container">
              <div class="row">
              <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
                <div class="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto">
                  <div class="card card-plain">
                    <div class="card-header pb-0 text-start">
                      <h4 class="font-weight-bolder text-center">Register</h4>
                      <p class="mb-0">
                        Enter your Username and password to Register
                      </p>
                    </div>
                    <div class="card-body">
                      <form onSubmit={Register} role="form">
                        <div class="mb-3">
                          <input
                            type="text"
                            class="form-control form-control-lg"
                            placeholder="Name"
                            value={name}
                            onChange={(e)=> setName(e.target.value)}
                            aria-label="Name"
                          />
                        </div>
                        <div class="mb-3">
                          <input
                            type="text"
                            class="form-control form-control-lg"
                            placeholder="Username"
                            value={username}
                            onChange={(e)=> setUsername(e.target.value)}
                            aria-label="Email"
                          />
                        </div>
                        <div class="mb-3">
                          <input
                            type="password"
                            class="form-control form-control-lg"
                            placeholder="Password"
                            aria-label="Password"
                            value={password}
                            onChange={(e)=> setPassword(e.target.value)}
                          />
                        </div>
                        <div class="mb-3">
                          <input
                            type="password"
                            class="form-control form-control-lg"
                            placeholder="Confirm Password"
                            aria-label="Password"
                            value={confPassword}
                            onChange={(e)=> setConfPassword(e.target.value)}
                          />
                        </div>
                        <div class="text-center">
                          <button
                            type="submit"
                            class="btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0"
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div class="card-footer text-center pt-0 px-lg-2 px-1">
                      <p class="mb-4 text-sm mx-auto">
                        have an account?
                        <a
                          href="/"
                          class="text-primary text-gradient font-weight-bold"
                        >
                          Sign in
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Register
