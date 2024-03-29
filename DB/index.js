require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3002
const router = require('./src/router')
const morgan = require("morgan");
const cors = require("cors");


app.use(cors());
app.use(morgan("dev")); 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/*app.get('/', (req, res, next, error) => {
  if (error) res.status(500)
  res.send('Hakkama said!')
}) */

app.use('/api', router)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
