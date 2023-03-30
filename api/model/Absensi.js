import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Siswa from "./Siswa.js";

const {DataTypes} = Sequelize

const Absen = db.define('tbl_absensi', {

    id_siswa: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
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


Siswa.hasMany(Absen, {
    foreignKey: 'id_siswa'
});
Absen.belongsTo(Siswa, {
    foreignKey: 'id_siswa',
    as: "siswa"
})





export default Absen