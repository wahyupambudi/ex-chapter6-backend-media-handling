const router = require("express").Router();
const {
  MediaProcessingImage,
  MediaProcessingVideo,
  MediaProcessingFile,
  generateQr,
  imageKitUpload,
} = require("../controller/user.controller");

const storage = require("../lib/multer");
const multer = require("multer")();

router.post("/images", multer.single("images"), imageKitUpload);

// router.post("/images", storage.Image.single("images"), MediaProcessingImage);
router.post("/videos", storage.Video.single("videos"), MediaProcessingVideo);
router.post("/files", storage.File.single("f iles"), MediaProcessingFile);
router.post("/qr-code", generateQr);

module.exports = router;
