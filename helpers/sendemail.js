/**
 * @param {string} toWhomSend repsresent which email to send
 * @param {string} dataSubject represent subject of email
 * @param {string} dataHtml represent text in html
 */
const path = require('path');
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 80,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

const sendEmail = async (toWhomSend,dataSubject, dataHtml, dataText) => {

    try {
        const info = await transporter.sendMail({
            from: process.env.EMAIL,
            to: toWhomSend, 
            subject: dataSubject,
            text: dataText, 
            html: dataHtml,
        });
     console.log(info);
    } catch (err) {
        console.log(err);
    }

}
module.exports = sendEmail;
