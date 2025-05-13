import { NextResponse } from "next/server";
import { accounts } from "@/static/accounts.json";


export async function POST(req: Request) {
    const body = await req.json();
    const { login, eMail, password } = body;

    console.log('body', body)

    const user = accounts.find((account) => account.login === login && account.eMail === eMail && account.password === password);

    console.log('user', user)
    if (!user) {
        return NextResponse.json(
            {
                success: false,
                message: 'Niepoprawne dane logowania'
            },
            {
                status: 401
            }
        )
    }


}