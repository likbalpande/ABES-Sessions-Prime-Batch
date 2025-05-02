const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    // secure: false, // true for port 465, false for other ports
    auth: {
        user: "cloudfile2024@gmail.com",
        pass: "tywesgqeqwrvfvsd",
    },
});

const sendMail = async ({ emails, subject, html }) => {
    try {
        const info = await transporter.sendMail({
            from: '"Admin App" <likhilesh@gmail.com>',
            to: emails,
            subject: subject,
            html: html,
        });
    } catch (err) {
        console.log("----------------------------");
        console.log("Could not send email to", emails);
        console.log(err.message);
        console.log("----------------------------");
    }
};

const sendOtpMail = async ({ otp, email }) => {
    await sendMail({
        subject: "Otp Verification @ Admin App",
        emails: [email],
        html: `
            <html>
                <body>
                    <div style="display: flex; align-items: center; justify-content: center; background: yellow; padding: 2rem;">
                        <div style="padding:2rem;">
                            <h2>OTP Verification</h2>
                            <p>Your otp for verification is ${otp}</p>
                        </div>
                    </div>
                </body>
            </html>
        `,
    });
};
