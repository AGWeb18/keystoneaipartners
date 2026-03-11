import type { Metadata } from "next";
import ProjectsContent from "./ProjectsContent";

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description:
    "Explore Keystone AI Partners projects across AI copilots, automation, and modern data platforms delivering measurable impact.",
  openGraph: {
    title: "Projects & Case Studies",
    description:
      "See how Keystone AI Partners delivers AI copilots, data governance, and automation solutions for mid-market teams.",
    images: [
      {
        url: "/assets/img/big-data-7216774.svg",
        alt: "Keystone AI Partners portfolio collage",
      },
    ],
  },
  twitter: {
    title: "Projects & Case Studies",
    description:
      "Automation, AI, and data projects delivered by Keystone AI Partners for growth-minded organizations.",
    images: ["/assets/img/big-data-7216774.svg"],
  },
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
