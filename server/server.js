import express from 'express'
import mongoose from "mongoose"
import dns from 'dns'
import { connectDB } from './config/db.js'

dns.setServers(["1.1.1.1", "8.8.8.8"])

const app = express()
connectDB()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})