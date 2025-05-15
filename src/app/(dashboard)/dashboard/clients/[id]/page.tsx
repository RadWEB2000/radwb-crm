import { getSearchConsole } from "@/lib/functions/getSearchConsole";
import Link from "next/link";

export default async function ClientPage({ params }: { params: { id: number } }) {

    const props = await params;

    const getGSC = await getSearchConsole.searchanalytics.query({
        siteUrl: 'https://agromar.site',
        requestBody: {
            startDate: '2024-07-01',
            endDate: '2025-01-01',
            dimensions: [
                'query'
            ]
        }
    })

    console.log(getGSC)



    return (
        <>
            <div
                className="bg-stone-400/20 px-2 py-2"
            >
                <Link href="#" className="text-stone-700 hover:text-stone-950 focus:text-stone-950">Agromar.site</Link>
            </div>
            <div
                className="px-3 mt-2"
            >
                <div className="h-12 w-full bg-red-200"></div>
            </div>
        </>
    )
}