import { connectDB } from "@/configs/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { message } from "antd";
import jwt from "jsonwebtoken"
connectDB();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    //check user is exist  or not 
    const user = await User.findOne({email: reqBody.email})
    if(!user){
        throw new Error("User Does Not Exist")
    }
    const passwordMatch=await bcrypt.compare(reqBody.password, user.password)
    if(!passwordMatch){
        throw new Error("Invalid Password")
    }
    //create token 
    const token =  jwt.sign({id:user._id},process.env.jwt_secret!,{
        expiresIn:"7d"
    });

    const response = NextResponse.json({
        message:"Login Successfull",
    })

    response.cookies.set("token",token,{
        httpOnly:true,
        path: "/"
    });


    return response

  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 400 }
    );
  }
}
