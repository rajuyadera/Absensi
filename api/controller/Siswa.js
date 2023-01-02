import Siswa from "../model/Siswa.js";
import { Op } from "sequelize";

export const getSiswa = async (req, res) => {
  const page = parseInt(req.query.page) || 0;
  const limit = parseInt(req.query.limit) || 10;
  const search = req.query.search || "";
  const offset = limit * page;
  const totalRows = await Siswa.count({
    where: {
      [Op.or]: {
        nama: {
          [Op.like]: "%" + search + "%",
        },
      },
    },
  });
  const totalPage = Math.ceil(totalRows / limit)
  const result = await Siswa.findAll({
    where: {
        [Op.or]: {
          nama: {
            [Op.like]: "%" + search + "%",
          },
        },
      },
      offset: offset,
      limit: limit,
      order:[
        ['id_siswa', 'asc']
      ]
  })
  res.json({
    result: result,
    page: page,
    limit: limit,
    totalRows: totalRows,
    totalPage: totalPage
  })
};

export const getSiswas = async (req, res) => {
  try {
    const siswa = await Siswa.findAll()
    return res.status(200).json(siswa);
  } catch (error) {
    console.log(error);
  }
};

export const createSiswa = async (req, res) => {
  const { nama, email, alamat, noTelp } = req.body;
  // if (siswa === nama) return res.status(400).json({msg: 'Siswa Sudah Terdaftar!'})
  try {
    await Siswa.create({
      nama: nama,
      email: email,
      alamat: alamat,
      noTelp: noTelp,
    });
    return res.status(200).json({ msg: "Siswa Berhasil Ditambahkan" });
  } catch (error) {
    console.log(error);
  }
};

export const updateSiswa = async (req, res) => {
  const siswa = await Siswa.findOne({
    where: {
      id_siswa: req.params.id,
    },
  });

  if (!siswa) return res.status(422).json({ msg: "Siswa Tidak Ada" });
  const nama = req.body.nama;
  const email = req.body.email;
  const alamat = req.body.alamat;
  const noTelp = req.body.noTelp;

  // // cek kolom
  // if (!judul) return res.status(422).json({ msg: "Isi Judul Terlebih Dahulu" });
  // if (!harga) return res.status(422).json({ msg: "Isi Harga Terlebih Dahulu" });
  // if (!specifikasi)
  //   return res.status(422).json({ msg: "Isi Specifikasi Terlebih Dahulu" });

  try {
    await Siswa.update(
      {
        nama: nama,
        alamat: email,
        alamat: alamat,
        noTelp: noTelp
      },
      {
        where: {
          id_siswa: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "Siswa Berhasil Di Update" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteSiswa = async (req, res) => {
  const siswa = await Siswa.findOne({
    where: {
      id_siswa: req.params.id,
    },
  });
  if (!siswa) return res.status(404).json({ msg: "Siswa Not Found!" });
  try {
    await Siswa.destroy({
      where: {
        id_siswa: siswa.id_siswa,
      },
    });
    res.status(200).json({ msg: "Siswa Deleted" });
  } catch (error) {
    console.log(error);
  }
};
