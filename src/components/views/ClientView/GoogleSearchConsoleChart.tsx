"use client"

import { LineChart, ResponsiveContainer } from "recharts"

type GoogleSearchConsoleChart = {
    records?: Array<{
        keys: Array<string>;
        clicks: number;
        impressions: number;
        ctr: number;
        position: number;
    }>
}

export default function GoogleSearchConsoleChart({ records }: GoogleSearchConsoleChart) {
    return (
        <ResponsiveContainer height="100%" width="100%" >
        </ResponsiveContainer>
    )
}