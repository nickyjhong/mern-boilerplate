import express from 'express'
import { getThings } from '../controllers/things.js'

const router = express.Router()

router.get('/', getThings)

export default router;