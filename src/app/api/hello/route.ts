import { NextResponse } from "next/server"
export async function GET(){
    return NextResponse.json({"test":"as fuck as possible","num":1})
}