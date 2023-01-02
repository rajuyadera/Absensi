import { Sequelize } from "sequelize";

const db = new Sequelize("absensi", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
