const express= require("express");
const bodyParser= require("body-parser");
const twilio= require("twilio");
const mongoose= require("mongoose");
const cors= require("cors");

const app= express();
const PORT= 3001;

app.use(bodyParser.json());
app.use(cors());

const MONGOURI= "mongodb+srv://adityanimisha2003:39tH56wiIltNGXqf@cluster0.nuwspms.mongodb.net/";
const accountSID= "ACe42004ad4f298e91488007d4ea532f59";
const authToken= "0c37453073564d5b301eefbbc8db5698";

const client= new twilio(accountSID, authToken);

mongoose.connect(MONGOURI);

const otpSchema=new mongoose.Schema({
    phoneNumber: String,
    otp: String
}) 

const OTPmodel= mongoose.model("Otp", otpSchema);

const generateOTP= ()=>{
    return Math.floor(100000 + Math.random()*900000);
}

app.post("/send-otp", (req, res)=>{
    const {phoneNumber}= req.body;
    const otp= generateOTP();

    const otpDocument=new OTPmodel({phoneNumber,otp});
    otpDocument.save();
    console.log("Hello world");
    console.log(client);

    client.messages.create({
        body: `Your otp is ${otp}`,
        from: "+12028998728",
        to: phoneNumber,
    })
    .then(()=>{
        res.send({success: true, otp: otp});
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).send({success: false, message: "Failed to send otp"});
    })
})

app.post("/verify-otp", async (req, res)=>{
    console.log(req);
    const {phoneNumber, userOtp}= req.body;
    // console.log(phoneNumber);
    // console.log(userOtp);
    if(phoneNumber==""){
        return res.status(404).send({
            success:false
        })
    }
    try{
        const otpDocument= await OTPmodel.findOne({phoneNumber,otp: userOtp})
        // console.log(otpDocument);
        if(otpDocument){
            res.send({
                success:true,
            })
        }
        else{
            res.status(401).send({
                success:false,
                message: "Invalid otp",
            })
        }
    }
    catch(error){
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in verifyng otp",
        })
    }
})
app.listen(PORT, ()=>{
    console.log(`Server has successfully started at port ${PORT}`);
})
