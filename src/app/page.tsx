import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Reviews } from "@/components/Reviews";
import { WhyApocalypse } from "@/components/WhyApocalypse";

export default function Home() {
  return (
    <main className="flex-1">
      <Header />
      <Hero />
      <Reviews />
      <WhyApocalypse />
    </main>
  );
}
