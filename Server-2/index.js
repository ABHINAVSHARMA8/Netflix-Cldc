const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");
const bp = require("body-parser");

const app2 = express();
const url = "mongodb://127.0.0.1:27017";

let dbname;

let db;
const client = new MongoClient(url);
// Start server on PORT 3001
app2.listen(3001, (err) => {
  err
    ? console.log("Failed to listen on PORT 3001")
    : console.log("Application Server listening on PORT 3001");
});
app2.post("/videos/:name", cors(), async function (req, res, next) {
  vid = req.params.name;

  console.log("Name is " + vid);
  dbname = "netflix_videos";

  db = client.db(dbname);

  db.stats(function (err, result) {
    if (result["collections"] == 0) {
      // Database Avaialability
      dbname = "netflix_videos_2";
      db = client.db(dbname);
    }
  });

  db.collection("videos")
    .find({ name: "abcd" })
    .toArray(function (err, result) {
      if (err) console.log(err);
    });

  try {
    console.log("Inside try video");
    var video = await db.collection("videos").find({ name: vid }).toArray();

    //  console.log({

    //     "total_reports":total_reports.length,
    //     "resolved":resolved.length,
    //     "rejected":rejected.length,
    //     "under_investigation":under_investigation.length
    // })

    res.send({
      src: video[0]["src"],
    });

    // next();
  } catch (err) {
    return res.status(500);
  }
});
app2.post("/recommendation", cors(), async function (req, res, next) {
  dbname = "netflix_videos";

  db = client.db(dbname);

  db.stats(function (err, result) {
    if (result["collections"] == 0) {
      // Database Avaialability
      dbname = "netflix_videos_2";
      db = client.db(dbname);
    }
  });

  db.collection("videos")
    .find({ name: "abcd" })
    .toArray(function (err, result) {
      if (err) console.log(err);
    });

  try {
    console.log("Inside try video");
    var video = await db.collection("videos").find().toArray();

    //  console.log({

    //     "total_reports":total_reports.length,
    //     "resolved":resolved.length,
    //     "rejected":rejected.length,
    //     "under_investigation":under_investigation.length
    // })

    console.log(video[video.length - 1]["name"]);

    res.send({
      src: video[video.length - 1]["src"],
    });

    //next();
  } catch (err) {
    return res.status(500);
  }
});
