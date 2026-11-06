import { NextResponse } from "next/server";

// POST: เข้าสู่ระบบ
export async function POST(request) {
  try {
    const body = await request.json();

    if (!body.username || !body.password) {
      return NextResponse.json(
        {
          success: false,
          message: "กรุณากรอกชื่อผู้ใช้และรหัสผ่าน",
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "เข้าสู่ระบบสำเร็จ",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์",
      },
      { status: 500 }
    );
  }
}