import { supabase } from "@/configs/supabase";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const formData = await req.formData();
    const login = formData.get('login') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const { data: customer } = await supabase.from('customers').select('*').or(`login.eq.${login},email.eq.${email}`).single();
    const { data: employeers } = await supabase.from('employeers').select('*').or(`login.eq.${login},email.eq.${email}`).single();

    if (customer && customer.password === password) {
        return NextResponse.redirect(new URL('/customer', req.url));
    }
    if (employeers && employeers.password === password) {
        return NextResponse.redirect(new URL('/dashboard', req.url));
    }

    return NextResponse.json({
        error: 'Nieznaleziono odpowiedniego konta'
    }, { status: 401 })

}