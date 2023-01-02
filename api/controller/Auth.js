import argon2 from "argon2"
import Admin from "../model/Admin.js"

export const Login = async(req,res) => {
    const admin = await Admin.findOne({
        where: {
            username: req.body.username
        }
    })
    if(!admin) return res.status(404).json({msg: "Admin not Found!"})
    const match = await argon2.verify(admin.password, req.body.password)
    if(!match) return res.status(400).json({msg: 'Wrong Password'})
    res.status(200).json({msg: 'Login Berhasil'})
    
}

export const Register = async(req,res) => {
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
}

export const Logout = async(req,res) => {
    
}