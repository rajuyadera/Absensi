import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AbsenSiswa = () => {
  const [getSiswa, setGetSiswa] = useState([]);
  const [siswa, setSiswa] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    getSiswas();
  }, []);

  const getSiswas = async () => {
    const response = await axios.get("http://localhost:5000/siswas");
    setGetSiswa(response.data);
  };
  const Absen = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/absen", {
        id_siswa: siswa,
        keterangan: keterangan,
        tanggal: tanggal, 
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
            <div class="col-8">
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
                <div className="mt-4">
                  <div class="table-responsive p-0">
                    <div class="card-body px-0 pt-0 pb-2">
                      <form onSubmit={Absen} className="text-center">
                        <div className="align-center">
                          <div class="col-md-6 ">
                            <div class="form-group">
                              <select
                                class="form-select text-center"
                                id="exampleFormControlSelect1"
                                value={siswa}
                                onChange={(e) => setSiswa(e.target.value)}
                              >
                                <option selected>-- PILIH SISWA --</option>
                                {getSiswa.map((list) => (
                                  <option value={list.id_siswa}>{list.nama}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div class="col-md-6 ">
                            <div class="form-group">
                              <select
                                class="form-select"
                                value={keterangan}
                                onChange={(e) => setKeterangan(e.target.value)}
                                id="exampleFormControlSelect1"
                              >
                                <option>Hadir</option>
                                <option>Alfa</option>
                                <option>Sakit</option>
                                <option>Izin</option>
                              </select>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <input
                                type="date"
                                class="form-control form-control-alternative"
                                id="exampleFormControlInput1"
                                value={tanggal}
                                onChange={(e) => setTanggal(e.target.value)}
                                placeholder="Alamat"
                              />
                            </div>
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
      </main>
    </>
  );
};

export default AbsenSiswa;
