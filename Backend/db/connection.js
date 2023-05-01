// const mongoose = require("mongoose");
// const db = process.env.DATABASE;
// mongoose.set("strictQuery", false);
// mongoose.connect(db, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   poolSize: 50, // Set the maximum number of connections in the pool
// });
// mongoose.connection.on("connected", () => {
//   console.log("Database conneted successfully");
// });
// mongoose.connection.on("disconnected", () => {
//   console.log("Database disconneted");
// });
// mongoose.connection.on("error", (error) => {
//   console.log("Error while connecting to database", error.message);
// });

const mongoose = require("mongoose");
const db = process.env.DATABASE;

mongoose.set("strictQuery", false);
mongoose.connect(`${db}?poolSize=5`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,

  w: "majority",
});
mongoose.connection.on("connected", () => {
  console.log("Database conneted successfully");
});
mongoose.connection.on("disconnected", () => {
  console.log("Database disconneted");
});
mongoose.connection.on("error", (error) => {
  console.log("Error while connecting to database", error.message);
});
