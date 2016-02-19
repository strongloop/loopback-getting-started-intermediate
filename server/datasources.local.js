// See https://docs.strongloop.com/display/public/LB/Environment-specific+configuration

exports = module.exports = {
  db: {
    name: "db",
    connector: "memory"
  },
  mysqlDs: {
    host: "demo.strongloop.com",
    port: 3306,
    database: "getting_started_intermediate",
    username: "demo",
    password: "L00pBack",
    name: "mysqlDs",
    connector: "mysql"
  },
  mongoDs: {
    host: "demo.strongloop.com",
    port: 27017,
    database: "getting_started_intermediate",
    username: "demo",
    password: "L00pBack",
    name: "mongoDs",
    connector: "mongodb"
  }
};

/*
// URLs:
exports.db = {
  url: process.env.DB_URL
};

// MySQL: mysql://user:pass@staging.mysql.com:9886?poolSize=20&retryDelay=120
// MongoDB: mongodb://products:secretpwd@master.example.com,backup.example.com/pro
*/
