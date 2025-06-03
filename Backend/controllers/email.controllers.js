const { sendemail } = require('../services/emailsend.services.js');
const { isValidEmail } = require('../services/emailTest.services.js');

module.exports.SendEmailToMe = async (req, res, next) => {

    const { name, email, message } = req.body;
    console.log(name, email, message)
    try {
        if (!name || !email || !message) return res.status(400).json({ message: "All three fields are required" });

        if (!isValidEmail(email)) return res.status(400).json({ message: "Please enter a Valid email" });

        sendemail(name, email, message);
        
        return res.status(200).json({ message: "Thanks for messaging!" });

    } catch (error) {
        console.error("Error saving email:", error);
        return res.status(500).json({ message: "Internal Server Error" })
    }
}