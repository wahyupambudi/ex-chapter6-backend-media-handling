const router = require("express").Router();
const { MediaProcessingImage, MediaProcessingVideo, MediaProcessingFile, generateQr} = require("../controller/user.controller");
const storage = require('../lib/multer')

router.post("/images", storage.Image.single('images'), MediaProcessingImage);
router.post("/videos", storage.Video.single('videos'), MediaProcessingVideo);
router.post("/files", storage.File.single('files'), MediaProcessingFile);
router.post("/qr-code", generateQr);

module.exports = router;
 