import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import setCookie from "../utils/generateToken.js";

export const signupUser=async(req,res) => {
    try{
        const {fullName,userName,password,confirmPassword,gender}= req.body;
        if (password !== confirmPassword){
            return res.status(400).json({error:"Password Mismatched"})
        }

        const user =await User.findOne({userName});
        if (user){
            return res.status(400).json({error:"Username already exists"})
        }
        const salt =await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password,salt);


        const boyProfilePic=`https://avatar.iran.liara.run/public/boy?username=${userName}`;
        const girlProfilePic=`https://avatar.iran.liara.run/public/girl?username=${userName}`

        const  newUser =new User({
            fullName,
            userName,
            password:hashedPassword,
            gender,
            profilePic:gender ==="male" ? boyProfilePic :girlProfilePic 
        })
        if (newUser){
            setCookie(newUser._id,res);
            await newUser.save();
            
            res.status(201).json({
                _id:newUser._id,
                fullName:newUser.fullName,
                userName:newUser.userName,
                profilePic:newUser.profilePic,
                password:newUser.password
            })
        }
        else{
        res.status(500).json({error:`Internal User Data`})

        }
        
    }catch(error){
        console.log("Error in Signup Controller",error.message);
        res.status(500).json({error:`Internal Server Error ${error}`})

    }
}
export const loginUser= async (req,res) => {
try{
    const {userName,password} =req.body;
    const user =await User.findOne({userName});
    const isPasswordCorrect =await bcryptjs.compare(password,user.password);
    if (!user || !isPasswordCorrect){
        return res.status(400).json({error:"Invalid Username Or Password"});
    }

    setCookie(user._id,res);
    res.status(200).json({
        _id:user._id,
        userName:user.userName,
        password: user.password,
        fullName:user.fullName
    })
}
catch(error){
    console.log("Error in login Controller",error.message);

    res.status(500).json({error:`Internal Server Error ${error}`})

}
}
export const logoutUser= async (req,res) => {
    try{
        res.cookie("jwt","",{ maxAge: 0 });
        res.status(200).json({message:"Logged Out Succcessfully!"});
    }
    catch(error){
        console.log("Error in logout Controller",error.message);

        res.status(500).json({error:`Internal Server Error ${error}`})
    
    }
}
