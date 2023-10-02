import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json({ message: "Desde Server" });
};

export const POST = () => {
  return NextResponse.json({ message: "Creating things ..." });
};
