const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
require("./db/connection");
const path = require("path");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: 'netlify.app',
  credentials: true,
}));
// router page required here
app.use(require("./router/auth"));

//2nd step
const PORT = process.env.PORT || 5000;
// app.use(express.static());
// app.use(express.static(path.join(__dirname, "./FrontEnd/build")));
// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "./FrontEnd/build/index.html"));
// });
// //3rd step

app.listen(PORT, () => {
  console.log(`Application running at port:${PORT}`);
});
