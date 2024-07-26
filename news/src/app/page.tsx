import Navbar from "@/components/global/NavBar";
import { ContainerScroll } from "@/providers/container-scroll-animation";
import { Button } from "@/components/ui/button";
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
                <Button
                  size={'lg'}
                  className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600 md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-black">
                    Start For Free Today
                  </span>
                </Button>
                <h1 className="text-5xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                  Empower Your Messages, Engage Your Audience
                </h1>
              </div>
            }
          />
        </div>
      </section>
      <InfiniteMovingCards
        className="md:mt-[18rem] mt-[180px]"
        items={clients}
        direction="left"
        speed="fast"
      />
      <LampComponent />
      <div className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-8 -mt-72">
        {[
          {
            title: "Launch",
            price: "₹0",
            description: "No commitment",
            features: [
              "Up to 2,500 subscribers",
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
              "Up to 10,000 subscribers",
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
              "Up to 100,000 subscribers",
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
