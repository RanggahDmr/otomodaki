import { NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabaseClient";

export async function GET(){
    const {data, error} = await supabase.from("owner").select("*");

    if (error) {
        return NextResponse.json({error:error.message}, {status:500});
    }
    return NextResponse.json(data);
}

// == POST: new owner ==
export async function POST(req: Request){
    const body = await req.json();
    const {workshop, email, address, phone, photo} = body;

    if(!workshop || !email || !address || !phone){
        return NextResponse.json({error: "all field must be full"}, {status: 400});
    }
    const {data, error} = await supabase
    .from("owner")
    .insert([{workshop, email, address, phone, photo}])
    .select();

    if(error) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
    return NextResponse.json({messgae: "owner berhasil ditambahkan", data})
}