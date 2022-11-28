var express = require("express");
var app = express();
var oracledb = require("oracledb");

app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

async function fetchData() {
  try {
    const connection = await oracledb.getConnection({
      user: "dbproject",
      password: "1234",
      connectString: "localhost/xe",
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
  res.render("cctv.ejs");
});
app.get("/school", function (req, res) {
  let sql = "select * from schooladdress";
  fetchData(sql)
    .then((dbRes) => {
      console.log(dbRes);
      res.render("school.ejs", { list: dbRes });
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/samchunpo", function (req, res) {
  res.render("samchunpo.ejs");
});

app.listen(3000, () => console.log("Server is running on port 3000..."));
