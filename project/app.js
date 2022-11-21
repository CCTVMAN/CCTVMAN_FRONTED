var express = require("express");
var app = express();
//var db_config = require(__dirname + "/config/database.js");
//var conn = db_config.init();

// db_config.connect(conn);

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index.ejs");
});
app.get("/cctv", function (req, res) {
  const sql = "select * from ";
  conn.query(sql, function (err, rows, fields) {
    if (err) console.log("oh Error..." + err);
    else res.render("cctv.ejs", { list: rows });
  });
});
app.get("/school", function (req, res) {
  const sql = "select * from ";
  conn.query(sql, function (err, rows, fields) {
    if (err) console.log("oh Error..." + err);
    else res.render("school.ejs", { list: rows });
  });
});
app.get("/search", function (req, res) {
  const sql = "select * from ";
  conn.query(sql, function (err, rows, fields) {
    if (err) console.log("oh Error..." + err);
    else res.render("search.ejs", { list: rows });
  });
});
app.listen(3000, () => console.log("Server is running on port 3000..."));
