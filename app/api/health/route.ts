import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

/** Public connectivity probe. Returns no error details. */
export async function GET() {
	try {
		await prisma.$queryRaw`SELECT 1`;
		return NextResponse.json({ ok: true, db: true });
	} catch {
		return NextResponse.json({ ok: false, db: false }, { status: 503 });
	}
}
