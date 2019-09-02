const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/DnSUsers', { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', function () {
  console.log('mongoose connection error');
  console.log('____________________________')
});

db.once('open', function () {
  console.log('mongoose connected successfully');
  console.log('____________________________')
});


let usersSchema = new mongoose.Schema({
  // _id: String,
  firstName: String,
  lasttName: String,
  username: String,
  phone: Number,
  email: String,
  birthday: Date,
  password: String,
  isLogin: Boolean,
  dateOfSignUp: { type: Date, default: Date.now },
  items: Array
});

let Users = mongoose.model('Users', usersSchema);


// Example function
let readRepos = (cb) => {
  Users.find({}, (err, data) => {
    if (err) {
      cb(err)
    } else {
      // console.log('data:', data);
      cb(data)
    }
  })
}

let creatRepo = (cb) => {
  // console.log("creatRepo in DB req", newRepo);
  Users.create(temp, (err, data) => {
    if (err) {
      cb(err)
    } else {
      // console.log('new data:', data);
      readRepos(cb)
    }
  })
}

let temp = [{
  firstName: "haya",
  lasttName: "fraij",
  username: "haya96",
  phone: 962799333626,
  email: "hayafraij@gmail.com",
  birthday: "2019-09-01T17:06:32.227Z",
  password: "Ab123456",
  dateOfSignUp: "2019-09-01T17:06:32.227Z",
  isLogin: false,
  items: [{
    itemName: "danadsf fdfdgf ",
    itemDescription: "new book",
    category: "books",
    type: "donets",
    phone: 799333626,
    location: "amman",
    locationDescription: "jam3a",
    isAvalible: true,
    image: ""
  }]
}, {
  firstName: "raad",
  lasttName: "munther",
  username: "raad99",
  phone: 962799333626,
  email: "hayafraij@gmail.com",
  birthday: "2019-09-01T17:06:32.227Z",
  password: "Aaaaaaa6",
  dateOfSignUp: "2019-09-01T17:06:32.227Z",
  isLogin: false,
  items: [{
    itemName: "batata",
    itemDescription: "akel",
    category: "food",
    type: "limit time",
    phone: 702552221,
    location: "zarqa",
    locationDescription: "rosaifa",
    isAvalible: true,
    image: ""
  }, {
    itemName: "book",
    itemDescription: "new book",
    category: "books",
    type: "limit time",
    phone: 799333626,
    location: "amman",
    locationDescription: "alwebdeh",
    isAvalible: false,
    image: ""
  }]
}]


module.exports = {
  readRepos,
  creatRepo
}



