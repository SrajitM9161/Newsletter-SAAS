import { Document, Model } from "mongoose";

interface Monthdata {
    month: string;
    count: number;
}

export async function generateAnalyticsData<T extends Document>(
    model: Model<T>
): Promise<{ last7Months: Monthdata[] }> {
    const last7Months: Monthdata[] = [];
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);

    for (let index = 11; index >= 0; index--) {
        const endDate = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate()-index*28
        );

        endDate.setMonth(endDate.getMonth() - index);

        const startDate = new Date(endDate);
        startDate.setMonth(startDate.getMonth() - 1);

        const monthYear = endDate.toLocaleDateString("default", {
            month: "short",
            year: "numeric",
            day:"numeric",
        });

        const count = await model.countDocuments({
            createdAt: {
                $gte: startDate,
                $lt: endDate,
            },
        });

        last7Months.push({ month: monthYear, count });
    }
    return { last7Months };
}
