import { NextResponse } from "next/server";
import { prisma } from '../../../../libs/prisma';
import { notFound } from "next/navigation";
import { Prisma } from "@prisma/client";


interface Params {
 params: { id: string }
}
export const GET = async (req:Request,{params}: Params) => {
  try {
      const resp= await prisma.note.findUnique({
          where: {
              id: Number(params?.id)
          }
      })

      if(!resp) {
          notFound()
      }
  
      return NextResponse.json({resp });
  } catch (error) {
    if (error instanceof Error) {
        return NextResponse.json({ message: error.message, statusCode: 500 });
        }
  }
}

export const DELETE = async (req :Request, {params}: Params) => {
    try {
      const resp = await prisma.note.delete({
        where: {
          id: Number(params.id)
        }
      })
  
    
      return NextResponse.json({ resp });
      
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if(error.code === 'P2025') {
            notFound()
            }

        return NextResponse.json({ message: error.message, statusCode: 500 });
      }
    }
  }

export const PUT = async (req: Request, { params }: Params) => {
    try {
        const { title, content } = await req.json();
        const resp = await prisma.note.update({
            where: {
                id: Number(params.id)
            },
            data: {
                title,
                content
            }
        })
       
        return NextResponse.json({ resp });
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if(error.code === 'P2025') {
                notFound()
                }
            return NextResponse.json({ message: error.message, statusCode: 500 });
        }
    }
}