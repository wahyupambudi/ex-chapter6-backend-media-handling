const router = require("express").Router();
const {
  MediaProcessingImage,
  MediaProcessingImages,
  MediaProcessingVideo,
  MediaProcessingFile,
  generateQr,
  imageKitUpload,
} = require("../controller/user.controller");

const storage = require("../lib/multer");
const multer = require("multer")();

router.post("/image-single", storage.Image.single("images"), MediaProcessingImage);
router.post("/images", storage.Image.array("images", 3), MediaProcessingImages);
router.post("/imagekit", multer.single("images"), imageKitUpload);
router.post("/videos", storage.Video.single("videos"), MediaProcessingVideo);
router.post("/files", storage.File.single("f iles"), MediaProcessingFile);
router.post("/qr-code", generateQr);

module.exports = router;
