const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;
const route = require('./routes');
const mysql = require('mysql2');
const { sequelize } = require('./sequelize');

//Sử dụng tài nguyên tĩnh từ thư mục "public"
app.use(express.static(path.join(__dirname, 'public')));

//Sử dụng middleware express.urlencoded và express.json
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());


// HTTP logger
app.use(morgan("combined"));

// Template engine
app.engine("hbs", engine({
  extname: '.hbs'
}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

//Routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
