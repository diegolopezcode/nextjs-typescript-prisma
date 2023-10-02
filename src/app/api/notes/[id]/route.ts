import { NextResponse } from "next/server";

export const GET = (
    req: { params: { id: string } },
) => {

    return NextResponse.json({ message: "Desde Server", id: req.params?.id });
}

export const DELETE = (
    req: { params: { id: string } },
) => {

    return NextResponse.json({ message: "Deleting things ...", id: req.params?.id });
}

export const PUT = (
    req: { params: { id: string } },
) => {

    return NextResponse.json({ message: "Updating things ...", id: req.params?.id });
}