import express from 'express'
import mongoose from "mongoose"
import dns from 'dns'
import { connectDB } from '../config/db.js'
import userRouter from './routes/userRoute.js'
import authRouter from './routes/authRoute.js';
import errorHandler from './middlewares/errorMiddleware.js'

dns.setServers(["1.1.1.1", "8.8.8.8"])

const app = express()

connectDB()

app.use(express.json());

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.use(errorHandler)