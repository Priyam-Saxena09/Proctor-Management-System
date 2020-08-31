const swg = require("@sendgrid/mail")
const API = process.env.API
swg.setApiKey(API)
sen = (name,email) => {
    swg.send({
        to:email,
        from:"priyamsaxena2k@gmail.com",
        subject:"Welcome to BMSCE Proctor Management",
        text:`Hi ${name}.You are successfully sign up in BMSCE Proctor Management.Thanks for joining us.`
    })
}
module.exports = sen