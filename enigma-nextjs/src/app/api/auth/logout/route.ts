import { NextResponse } from "next/server";

export async function GET() {
    const response=NextResponse.json({
        success: true,
        message: "Logout Successful"
    })
    //remove the cookies 
    response.cookies.delete("token")
    return response
}