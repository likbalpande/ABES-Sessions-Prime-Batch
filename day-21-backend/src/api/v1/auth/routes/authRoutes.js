const express = require("express");
const { sendOtpController } = require("../controllers/sendOtpController");

const authRouter = express.Router();

authRouter.post("/otps", sendOtpController);

module.exports = {
    authRouter,
};
