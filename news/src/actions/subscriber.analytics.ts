"use server"
import Subscriber from "@/models/subscriber.model"
import { generateAnalyticsData } from "@/shared/utils/analytics.generate"

export const SubscribersAnalytics= async () =>{
    try {
        const subscriber =await generateAnalyticsData(Subscriber)
        return subscriber
        
    } catch (error) {
        console.log(error)
    }
}