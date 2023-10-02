import { NextResponse } from "next/server";
import { prisma } from "../../../libs/prisma";
import { notFound } from "next/navigation";

interface Params {
  params: {id: string}  
}

export const GET = async () => {
  try {
    const listNotes = await prisma.note.findMany();
    return NextResponse.json(listNotes);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message, statusCode: 500 });
    }
  }
};

export const POST = async (req: Request) => {
  try {
    const { title, content } = await req.json();
    const resp = await prisma.note.create({
      data: {
        title,
        content,
      },
    });
    return NextResponse.json({ resp });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message, statusCode: 500 });
    }
  }

};