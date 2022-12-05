var oracle = require("oracledb");
var db_info = {
  host: "10.150.149.183",
  port: "1521",
  user: "c##madang",
  password: "madang",
  database: "project",
};

module.exports = {
  init: function () {
    return oracle.initOracleClient(db_info);
  },
  // connect: function(){
  //   let connection = oracle.getConnection(db_info)
  //   if(connection){}
  // }
  connect: function (conn) {
    conn.connect(function (err) {
      if (err) console.error("oracle connection error : " + err);
      else console.log("oracle is connected successfully!");
    });
  },
};
