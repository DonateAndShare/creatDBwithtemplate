const express = require("express");
const cors = require("cors");
const mongo = require("./database");

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json('server is working');
});

app.post('/', (req, res) => {
  console.log('post---------------------');
  // console.log('req.body from post in server', req.body);
  mongo.creatRepo((result) => {
    res.json(result);
  })
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));