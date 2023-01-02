import Admin from "../model/Admin.js";
import argon2 from "argon2";

export const getAdmin = async (req, res) => {
  try {
    const response = await Admin.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

export const getAdminById = async (req, res) => {
  try {
    const admin = await Admin.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(admin);
  } catch (error) {}
};

export const createAdmin = async (req, res) => {
  const { name, username, password, confPassword } = req.body;
  if (password !== confPassword)
    return res
      .status(500)
      .json({ msg: "Password And Confirm Password Do Not Match" });
  const hashPassword = await argon2.hash(password);
  try {
    await Admin.create({
      name: name,
      username: username,
      password: hashPassword,
      confPassword: confPassword,
    });
    res.status(200).json({ msg: "Registered Succesfully" });
  } catch (error) {
    console.log(error);
  }
};

export const updateAdmin = async (req, res) => {

}


export const deleteAdmin = async (req, res) => {
  const admin = await Admin.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!admin) return res.status(404).json({ msg: "Admin Not Found!" });
  try {
    await Admin.destroy({
      where: {
        id: admin.id,
      },
    });
    res.status(200).json({ msg: "Admin Deleted" });
  } catch (error) {
    console.log(error);
  }
};
