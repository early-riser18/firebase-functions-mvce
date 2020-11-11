const firebase = require("firebase");
const functions = require("firebase-functions");
const auth = require("firebase/auth");
const storage = require('firebase/storage');

const firebaseConfig = {
    apiKey: "AIzaSyAddqyJJRGL9vCNBS8IARse91gKkEhMgYM",
    authDomain: "diving-app-eaabe.firebaseapp.com",
    databaseURL: "https://diving-app-eaabe.firebaseio.com",
    projectId: "diving-app-eaabe",
    storageBucket: "diving-app-eaabe.appspot.com",
    messagingSenderId: "718395383991",
    appId: "1:718395383991:web:b7bbf55e5c4b41ddb0ad32",
    measurementId: "G-V3QYZP2XX7"
  };

firebase.initializeApp(firebaseConfig);


const express = require("express");
const app = express();
var bodyParser = require("body-parser");
var db = firebase.database();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());


app.get("/read", (req, res) => {
  let data;
  var testLoc = db.ref("test/one");

  testLoc.on("value", (snapshot) => {
    data = snapshot.val();
    console.log(data);
  });
  res.send(data);
});

exports.app = functions.https.onRequest(app);
