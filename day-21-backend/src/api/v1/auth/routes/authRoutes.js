const express = require("express");
const { sendOtpController } = require("../controllers/sendOtpController.js");

const authRouter = express.Router();

authRouter.post("/otps", sendOtpController);

module.exports = {
    authRouter,
};
