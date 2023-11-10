const router = require("express").Router();
const { mediaProcessing } = require("../controller/user.controller");
const storage = require('../lib/multer')

router.post("/images", storage.Image.single('images'), mediaProcessing);

module.exports = router;
