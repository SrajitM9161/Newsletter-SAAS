import Navbar from "@/components/global/NavBar";
import { ContainerScroll } from "@/providers/container-scroll-animation";
import { InfiniteMovingCards } from "@/providers/infinite-moving-cards";
import { clients } from "@/lib/Constants";
import { LampComponent } from "@/providers/lamp";
import { CardBody, CardContainer, CardItem } from '@/providers/3d-card'
import { CheckIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col">
      <Navbar />
      <section className="h-screen w-full bg-neutral-950 rounded-md relative flex flex-col items-center antialiased">
        <div className="absolute inset-0 h-full w-full items-center px-5 py-24 bg-[radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
        <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
          <ContainerScroll
            titleComponent={
              <div className="flex items-center flex-col">
                <h1 className="text-5xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                  Empower Your Messages, Engage Your Audience
                </h1>
              </div>
            }
          />
        </div>
      </section>
      <InfiniteMovingCards
        className="md:mt-[35rem] mt-[180px]"
        items={clients}
        direction="right"
        speed="slow"
      />
      <LampComponent />
      <div className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-8 -mt-72">
        {[
          {
            title: "Launch",
            price: "₹0",
            description: "No commitment",
            features: [
              "Up to 100 subscribers",
              "Unlimited sends",
              "Custom newsletter",
              "Newsletter analytics",
              "30-day free trial of Scale features, then free forever"
            ]
          },
          {
            title: "Grow",
            price: "₹299 /month",
            description: "Billed Monthly",
            features: [
              "Up to 500 subscribers",
              "Custom domains",
              "API access",
              "Newsletter community",
              "30-day free trial of Scale features, then $42/mo"
            ]
          },
          {
            title: "Scale",
            price: "₹600 /month",
            description: "Billed Monthly",
            features: [
              " Unlimited subscribers",
              "Referral program",
              "AI support",
              "Advanced support system",
              "Ad Network",
              "30-day free trial of Scale features"
            ]
          }
        ].map((plan, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                {plan.title}
                <h2 className="text-6xl ">{plan.price}</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {plan.description}
                <ul className="my-4 flex flex-col gap-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <CheckIcon />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </main>
  );
}
