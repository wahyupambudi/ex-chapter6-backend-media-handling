require("dotenv").config();
const express = require("express");
const app = express();
const route = require("../ex-chapter6-backend-media-handling/route/routes");
const port = process.env.PORT || 3000;

app.use("/images", express.static("media/images"));
app.use("/videos", express.static("media/videos"));
app.use("/files", express.static("media/files"));

app.use("/", route);


app.listen(port, () => {
  console.log(`service running on port ${port}`)
})