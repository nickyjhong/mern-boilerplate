import Thing from '../models/Thing.js';

export const getThings = async (req, res, next) => {
  try {
    const user = await Thing.find()
    res.status(200).json(user)
  } catch(error) {
    next(error)
  }
}