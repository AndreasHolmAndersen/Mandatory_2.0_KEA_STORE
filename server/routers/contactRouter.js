import { Router } from 'express';
import nodemailer from 'nodemailer';
const router = Router();

router.post("/api/contact", async (req, res) => {

  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });
  
  let info = await transporter.sendMail({
    from: `${req.body.name} <${req.body.email}>`, // sender address
    to: "keastore@mail.dk", // list of receivers
    subject: `${req.body.subject}`, // Subject line
    text: `${req.body.message}`, // plain text body
    
  });
  
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  res.send({etherealUrl: nodemailer.getTestMessageUrl(info)});

  // res.send(nodemailer.getTestMessageUrl(info));
  
});

  
  

  export default router;
