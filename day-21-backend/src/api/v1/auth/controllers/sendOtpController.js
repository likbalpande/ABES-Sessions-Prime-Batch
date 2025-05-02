const { OtpModel } = require("../../../../models/otp");
const { sendOtpMail } = require("../../../../utils/emailHelper");
const bcrypt = require("bcryptjs");
/*
    POST: /api/v1/auth/otps (email in the body)
*/
const sendOtpController = async (req, res) => {
    try {
        const { email } = req.body;

        // only send otp when there is no otp sent earlier or it was sent more than 10 minutes back

        const otp = Math.floor(Math.random() * 9000 + 1000);

        await sendOtpMail({ email, otp });

        const salt = await bcrypt.genSalt(14);
        console.log("salt", salt);
        const hash = await bcrypt.hash(otp + "", salt);
        console.log("hash", hash);

        OtpModel.create({
            email: email,
            otp: hash,
        });

        res.status(201);
        res.json({
            status: "success",
            message: "OTP sent successfully!",
        });
    } catch (err) {
        console.log("----------------------------------------");
        console.log("Error in sendOtpController", err.message);
        console.log("----------------------------------------");
        res.status(500);
        res.json({
            status: "fail",
            message: "Internal Server Error",
        });
    }
};

module.exports = { sendOtpController };
