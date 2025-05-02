import { useState } from "react";

export const SignupPage = () => {
    const [sendingOtp, setSendingOtp] = useState(false);
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [email, setEmail] = useState("");

    const handleSendOtp = async (e) => {
        try {
            setSendingOtp(true);
            e.preventDefault();

            const email = e.target.email.value;
            setEmail(email);

            const resp = await fetch("http://localhost:2200/api/v1/auth/otps", {
                method: "POST",
                body: JSON.stringify({ email }),
                headers: {
                    "Content-type": "application/json",
                },
            });

            const data = await resp.json();

            console.log(data);
            setIsOtpSent(true);
        } catch (err) {
            console.log("Error sending otp", err.message);
        } finally {
            setSendingOtp(false);
        }
    };

    if (isOtpSent) {
        return (
            <div>
                <form>
                    <input value={email} disabled />
                </form>
            </div>
        );
    }

    return (
        <div>
            <form onSubmit={handleSendOtp}>
                <div>
                    <input type="email" name="email" require />
                </div>
                <div>
                    <button disabled={sendingOtp} className="">
                        {sendingOtp ? "Sending..." : "Send OTP"}
                    </button>
                </div>
            </form>
        </div>
    );
};
