import { NextResponse } from "next/server";

// GET BY ID
export async function GET(request, { params }) {
  try {
    const { id } = await params;

    return NextResponse.json(
      {
        success: true,
        message: "ดึงข้อมูลผู้ใช้สำเร็จ",
        id: id,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// PUT
export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const body = await request.json();

    return NextResponse.json(
      {
        success: true,
        message: "แก้ไขข้อมูลผู้ใช้สำเร็จ",
        id: id,
        data: body,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// DELETE
export async function DELETE(request, { params }) {
  try {
    const { id } = await params;

    return NextResponse.json(
      {
        success: true,
        message: "ลบข้อมูลผู้ใช้สำเร็จ",
        id: id,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์",
        error: error.message,
      },
      { status: 500 }
    );
  }
}