var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var indexRouter = require("./routes/index");
var dashboardRouter = require("./routes/dashboard");
var addNewCateRouter = require("./routes/add-new-category");
var ViewPassCateRouter = require("./routes/passwordCategory");
var addNewPassRouter = require("./routes/add-new-password");
var viewAllPassRouter = require("./routes/view-all-password");
var passwordDetailsRouter = require("./routes/password-detail");
var usersRouter = require("./routes/users");
var joinRouter = require("./routes/join");
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/dashboard", dashboardRouter);
app.use("/add-new-category", addNewCateRouter);
app.use("/passwordCategory", ViewPassCateRouter);
app.use("/add-new-password", addNewPassRouter);
app.use("/view-all-password", viewAllPassRouter);
app.use("/password-detail", passwordDetailsRouter);
app.use("/users", usersRouter);
app.use("/joinResult", joinRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));

module.exports = app;
