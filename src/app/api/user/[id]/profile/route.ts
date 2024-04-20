import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

/**
 * userId
 * @params params { id: String } ;
 */
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const userId = Number(params.id);
    const user = await prisma.profile.findUnique({
      where: {
        userId,
      },
      include: {
        interestingEvent: {
          where: {},
        },
      },
    });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 400 });
    }
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
