import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateSiswa = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [alamat, setAlamat] = useState("");
  const [noTelp, setNoTelp] = useState("");
  const [msg, setMsg] = useState("");

  const Create = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/siswa", {
        nama: nama,
        email: email,
        alamat: alamat,
        noTelp: noTelp,
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
      setMsg(error.response.data.msg);
    }
  };
  return (
    <>
      <div class="jet-index min-height-300 bg-primary position-absolute w-100"></div>
      <main class="main-content position-relative border-radius-lg ">
        <div class="container py-4">
          <div class="row">
            <div class="col-8 text-center">
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
              <div class="card mb-4">
                <div class="card-header pb-0 text-center">
                  <h6>Table Siswa</h6>
                </div>
                <div className="mt-4 aligns-item-center">
                  <div class="table-responsive p-0 aligns-item-center">
                    <div className="aligns-item-center">
                      <div class="card-body px-0 pt-0 pb-2 aligns-item-center">
                        <form onSubmit={Create} className="aligns-item-center text-center">
                          <div class="col-md-6 ">
                            <div class="form-group ">
                              <input
                                type="text"
                                class="form-control form-control-alternative "
                                id="exampleFormControlInput1"
                                value={nama}
                                onChange={(e) => setNama(e.target.value)}
                                placeholder="Nama Siswa"
                              />
                            </div>
                          </div>
                          <div class="col-6 aligns-item-center">
                            <div class="form-group">
                              <input
                                type="email"
                                class="form-control form-control-alternative align-center"
                                id="exampleFormControlInput1"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="name@example.com"
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control form-control-alternative"
                                id="exampleFormControlInput1"
                                value={alamat}
                                onChange={(e) => setAlamat(e.target.value)}
                                placeholder="Alamat"
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <input
                                type="number"
                                class="form-control form-control-alternative"
                                id="exampleFormControlInput1"
                                value={noTelp}
                                onChange={(e) => setNoTelp(e.target.value)}
                                placeholder="No Telpon"
                              />
                            </div>
                          </div>
                          <input
                            type="submit"
                            class="btn btn-outline-info"
                            value="Create"
                          />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CreateSiswa;
