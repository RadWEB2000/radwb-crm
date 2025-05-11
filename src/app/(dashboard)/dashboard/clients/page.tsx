import Image from "next/image"
import logoClient from "../../../../assets/logo-client.webp"
import Link from "next/link"

export default function ClientsPage(){
    return (
        <>
      
        <table className="w-[95%] px-2 bg-stone-200/0 text-center table-fixed table border-2 mx-auto mt-3 border-stone-200/30 border-collapse" >
            <thead className="bg-stone-700 text-gray-50 text-base h-20">
                <tr>
                    <th>Logo</th>
                    <th>Nazwa</th>
                    <th>Adres URL</th>
                    <th>Nazwa uslugi</th>
                    <th>Rozpoczęcie wspólpracy</th>
                    <th>Budzet</th>
                    <th>OT</th>
                    <th>OH</th>
                </tr>
            </thead>
            <tbody className=" [&>tr:nth-child(odd)]:bg-stone-100/40 [&>tr:nth-child(even)]:bg-white" >
                <tr className="py-4 h-15 text-xs text-stone-800"> 
                    <td>
                        <Image
                            className="mx-auto"
                            alt="" 
                            width={35}
                            height={35}
                            src={logoClient.src}
                            loading="lazy"
                        />
                    </td>
                    <td><Link href="/dashboard/clients/1" prefetch className="font-bold text-stone-900 hover:underline">Agro-metal</Link></td>
                    <td className="text-xs"><Link href='https://agro-metal.com.pl/' className="hover:underline" target="_blank" rel="noindex nofollow" >https://agro-metal.com.pl/</Link></td>
                    <td>
                        <Link href="#" className="px-1.5 py-1 bg-emerald-900 text-white rounded-md font-bold uppercase text-xs">
                            Mini SEO
                        </Link>
                    </td>
                    <td className="">2023-01-01</td>
                    <td className="">1000 PLN</td>
                    <td className="">Radoslaw Adamczyk</td>
                    <td className="">Janusz Kowalski</td>
                </tr>
                <tr className="py-4 h-15 text-xs text-stone-800"> 
                    <td>
                        <Image
                            className="mx-auto"
                            alt="" 
                            width={35}
                            height={35}
                            src={logoClient.src}
                            loading="lazy"
                        />
                    </td>
                    <td><Link href="/dashboard/clients/1" prefetch className="font-bold text-stone-900 hover:underline">Agro-metal</Link></td>
                    <td className="text-xs"><Link href='https://agro-metal.com.pl/' className="hover:underline" target="_blank" rel="noindex nofollow" >https://agro-metal.com.pl/</Link></td>
                    <td>
                        <Link href="#" className="px-1.5 py-1 bg-emerald-900 text-white rounded-md font-bold uppercase text-xs">
                            Mini SEO
                        </Link>
                    </td>
                    <td className="">2023-01-01</td>
                    <td className="">1000 PLN</td>
                    <td className="">Radoslaw Adamczyk</td>
                    <td className="">Janusz Kowalski</td>
                </tr>
                <tr className="py-4 h-15 text-xs text-stone-800"> 
                    <td>
                        <Image
                            className="mx-auto"
                            alt="" 
                            width={35}
                            height={35}
                            src={logoClient.src}
                            loading="lazy"
                        />
                    </td>
                    <td><Link href="/dashboard/clients/1" prefetch className="font-bold text-stone-900 hover:underline">Agro-metal</Link></td>
                    <td className="text-xs"><Link href='https://agro-metal.com.pl/' className="hover:underline" target="_blank" rel="noindex nofollow" >https://agro-metal.com.pl/</Link></td>
                    <td>
                        <Link href="#" className="px-1.5 py-1 bg-emerald-900 text-white rounded-md font-bold uppercase text-xs">
                            Mini SEO
                        </Link>
                    </td>
                    <td className="">2023-01-01</td>
                    <td className="">1000 PLN</td>
                    <td className="">Radoslaw Adamczyk</td>
                    <td className="">Janusz Kowalski</td>
                </tr>
                <tr className="py-4 h-15 text-xs text-stone-800"> 
                    <td>
                        <Image
                            className="mx-auto"
                            alt="" 
                            width={35}
                            height={35}
                            src={logoClient.src}
                            loading="lazy"
                        />
                    </td>
                    <td><Link href="/dashboard/clients/1" prefetch className="font-bold text-stone-900 hover:underline">Agro-metal</Link></td>
                    <td className="text-xs"><Link href='https://agro-metal.com.pl/' className="hover:underline" target="_blank" rel="noindex nofollow" >https://agro-metal.com.pl/</Link></td>
                    <td>
                        <Link href="#" className="px-1.5 py-1 bg-emerald-900 text-white rounded-md font-bold uppercase text-xs">
                            Mini SEO
                        </Link>
                    </td>
                    <td className="">2023-01-01</td>
                    <td className="">1000 PLN</td>
                    <td className="">Radoslaw Adamczyk</td>
                    <td className="">Janusz Kowalski</td>
                </tr>
                <tr className="py-4 h-15 text-xs text-stone-800"> 
                    <td>
                        <Image
                            className="mx-auto"
                            alt="" 
                            width={35}
                            height={35}
                            src={logoClient.src}
                            loading="lazy"
                        />
                    </td>
                    <td><Link href="/dashboard/clients/1" prefetch className="font-bold text-stone-900 hover:underline">Agro-metal</Link></td>
                    <td className="text-xs"><Link href='https://agro-metal.com.pl/' className="hover:underline" target="_blank" rel="noindex nofollow" >https://agro-metal.com.pl/</Link></td>
                    <td>
                        <Link href="#" className="px-1.5 py-1 bg-emerald-900 text-white rounded-md font-bold uppercase text-xs">
                            Mini SEO
                        </Link>
                    </td>
                    <td className="">2023-01-01</td>
                    <td className="">1000 PLN</td>
                    <td className="">Radoslaw Adamczyk</td>
                    <td className="">Janusz Kowalski</td>
                </tr>
            </tbody>
        </table>
        </>
    )
}