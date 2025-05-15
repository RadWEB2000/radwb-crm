import { supabase } from "@/lib/configs/supabase"
import logo from "@/assets/logo.png";
import Image from "next/image";
import getRelationsRate from "@/lib/functions/getRelationsRate";
import "moment/locale/pl";
import moment from "moment-timezone";
import Link from "next/link";

export default async function ClientsPage() {

    const { data: customers } = await supabase.from('customers').select('*');

    return (
        <>
            <div>klienci</div>
            <div className="px-4" >
                <table className="table bg-red-100/0 w-full text-center" >
                    <thead className="text-md text-wrap h-18">
                        <tr>
                            <th className="cursor-pointer" scope="col">Logo</th>
                            <th className="cursor-pointer" scope="col">Imię i nazwisko</th>
                            <th className="cursor-pointer" scope="col">Firma</th>
                            <th className="cursor-pointer" scope="col">Strona</th>
                            <th className="cursor-pointer" scope="col">E-mail</th>
                            <th className="cursor-pointer" scope="col">Nr telefonu</th>
                            <th className="cursor-pointer" scope="col">Usługi</th>
                            <th className="cursor-pointer" scope="col">Data startu</th>
                            <th className="cursor-pointer" scope="col">Ocena współpracy</th>
                        </tr>
                    </thead>
                    <tbody className="space-y-2" >
                        {
                            customers?.map(({ firstname, lastname, email, phone, seo_service, web_service, relations_rate, password_date, id }) => {
                                return (
                                    <tr className="text-sm h-12 odd:bg-stone-700/4" >
                                        <td>
                                            <Image
                                                className="m-auto"
                                                alt=""
                                                height={30}
                                                src={logo.src}
                                                width={30}
                                            />
                                        </td>
                                        <td>{`${firstname} ${lastname}`}</td>
                                        <td><Link href={`/dashboard/clients/${id}`} >Agrometal</Link></td>
                                        <td><Link href={`/dashboard/clients/${id}`} >agro-metal.com.pl</Link></td>
                                        <td>{email}</td>
                                        <td>{phone}</td>
                                        <td className="" >
                                            <ul className="flex items-center justify-center gap-1">
                                                <li className="bg-stone-200 font-normal px-1.5 py-1 rounded-md" >SEO</li>
                                                <li className="bg-stone-200 font-normal px-1.5 py-1 rounded-md" >WEB</li>
                                                <li className="bg-stone-200 font-normal px-1.5 py-1 rounded-md" >ADS</li>
                                            </ul>
                                        </td>
                                        <td><time className="uppercase" dateTime={password_date}>{moment(password_date).format('D MMM YYYY')}</time></td>
                                        <td><span className={`${getRelationsRate(relations_rate).color} flex items-center justify-center text-center text-md font-bold rounded-md mx-auto h-7 w-7`} >{getRelationsRate(relations_rate).number}</span></td>
                                    </tr>
                                )
                            })
                        }
                        <tr>

                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="bg-sky-200" >
                {
                    customers?.map((item) => {
                        return (
                            <li key={item.login} >
                                {item.login}
                            </li>
                        )
                    })
                }
            </div>
        </>
    )
}