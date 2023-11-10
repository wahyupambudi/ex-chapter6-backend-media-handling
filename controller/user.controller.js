const qr = require("node-qr-image");
const ImageKit = require("imagekit");

function MediaProcessingImage(req, res) {
  const imageUrl = `${req.protocol}://${req.get("host")}/images/${
    req.file.filename
  }`;

  res.status(200).json({
    data: imageUrl,
    message: "success",
    status: 200,
    error: null,
  });
  return;
}

function MediaProcessingVideo(req, res) {
  const videoUrl = `${req.protocol}://${req.get("host")}/videos/${
    req.file.filename
  }`;

  res.status(200).json({
    data: videoUrl,
    message: "success",
    status: 200,
    error: null,
  });
  return;
}

function MediaProcessingFile(req, res) {
  const fileUrl = `${req.protocol}://${req.get("host")}/files/${
    req.file.filename
  }`;

  res.status(200).json({
    data: fileUrl,
    message: "success",
    status: 200,
    error: null,
  });
  return;
}

function generateQr(req, res) {
  const message = req.query.message;

  try {
    var qr_png = qr.image(message, { type: "png" });
    qr_png.pipe(require('fs').createWriteStream(`${message.toLowerCase()}.png`));

    // const svg_string = qr.imageSync(message, { type: "svg" });

    res.status(200).json({
      data: qr_png,
      message: "success",
      status: 200,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      data: null,
      message: "internal server error",
      status: 500,
      error: error.message,
    });
  }
}

module.exports = {
  MediaProcessingImage,
  MediaProcessingVideo,
  MediaProcessingFile,
  generateQr
};
