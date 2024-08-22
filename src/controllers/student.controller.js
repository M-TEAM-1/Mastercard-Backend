import { Student } from '../models/student.model.js';
import { generateToken } from '../utils/jwtUtils.js';
import { hashPassword } from '../utils/bycryptUtil.js';
import bcrypt from 'bcrypt';


export const registerStudent = async (req, res) => {
  const { name, email, pswd } = req.body;
  try {
    const newStudent = await Student.create({
      name,
      email,
      password: hashPassword(pswd),
    });
    res.json(newStudent);
  } catch (e) {
    console.error("Error in registerStudent: ", e);
    res.status(422).json({ error: e.message });
  }
};

export const loginStudent = async (req, res) => {
  const { email, pswd } = req.body;
  try {
    const studentDetails = await Student.findOne({ email });
    if (studentDetails && bcrypt.compareSync(pswd, studentDetails.password)) {
      const token = generateToken(studentDetails);
      res.cookie('token', token).json(studentDetails);
    } else {
      res.status(422).json("Invalid credentials");
    }
  } catch (e) {
    console.error("Error in loginStudent: ", e);
    res.status(422).json({ error: e.message });
  }
};
