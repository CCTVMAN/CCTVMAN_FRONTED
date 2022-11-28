var oracle = require("oracle");
var db_info = {
  host: "10.150.149.183",
  port: "1521",
  user: "c##madang",
  password: "madang",
  database: "MD_madang",
};

module.exports = {
  init: function () {
    return oracle.createConnection(db_info);
  },
  connect: function (conn) {
    conn.connect(function (err) {
      if (err) console.error("oracle connection error : " + err);
      else console.log("oracle is connected successfully!");
    });
  },
};
