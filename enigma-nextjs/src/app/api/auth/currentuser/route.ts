import { connectDB } from "@/configs/dbConfig";
import { validateJWT } from "@/helpers/validateJWT";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { message } from "antd";
connectDB();
export async function GET(request: NextRequest) {
  try {
    const userId = await validateJWT(request);
    const user = await User.findById(userId).select("-password");
    return NextResponse.json({
      success: true,
      data: user,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
