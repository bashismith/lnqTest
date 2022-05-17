require('dotenv').config();

 module.exports = async (req,res) => {
  const { password } = req.body;
  try{
    if(password === process.env.API_KEY){
      res.status(200).send(true)
    }
    return false

  }catch(err){
    console.log(process.env.API_KEY)
    // res.status(400).json(err)
  }

}