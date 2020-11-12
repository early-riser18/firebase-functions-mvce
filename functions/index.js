const firebase = require("firebase");
const functions = require("firebase-functions");
const auth = require("firebase/auth");
const storage = require('firebase/storage');
const admin = require('firebase-admin');


admin.initializeApp();


const express = require("express");
const app = express();
var bodyParser = require("body-parser");
var db = admin.database();
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
