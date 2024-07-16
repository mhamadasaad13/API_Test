const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const xlsx = require('xlsx');
let wb = xlsx.readFile("../Data.xlsx");
let ws = wb.Sheets["Employee"];
let data = xlsx.utils.sheet_to_json(ws);
app.get('/', function (req, res) {
  res.send(data);
})
    
app.listen(3000);