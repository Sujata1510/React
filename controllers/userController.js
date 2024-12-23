import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const isExist = await User.findOne({ email: email })
    if (!isExist) {
      return res.status(400).json({ message: 'user does not exist' });
    }
    const hash = bcrypt.compareSync(password, isExist.password);
    if (!hash) return res.status(400).json({ message: 'invalid credentials' });


    const token = jwt.sign({
      id: isExist.id,
      isAdmin: isExist.isAdmin
    }, 'secret');

    return res.status(200).json({
      token,
      email: isExist.email,
      isAdmin: isExist.isAdmin,
      username: isExist.username
    });



  } catch (error) {
    return res.status(400).json({ message: `${error}` })

  }
}

export const registerUser = async (req, res) => {
  const { email, password, username } = req.body;
  try {
    const isExist = await User.findOne({ email: email });

    if (isExist) {
      return res.status(409).json({ message: 'user already exist' });
    }
    const hashPassword = await bcrypt.hash(password, 10)
    await User.create({
      email,
      password: hashPassword,
      username
    });

    return res.status(201).json({ message: 'successfully registered' });


  } catch (error) {
    return res.status(400).json({ message: `${error}` });

  }
}

