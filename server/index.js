import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

import { register } from './controllers/auth.js'

import authRoutes from './routes/auth.js'
import userRoutes from './routes/users.js'
import thingRoutes from './routes/things.js'

import { verifyToken } from './middleware/auth.js';
import User from './models/User.js'
import Thing from './models/Thing.js';

import { users, things } from './data/index.js'

/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

/* ROUTES */
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/things', thingRoutes)

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 6001;
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
  })
  .then(() => {
    app.listen(PORT, () => console.log(`We in this on port ${PORT}`))
    // only run this when you need it!
    // User.insertMany(users);
    // Thing.insertMany(things)
    
  })
  .catch((error) => console.log(`${error} did not connect`))