/**
 * Ali_Mongi-CAPSTONE_SEARCH_API-L2T21
 * @app.js - contains API declarations
 */
const helmet = require("helmet");
const path = require("path");
const createError = require("http-errors");
const config = require("config");
const searchRouter = require("./routes/search");
const express = require("express");
const app = express();

app.use(helmet()); // security middleware
app.use(config.get("iTunes.api.lookup"), searchRouter); // api key - /search

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

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
  res.json({
    error: err,
  });
});

module.exports = app;
