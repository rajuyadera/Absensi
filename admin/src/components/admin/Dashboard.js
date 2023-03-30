import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";
import moment from "moment"

const Dashboard = () => {
  const [siswas, setSiswas] = useState([]);
  const [absens, setAbsen] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [limit, setLimit] = useState(10);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    getSiswas();
    getAbsen();
    getAdmin();
  }, [page, keyword]);

  const getSiswas = async () => {
    const response = await axios.get(
      `http://localhost:5000/siswa?search_query=${keyword}&page=${page}&limit=${limit}`
    );
    setSiswas(response.data.result);
    setPage(response.data.page);
    setPages(response.data.totalPage);
    setRows(response.data.totalRows);
  };

  const getAbsen = async () => {
    const response = await axios.get("http://localhost:5000/absen");
    setAbsen(response.data);
  };
  const getAdmin = async () => {
    const response = await axios.get("http://localhost:5000/admin");
    setAdmins(response.data);
  };

  //
  const deleteSiswa = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/siswa/${id}`);
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
      getSiswas();
    } catch (error) {
      console.log(error)
    }
  };
  const deleteAbsen = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/absen/${id}`);
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
      getAbsen();
    } catch (error) {
      console.log(error)
    }
  };
  const deleteAdmin = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/admin/${id}`);
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
      getAdmin();
    } catch (error) {
      console.log(error)
    }
  };






  const changePage = ({ selected }) => {
    setPage(selected);
  };

  return (
    <>
      <div class="jet-index min-height-300 bg-primary position-absolute w-100"></div>
      <main class="main-content position-relative border-radius-lg ">
        <div class="container py-4">
          <div class="row ">
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
                <div class="card-body px-0 pt-0 pb-2">
                  <div class="table-responsive p-0">
                    <table class="table align-items-center mb-0">
                      <thead>
                        <tr>
                          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            No.
                          </th>
                          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Nama
                          </th>
                          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                            Email
                          </th>
                          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Alamat
                          </th>
                          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            NoTelp
                          </th>
                          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {siswas.map((siswa, index) => (
                          <tr key={index}>
                            <td>
                              <div class="d-flex px-2 py-1">
                                <div class="d-flex flex-column justify-content-center">
                                  <p class="mb-0 text-sm">{index + 1}</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="d-flex px-2 py-1">
                                <div class="d-flex flex-column justify-content-center">
                                  <p class="mb-0 text-sm">{siswa.nama}</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p class="text-xs font-weight-bold mb-0">
                                {siswa.email}
                              </p>
                            </td>
                            <td class="align-middle text-center text-sm">
                              <span class="badge badge-sm bg-gradient-success">
                                {siswa.alamat}
                              </span>
                            </td>
                            <td class="align-middle text-center">
                              <span class="text-secondary text-xs font-weight-bold">
                                {siswa.noTelp}
                              </span>
                            </td>
                            <td class="align-middle">
                            <Link
                               to={`/editsiswa/${siswa.id_siswa}`}
                                class="text-secondary font-weight-bold text-xs ps-2"
                              >
                                Edit
                              </Link>
                              <Link
                                onClick={() => deleteSiswa(siswa.id_siswa)}
                                class="text-secondary font-weight-bold text-xs ps-2"
                              >
                                Delete
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p class="text-xs font-weight-bold mb-0 ms-3">
                    Total Rows : {rows} Page : {rows ? page + 1 : 0} of {pages}
                  </p>
                  <nav aria-label="Page navigation example">
                    <ReactPaginate
                      pageCount={pages}
                      onPageChange={changePage}
                      activeLinkClassName="active"
                      containerClassName="pagination justify-content-center"
                      previousClassName="page-item"
                      previousLinkClassName="page-link fa fa-angle-left"
                      previousLabel=""
                      nextClassName="page-item"
                      nextLinkClassName="page-link fa fa-angle-right"
                      nextLabel=""
                      pageClassName="page-item"
                      pageLinkClassName="page-link"
                    />
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <main class="main-content position-relative border-radius-lg ">
        <div class="container py-4">
          <div class="row ">
            <div class="col-8">
              <div class="card mb-4">
                <div class="card-header pb-0 text-center">
                  <h6>Daftar Absen</h6>
                </div>
                <div class="card-body px-0 pt-0 pb-2">
                  <div class="table-responsive p-0">
                    <table class="table align-items-center mb-0">
                      <thead>
                        <tr>
                          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            No.
                          </th>
                          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Nama
                          </th>
                          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                            keterangan
                          </th>
                          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            tanggal
                          </th>
                          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {absens.map((absen, index) => (
                          <tr key={index}>
                            <td>
                              <div class="d-flex px-2 py-1">
                                <div class="d-flex flex-column justify-content-center">
                                  <p class="mb-0 text-sm">{index + 1}</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="d-flex px-2 py-1">
                                <div class="d-flex flex-column justify-content-center">
                                  <p class="mb-0 text-sm">{absen.siswa?.nama}</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p class="text-xs font-weight-bold mb-0">
                                {absen.keterangan}
                              </p>
                            </td>
                            <td class="align-middle text-center text-sm">
                              <span class="badge badge-sm bg-gradient-success">
                                {moment(absen.tanggal).format("DD/MM/YYYY")}
                              </span>
                            </td>
                            <td class="align-middle">
                              <a
                                href="javascript:;"
                                class="text-secondary font-weight-bold text-xs ps-4"
                                data-toggle="tooltip"
                                data-original-title="Edit user"
                              >
                                Edit
                              </a>
                              <Link
                                onClick={() => deleteAbsen(absen.id)}
                                class="text-secondary font-weight-bold text-xs ps-2"
                              >
                                Delete
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p class="text-xs font-weight-bold mb-0 ms-3">
                    Total Rows : {rows} Page : {rows ? page + 1 : 0} of {pages}
                  </p>
                  <nav aria-label="Page navigation example">
                    <ReactPaginate
                      pageCount={pages}
                      onPageChange={changePage}
                      activeLinkClassName="active"
                      containerClassName="pagination justify-content-center"
                      previousClassName="page-item"
                      previousLinkClassName="page-link fa fa-angle-left"
                      previousLabel=""
                      nextClassName="page-item"
                      nextLinkClassName="page-link fa fa-angle-right"
                      nextLabel=""
                      pageClassName="page-item"
                      pageLinkClassName="page-link"
                    />
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <main class="main-content position-relative border-radius-lg ">
        <div class="container py-4">
          <div class="row ">
            <div class="col-8">
              <div class="card mb-4">
                <div class="card-header pb-0 text-center">
                  <h6>Daftar Admin</h6>
                </div>
                <div class="card-body px-0 pt-0 pb-2">
                  <div class="table-responsive p-0">
                    <table class="table align-items-center mb-0">
                      <thead>
                        <tr>
                          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            No.
                          </th>
                          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Nama
                          </th>
                          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                            username
                          </th>
                          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {admins.map((admin, index) => (
                          <tr key={index}>
                            <td>
                              <div class="d-flex px-2 py-1">
                                <div class="d-flex flex-column justify-content-center">
                                  <p class="mb-0 text-sm">{index + 1}</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="d-flex px-2 py-1">
                                <div class="d-flex flex-column justify-content-center">
                                  <p class="mb-0 text-sm">{admin.name}</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p class="text-xs font-weight-bold mb-0">
                                {admin.username}
                              </p>
                            </td>
                            <td class="align-middle">
                              <a
                                href="javascript:;"
                                class="text-secondary font-weight-bold text-xs ps-4"
                                data-toggle="tooltip"
                                data-original-title="Edit user"
                              >
                                Edit
                              </a>
                              <Link
                                onClick={() => deleteAdmin(admin.id)}
                                class="text-secondary font-weight-bold text-xs ps-2"
                              >
                                Delete
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p class="text-xs font-weight-bold mb-0 ms-3">
                    Total Rows : {rows} Page : {rows ? page + 1 : 0} of {pages}
                  </p>
                  <nav aria-label="Page navigation example">
                    <ReactPaginate
                      pageCount={pages}
                      onPageChange={changePage}
                      activeLinkClassName="active"
                      containerClassName="pagination justify-content-center"
                      previousClassName="page-item"
                      previousLinkClassName="page-link fa fa-angle-left"
                      previousLabel=""
                      nextClassName="page-item"
                      nextLinkClassName="page-link fa fa-angle-right"
                      nextLabel=""
                      pageClassName="page-item"
                      pageLinkClassName="page-link"
                    />
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
