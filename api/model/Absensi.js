import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Siswa from "./Siswa.js";

const {DataTypes} = Sequelize

const Absen = db.define('tbl_absensi', {
    keterangan: {
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: true
        }
    },
    tanggal: {
        type: DataTypes.DATE,
        allowNull: true,
        validate: {
            notEmpty: true
        }
    }
},{
    freezeTableName: true
})


Siswa.hasMany(Absen);
Absen.belongsTo(Siswa, {
    foreignKey: 'id_siswa'
})





export default Absen