export const SignupPage = () => {
    const handleSendOtp = async (e) => {
        try {
            e.preventDefault();

            const email = e.target.email.value;

            const resp = await fetch("http://localhost:2200/api/v1/auth/otps", {
                method: "POST",
                body: JSON.stringify({ email }),
                headers: {
                    "Content-type": "application/json",
                },
            });

            const data = await resp.json();

            console.log(data);
        } catch (err) {
            console.log("Error sending otp", err.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleSendOtp}>
                <div>
                    <input type="email" name="email" require />
                </div>
                <div>
                    <button>Send OTP</button>
                </div>
            </form>
        </div>
    );
};
