"use client"
import { accounts } from "@/static/accounts.json";
import validateLoginForm from "@/funcs/validateLoginForm";
import { useRouter } from "next/navigation";
export default function LoginPanel() {
    // console.log(accounts.accounts)
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const login = form.login.value;
        const eMail = form.eMail.value;
        const password = form.password.value;

        const getAccount = accounts.find((account) => account.login === login && account.eMail === eMail && account.password === password);

        if (getAccount) {
            if (getAccount.role === "employeer") {
                console.log("dashboard")
                return router.push('/dashboard')
            } else if (getAccount.role === "customer") {
                console.log("customer")
                return router.push('/customer')
            }
        } else {
            console.log("error")
            return "error"
        }

        console.log(getAccount)

    }

    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <div className="px-5 py-8 w-xl rounded-xl space-y-6" >
                <h3 className="font-extrabold text-4xl text-center text-stone-950" >RadWEB CRM</h3>
                <form action="" onSubmit={handleSubmit} className="flex flex-col space-y-3" autoComplete="off"  >
                    <div className="flex flex-row flex-wrap w-md mx-auto">
                        <label className="font-bold text-md text-stone-700 mb-1 w-2/5" htmlFor="login">Login</label>
                        <input className="mb-2 duration-75 linear bg-stone-100 text-stone-900 px-3 py-1  w-3/5 rounded-md text-md focus:bg-stone-200 hover:bg-stone-200 outline-0" type="text" name="login" id="login" required autoComplete="off" />
                        <label className="font-bold text-md text-stone-700 mb-1  w-2/5" htmlFor="eMail">Adres e-mail</label>
                        <input className="mb-2 duration-75 linear bg-stone-100 px-3 w-3/5 py-1 rounded-md text-md focus:bg-stone-200 hover:bg-stone-200 outline-0" type="email" name="eMail" id="eMail" required autoComplete="off" />
                        <label className="font-bold text-md text-stone-700 mb-1 w-2/5" htmlFor="password">Hasło</label>
                        <input className="mb-2 duration-75 linear bg-stone-100 px-3 w-3/5 py-1 rounded-md text-md focus:bg-stone-200 hover:bg-stone-200 outline-0" type="password" name="password" id="password" required autoComplete="off" />
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                        <button className="bg-indigo-600 w-fit px-5 py-2 rounded-lg font-bold text-white text-md hover:bg-indigo-500 focus:bg-indigo-500 duration-100 linear cursor-pointer" type="submit">
                            Zaloguj się
                        </button>
                        <button className="text-sm font-bold hover:underline hover:text-indigo-500 focus:underline focus:text-indigo-500 cursor-pointer duration-100 linear" type="submit">
                            Nie pamiętasz hasła?
                        </button>
                    </div>
                </form>
            </div>
        </div >
    )
}