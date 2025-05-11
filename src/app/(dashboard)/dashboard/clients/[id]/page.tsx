import Link from "next/link";
import { FaGoogleDrive } from "react-icons/fa";
import { SiGoogleanalytics, SiGoogleads, SiGooglesearchconsole, SiGoogletagmanager } from "react-icons/si";


export default function ClientPage(){
    return (
        <>
        <div className="w-full bg-stone-200/20 py-3 px-6 flex items-center justify-between">
        <div className="flex items-centers flex-row gap-2">
            <p className="text-md font-bold text-stone-950">Agro-metal.com.pl</p>
            <p className="text-sm text-stone-900 my-auto">Mini SEO</p>
            <p className="text-sm text-stone-900 my-auto">950 PLN</p>
            </div>
            <div className="flex items-centers flex-row gap-2">
            <div className="flex items-center justify-center gap-1 my-auto">
                <Link href="#" className="text-stone-400 hover:text-stone-700 duration-75 linear uppercase text-xs">
                    Ahrefs
                </Link>
                <Link href="#" className="text-stone-400 hover:text-stone-700 duration-75 linear uppercase text-xs">
                    Senuto
                </Link>
                <Link href="#" className="text-stone-400 hover:text-stone-700 duration-75 linear uppercase text-xs">
                    Semstorm
                </Link>
                <Link href="#" className="text-stone-400 hover:text-stone-700 duration-75 linear uppercase text-xs">
                    Site
                </Link>
            </div>
            <div className="flex items-center justify-center gap-2">
                <Link href="#" className="text-stone-400 hover:text-stone-700 duration-75 linear">
                    <FaGoogleDrive/>
                </Link>
                <Link href="#" className="text-stone-400 hover:text-stone-700 duration-75 linear">
                <SiGoogleanalytics />
                </Link>
                <Link href="#" className="text-stone-400 hover:text-stone-700 duration-75 linear">
                    <FaGoogleDrive/>
                </Link>
                <Link href="#" className="text-stone-400 hover:text-stone-700 duration-75 linear">
                    <SiGoogleads/>
                </Link>
                <Link href="#" className="text-stone-400 hover:text-stone-700 duration-75 linear">
                    <SiGooglesearchconsole/>
                </Link>
                <Link href="#" className="text-stone-400 hover:text-stone-700 duration-75 linear">
                    <SiGoogletagmanager/>
                </Link>
            </div>
            </div>
        </div>  
        </>
    )
}