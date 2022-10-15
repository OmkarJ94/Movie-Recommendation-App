const router = require('express').Router()
// const e = require('express');
const nodemailer = require('nodemailer');
const hbs = require("nodemailer-express-handlebars")
const path = require('path')
router.post("/sendemail", async (req, res) => {
   const {data,email}=req.body
    if (!data) {
        return res.status(404).send("Invalid")
    }
    else {

        mailer(email, data, req, res)
        res.status(200).send("success")
    }
})

const mailer = (mail, data, req, res) => {
    try {
        let mailTransporter = nodemailer.createTransport({
            service: 'gmail',

            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });

        mailTransporter.use('compile', hbs({
            viewEngine: {
                extname: ".handlebars",
                partialsDir: path.resolve('./views'),
                defaultLayout: false
            },

            viewPath: path.resolve('./views'),
            extname: ".handlebars",
        }))

        let mailDetails = {
            from: process.env.EMAIL,
            to: mail,
            subject: data.Title,
            template: 'index',
            context: {
                data
            }
        };


        mailTransporter.sendMail(mailDetails, function (err, data) {

            if (err) {
                res.status(404).send("Invalid");

            } else {
                res.status(200).send(success);
            }
        })
    } catch (error) {
        res.status(404).send("Invalid");
        

    }
}

module.exports = router