interface getDefaultDateRange {
    start: string;
    end: string;
}

export default function getDefaultDateRange(): getDefaultDateRange {

    const today = new Date();
    const end = new Date(today);
    end.setDate(end.getDate() - 1);

    const start = new Date(today);
    start.setMonth(start.getMonth() - 3);
    start.setDate(start.getDate() - 1);


    function formatter(date: Date): string {
        return date.toISOString().split("T")[0];
    }



    return {
        start: formatter(start),
        end: formatter(end)
    }
}