const express = require("express");
const { sendOtpController } = require("../controllers/sendOtpController");

const authRouter = express.Router();

authRouter.post("/otp", sendOtpController);

module.exports = {
    authRouter,
};
