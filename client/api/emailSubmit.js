require('dotenv').config();
const mailchimp = require("@mailchimp/mailchimp_marketing");

 module.exports = (req,res) => {
  const { email } = req.body;
  mailchimp.setConfig({
    apiKey: process.env.API_KEY,
    server: "us20"
  })
  console.log('hello')
  async function run(){
    const response = await mailchimp.ping.get();
    console.log(response)
  }
  run()

  const response = await mailchimp.lists.addListMember("ac3bfabd1e", {
      email_address: email,
      status: "subscribed",
    });
    res.status(200).json(response)
}