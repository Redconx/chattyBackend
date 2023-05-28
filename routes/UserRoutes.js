const express = require("express");
const router = express.Router();
const { registerUser, authUser, allUsers } = require("../controllers/UserControllers");
const { protect } = require("../middleWares/authMiddleware");

// router.route('/').post(registerUser) we can write in this fashion also
router.post("/", registerUser);
router.post("/login", authUser);
router.get("/", protect , allUsers);

module.exports = router;
