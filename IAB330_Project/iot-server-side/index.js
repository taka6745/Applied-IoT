const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const rfs = require("rotating-file-stream");

// const options = require("./knexfile.js");
// const knex = require("knex")(options);

const app = express();

app.use(helmet());

const accessLogStream = rfs.createStream("access.log", {
  interval: "1d",
  path: path.join(__dirname, "log"),
});

// app.use((req, res, next) => {
//   req.db = knex;
//   next();
// });

app.use(logger("common", { stream: accessLogStream }));
app.use(cors({
    origin: 'http://localhost:3001'
  }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

logger.token("req", (req, res) => JSON.stringify(req.headers));
logger.token("res", (req, res) => {
  const headers = {};
  res.getHeaderNames().map((h) => (headers[h] = res.getHeader(h)));
  return JSON.stringify(headers);
});

// app.get("/knex", function (req, res, next) {
//   req.db
//     .raw("SELECT VERSION()")
//     .then((version) => console.log(version[0][0]))
//     .catch((err) => {
//       console.log(err);
//       throw err;
//     });
//   res.send("Version Logged successfully");
// });

app.get("/", (req, res) => {
  res.send("Hello this insane World!");
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

const port = 3001;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
