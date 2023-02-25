
const nodeMailer =require('nodemailer');

const sendEmail =async(options)=>{


    const transporter =nodeMailer.createTransport({
       host:process.env.SMPT_HOST,
        prot:465,
        secure:true,
        service:process.env.SMPT_SERVICE,
       
        auth:{
            user:process.env.SMPT_MAIL,
            pass:process.env.SMPT_PASSWORD,
        }
    });
   
    const mailOptions ={

        from:process.env.SMPT_MAIL,
        to:process.env.to_email,
        subject:options.name,
        text:"ndj"
        
    }
 
    //sending mail
    await transporter.sendMail(mailOptions);

}


module.exports=sendEmail;