import React, { useState } from "react";
import "../../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/login", {
        username: username,
        password: password,
      });
      navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
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
              <p>{msg}</p>
              <div class="row">
                <div class="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto">
                  <div class="card card-plain">
                    <div class="card-header pb-0 text-start">
                      <h4 class="font-weight-bolder">Sign In</h4>
                      <p class="mb-0">
                        Enter your Username and password to sign in
                      </p>
                    </div>
                    <div class="card-body">
                      <form onSubmit={Auth} role="form">
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
                        <div class="text-center">
                          <button
                            type="submit"
                            class="btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0"
                          >
                            Sign in
                          </button>
                        </div>
                      </form>
                    </div>
                    <div class="card-footer text-center pt-0 px-lg-2 px-1">
                      <p class="mb-4 text-sm mx-auto">
                        Don't have an account?
                        <a
                          href="/register"
                          class="text-primary text-gradient font-weight-bold"
                        >
                          Sign up
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
  );
};

export default Login;
