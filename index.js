require("dotenv").config();
const express = require("express");
const app = express();
const route = require("../ex-chapter6-backend-media-handling/route/routes");
const port = process.env.PORT || 3000;

app.use("/images", express.static("public/images"));
app.use("/files", express.static("public/files"));

app.use("/", route);


app.listen(port, () => {
  console.log(`check already live and well on port ${port}`)
})