import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";

// GET all social links
export async function GET() {
  try {
    const links = await prisma.socialLink.findMany({
      orderBy: { order: "asc" },
    });
    return NextResponse.json(links);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch social links" },
      { status: 500 }
    );
  }
}

// POST new social link
export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const data = await request.json();
    const link = await prisma.socialLink.create({ data });
    return NextResponse.json(link);
  } catch {
    return NextResponse.json(
      { error: "Failed to create social link" },
      { status: 500 }
    );
  }
}
