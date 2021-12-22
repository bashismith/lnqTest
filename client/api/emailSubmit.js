require('dotenv').config();
const mailchimp = require("@mailchimp/mailchimp_marketing");

 module.exports = async (req,res) => {
  const { email } = req.body;
  mailchimp.setConfig({
    apiKey: process.env.API_KEY,
    server: "us20"
  })
  try{
    const response = await mailchimp.lists.addListMember("ac3bfabd1e", {
        email_address: email,
        status: "subscribed",
      });
      res.status(200).json(response)
  }catch(err){
    res.status(400).json(err)
  }

}