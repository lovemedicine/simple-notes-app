import { NextResponse } from 'next/server'
 
import prisma from '../prisma'

export async function GET() {
  const result = await prisma.note.findMany({
    orderBy: [
      {
        createdAt: 'desc',
      }
    ]
  })
  return NextResponse.json(result)
}

export async function POST(request: Request) {
  let json = await request.json()  
  const result = await prisma.note.create({
    data: {
      text: json.text
    }
  })
  return NextResponse.json(result)
}

export async function DELETE(request: Request) {
  let json = await request.json()
  const result = await prisma.note.delete({
    where: {
      id: json.id
    }
  })
  return NextResponse.json(result)
}