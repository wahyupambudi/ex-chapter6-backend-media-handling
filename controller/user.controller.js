const qr = require("node-qr-image");
const imagekit = require("../lib/imagekit");

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

function MediaProcessingImages(req, res) {
  let respArray = [];

  for (let index = 0; index < req.files.length; index++) {
    const filename = req.files[index].filename;
    // console.log(filename);

    const imageUrl = `${req.protocol}://${req.get("host")}/images/${filename}`;
    respArray.push(imageUrl);

    // console.log(imageUrl);
  }

  res.status(200).json({
    data: respArray,
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
    const qr_png = qr.image(message, { type: "png" });
    qr_png.pipe(
      require("fs").createWriteStream(`${message.toLowerCase()}.png`),
    );

    // for this one will gives us result in string (buffer for the frontend)
    // const qr_png = qr.imageSync(message, {type: 'png'})
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

async function imageKitUpload(req, res) {
  try {
    const fileString = req.file.buffer.toString("base64");

    const uploadFile = await imagekit.upload({
      fileName: req.file.originalname,
      file: fileString,
    });

    res.status(200).json({
      data: uploadFile,
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
  MediaProcessingImages,
  MediaProcessingVideo,
  MediaProcessingFile,
  generateQr,
  imageKitUpload,
};
