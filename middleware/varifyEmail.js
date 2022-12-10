const nodemailer = require('nodemailer')


// send Email 
const varifyAdmin = async (subject, emailTo, message) => {

    // sending Email 
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'rehanpardesi2018@gmail.com', // generated ethereal user
            pass: "vgjlrivtuwhulakb", // generated ethereal password
        },
    });

    var mailOptions = {
        from: 'rehanpardesi2018@gmail.com',
        to: emailTo,
        subject:  subject,
        html: message
    };

    // sending varifying email to registerd user
    await transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            res.status(424).json({ "msg": 'email not send due to some error' })
        } else {
            res.status(200).json({ success: true, msg: "email send successfully" })
        }
    });


}


module.exports = varifyAdmin