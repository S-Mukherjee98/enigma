import { connectDB } from "@/configs/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { message } from "antd";
connectDB();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    //check if user already exist with email
    const userExists = await User.findOne({ email: reqBody.email });
    if (userExists) {
      throw new Error("User already exist");
    }

    //create new user

    //password encryption
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(reqBody.password, salt);
    reqBody.password = hashedPassword;
    const newUser = new User(reqBody);
    await newUser.save();

    return NextResponse.json({
      success: true,
      message: "User created successfully",
      data: newUser,
    });
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
