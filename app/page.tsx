import type { Metadata } from "next";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  title: "AI & Automation for Mid-Market Teams",
  description:
    "Keystone AI Partners transforms raw data into governed platforms, automation copilots, and analytics that accelerate decision-making.",
  openGraph: {
    title: "AI & Automation for Mid-Market Teams",
    description:
      "Partner with Keystone AI Partners to modernize your data estate and launch intelligent workflows that deliver measurable impact.",
    images: [
      {
        url: "/assets/img/big-data-7216774.svg",
        alt: "Keystone AI Partners project showcase",
      },
    ],
  },
  twitter: {
    title: "AI & Automation for Mid-Market Teams",
    description:
      "From Snowflake to Power Platform to LLM copilots, Keystone AI Partners brings automation and analytics to life.",
    images: ["/assets/img/big-data-7216774.svg"],
  },
};

export default function HomePage() {
  return <HomeContent />;
}
