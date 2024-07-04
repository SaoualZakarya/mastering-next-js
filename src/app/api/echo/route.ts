import { NextResponse } from "next/server"
export async function GET(req:Request,res:Response){

    const {searchParams} = new URL(req.url)

    const obj = Object.fromEntries(searchParams.entries())

    return NextResponse.json(obj)
}