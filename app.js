const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const port = process.env.PORT;

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

//Imports
const StockScan = require('./src/routes/StocksScan.route');

//Routes
app.get('/', (req, res) => {
  res.send('Hi Coder!')
});
app.use("/stock-scan", StockScan);

app.listen(port, () => {
  console.log(`Listening on port: ${port}!`)
});
