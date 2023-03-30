
import Absen from "../model/Absensi.js";
import Siswa from "../model/Siswa.js";

export const getAbsen = async(req,res) => {
    try {
        const response  = await Absen.findAll({
          include: {
            model: Siswa,
            as: "siswa"
          }
        })
        return res.status(200).json(response)
    } catch (error) {
        console.log(error)
    }
}

export const getAbsenById = async(req,res) => {
    try {
        const absen = await Absen.findOne({
           where: {
            id_absen: req.params.id_absen
           }
        })
        return res.status(200).json(absen)
    } catch (error) {
        
    }
}

export const createAbsen = async(req,res) => {
    const {id_siswa, keterangan, tanggal} = req.body;
    try { 
        await Absen.create({
            id_siswa: id_siswa,
            keterangan: keterangan,
            tanggal: tanggal
        })
        return res.status(200).json({msg: 'Siswa Berhasil Di Absen'})
    } catch (error) {
        console.log(error)
    }
}

export const updateAbsen = async(req,res) => {
    
}

export const deleteAbsen = async(req,res) => {
    const absen = await Absen.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (!absen) return res.status(404).json({ msg: "Siswa Not Found!" });
      try {
        await Absen.destroy({
          where: {
            id: absen.id,
          },
        });
        res.status(200).json({ msg: "Absen Deleted" });
      } catch (error) {
        console.log(error);
      }
}