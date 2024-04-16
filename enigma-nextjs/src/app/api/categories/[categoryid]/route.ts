import { connectDB } from "@/configs/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Category from "@/models/categoryModel";
import { validateJWT } from "@/helpers/validateJWT";
import { message } from "antd";

connectDB();

export async function PUT(
  request: NextRequest,
  {
    params,
  }: {
    params: {
      categoryid: string;
    };
  }
) {
  try {
    await validateJWT(request);
    const reqBody = await request.json();
    await Category.findByIdAndUpdate(params.categoryid, reqBody);
    return NextResponse.json({
        success: true,
        message: "Category updated successfully",
      });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}


export async function DELETE( request: NextRequest,{params}:{params:{categoryid:string}}) {
    try {

        await validateJWT(request);
        await Category.findByIdAndDelete(params.categoryid);
        return NextResponse.json({
            success: true,
            message: "Category deleted successfully",
          });
        
    } catch (error:any) {
        return NextResponse.json(
            { success: false, message: error.message },
            { status: 500 }
          );
    }
}
