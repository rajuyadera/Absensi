import express from "express";
import { 
    getSiswa,
    createSiswa,
    updateSiswa,
    deleteSiswa,
    getSiswas
 } from "../controller/Siswa.js";

 const router = express.Router()

 router.get('/siswa', getSiswa)
 router.get('/siswas', getSiswas)
 router.post('/siswa', createSiswa)
 router.patch('/siswa/:id', updateSiswa)
 router.delete('/siswa/:id', deleteSiswa)


export default router