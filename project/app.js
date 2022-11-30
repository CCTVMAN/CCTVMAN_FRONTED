var express = require("express");
var app = express();
var oracledb = require("oracledb");
const bodyParser = require("body-parser");

app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

async function fetchData(sql) {
  try {
    const connection = await oracledb.getConnection({
      user: "c##project",
      password: "1234",
      connectString: "10.150.149.87/xe",
    });
    const result = await connection.execute(sql);
    return result;
  } catch (err) {
    return err;
  }
}

app.get("/", function (req, res) {
  res.render("index.ejs");
});
app.get("/cctv", function (req, res) {
  let sql = "select * from busanaddress";
  fetchData(sql)
    .then((dbRes) => {
      res.render("cctv.ejs", { list: dbRes["rows"] });
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/school", function (req, res) {
  let sql =
    "select s.id, s.address, latitude, longitude, s.name from school s, busanaddress b where s.id = b.id";
  fetchData(sql)
    .then((dbRes) => {
      res.render("school.ejs", { list: dbRes["rows"] });
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/samchunpo", function (req, res) {
  let sql = "select * from sachancctv";
  fetchData(sql)
    .then((dbRes) => {
      res.render("samchunpo.ejs", { list: dbRes["rows"] });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(3000, () => console.log("Server is running on port 3000..."));
