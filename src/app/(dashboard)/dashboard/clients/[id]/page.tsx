import getSearchConsole from "@/funcs/getSearchConsole";
import getDefaultDateRange from "@/lib/functions/getDefaultDateRange";
import Link from "next/link";
import { LineChart, ResponsiveContainer } from "recharts";

export default async function ClientPage({ params }: { params: { id: number } }) {

    const props = await params;

    const dateRange = getDefaultDateRange();

    const getGSC = (await getSearchConsole().searchanalytics.query({
        siteUrl: 'https://agromar.site',
        requestBody: {
            startDate: dateRange.start,
            endDate: dateRange.end,
            dimensions: [
                'date'
            ]
        }
    })).data.rows

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
                <div className="h-12 w-full bg-red-200">

                </div>
            </div>
        </>
    )
}