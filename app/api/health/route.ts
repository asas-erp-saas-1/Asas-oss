import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    system: 'ASAS Real Estate OS',
    message: 'API يعمل بنجاح'
  });
}
