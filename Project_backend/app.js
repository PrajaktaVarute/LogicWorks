const express=require("express");

const app=express();
const mongoose=require("mongoose");
app.use(express.json());
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");

const mongoUrl="mongodb+srv://nikitabelhekar4105:admin@cluster0.v953h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const JWT_SECRET="kfjisrjiofkp9[aifi398685dfkgkfjidlkg]]kks()jfietsnviabhil9wey";
mongoose.connect(mongoUrl).then(()=>{
    console.log("Database connected");
}).catch((e)=>{
    console.log(e);
})

require('./UserDetails')
const User=mongoose.model("UserInfo");

app.get("/",(req,res)=>{
    res.send({status:"started"})
})

app.post('/register',async(req,res)=>{
    const {name,email,password}=req.body;

    const oldUser=await User.findOne({email:email});
    if(oldUser){
        return res.send({data:"User already existed!!"});
    }
    const encryptedPassword=await bcrypt.hash(password,6);

    try{
        await User.create({
            name:name,
            email,
            password:encryptedPassword,
        });
        res.send({status:"ok",data:"User Created"});
    }
    catch(error){
        res.send({status:"error",data:"error"});
    }
});

app.post("/login-user",async(req,res)=>{
    const {email,password}=req.body;
    const oldUser=await User.findOne({email:email});
    if(!oldUser){
        return res.send({data:"User doesn't exists!!"})
    }
    if(await bcrypt.compare(password,oldUser.password)){
        const token=jwt.sign({email:oldUser.email},JWT_SECRET);
        if(res.status(201)){
            return res.send({status:"ok",data:token})
        }
        else{
            return res.send({error:"error"});
        }
    }
});

app.post("/userData",async(req,res)=>{
    const {token}=req.body;
    try{
        const user=jwt.verify(token.JWT_SECRET)
        const usseremail=user.email;
        User.findOne({email:usseremail}).then(data=>{
            return res.send({status:"ok",data:data});
        });
    }
    catch(error){
        return res.send({error:error});
    }
});



app.listen(5002,()=>{
    console.log("Node js server is started. ");
});