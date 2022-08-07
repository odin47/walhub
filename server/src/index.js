import express from 'express'
import {NODE_API_PORT} from './constants.js';
import v1 from './routes/v1/index.js'
import cors from 'cors';

const app = express()

//middleware
app.use(cors());
app.use('/api/v1', v1)


app.get('/', (req, res) => {
  res.send('WELCOME TO WALMART GITHUB!!!')
})

app.listen(NODE_API_PORT, () => {
  console.log(`App is running on ${NODE_API_PORT}`)
})