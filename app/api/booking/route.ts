import { NextResponse } from "next/server";

const bookings: { date: string; time: string; service: string }[] = [];

export async function POST(req: Request) {
  const { date, time, service } = await req.json();

  if (!date || !time || !service) {
    return NextResponse.json({ error: "Invalid booking data" }, { status: 400 });
  }

  bookings.push({ date, time, service });

  return NextResponse.json({ message: "Booking created successfully" }, { status: 200 });
}
