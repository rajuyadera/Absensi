import express from "express";
import {
    getAbsen,
    getAbsenById,
    createAbsen,
    updateAbsen,
    deleteAbsen
} from "../controller/Absensi.js"

const router = express.Router()

router.get('/absen', getAbsen)
router.get('/absen/:id', getAbsenById)
router.post('/absen', createAbsen)
router.patch('/absen/:id', updateAbsen)
router.delete('/absen/:id', deleteAbsen)

export default router