import User from './models/User.js';
import bcrypt from 'bcrypt';
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const isExist = await User.findOne({ email: email })
    if (!isExist) {
      return res.status(400).json({ message: 'user does not exist' });
    }
    return res.status(200).json({
      message: 'successfully logged in'
    });

  } catch (error) {
    return res.status(400).json({ message: `${error}` })

  }
}

export const registerUser = async (req, res) => {
  const { email, password, username } = req.body;
  try {
    const isExist = await User.findOne({ email: email })
    if (isExist) {
      return res.status(400).json({ message: 'user already exist' });


    }
    const hashPassword = await bcrypt.hash(password, 10);
    await User.create({
      email,
      password: hashPassword,
      username
    });
    return res.status(200).json({
      message: 'successfully logged in'
    });

  } catch (error) {
    return res.status(400).json({ message: `${error}` })

  }
}