import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js'

export const register = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
    } = req.body
    
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
    })
    const savedUser = await newUser.save();
    
    res.status(201).json(savedUser);
  } catch(error) {
    next(error)
  }
}

export const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username }) 
    if (!user) return res.status(400).send('User does not exist')
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send('Invalid credentials')

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)

    delete user.password;
    res.status(200).json({ token, user })

  } catch(error) {
    next(error)
  }
}