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
// const corsOptions = {
//   origin: "https://6451506fbd62bf000750ed70--lovely-crostata-57bb72.netlify.app",
//   credentials: true,
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

// app.use(cors(corsOptions));
// Set CORS headers for all routes defined in the auth router
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://64515f131b24690008bc42d8--lovely-crostata-57bb72.netlify.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
// app.use(cors({
//   origin: 'netlify.app',
//   credentials: true,
// }));
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
