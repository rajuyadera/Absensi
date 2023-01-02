import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize

const Siswa = db.define('tbl_siswa', {
    id_siswa: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
    nama: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: true
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: true,
            isEmail: true
        }
    },
    alamat: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: true
        }
    },
    noTelp: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: true,
            isNumeric: true
        }
    },
},{
    freezeTableName: true
})



export default Siswa