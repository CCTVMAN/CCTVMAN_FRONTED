var express = require("express");
var app = express();
var oracledb = require("oracledb");
var db_info = {
  host: "10.150.149.183",
  port: "1521",
  user: "c##madang",
  password: "madang",
  database: "MD_madang",
};
app.use(express.static(__dirname + "/public"));

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get("/db", function (req, res) { });
app.get("/", function (req, res) {
  res.render("index.ejs");
});
app.get("/cctv", function (req, res) {
  // const sql = "select * from busanaddress";
  // conn.query(sql, function (err, rows, fields) {
  //   if (err) console.log("oh Error..." + err);
  //   else res.render("cctv.ejs", { list: rows });
  // });
  res.render("cctv.ejs");
});
app.get("/school", function (req, res) {
  // const sql = "select * from ";
  // conn.query(sql, function (err, rows, fields) {
  //   if (err) console.log("oh Error..." + err);
  //   else res.render("school.ejs", { list: rows });
  // });
  res.render("school.ejs", { list: { asdf: "asddddd" } });
});
app.get("/samchunpo", function (req, res) {
  // const sql = "select * from ";
  // conn.query(sql, function (err, rows, fields) {
  //   if (err) console.log("oh Error..." + err);
  //   else res.render("samchunpo.ejs", { list: rows });
  // });
  res.render("samchunpo.ejs");
});

app.listen(3000, () => console.log("Server is running on port 3000..."));