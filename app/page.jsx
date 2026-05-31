import { StarsBackground } from "@/components/GravityStarsBackgroundComponents";
import { GoldTitle, GrayTitle, SectionLable } from "@/components/reusables";
import { StarsBackgroundDemo } from "@/components/StarsBackGround";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <div className="bg-black overflow-x-hidden">
      <section className="pt-28 sm:pt-32 relative min-h-screen grid grid-cols-1 lg:grid-cols-5 px-4 sm:px-8 pb-20 overflow-hidden">
        <StarsBackgroundDemo />

        <div className="col-span-full lg:col-span-3 flex flex-col items-center justify-center text-center lg:-rotate-2">
          <Badge variant="gold">Powered By AI</Badge>

          <h1 className="font-serif relative text-5xl sm:text-6xl lg:text-7xl tracking-tighter max-w-4xl">
            <GrayTitle>Ace your next interview</GrayTitle>
            <br />
            <GoldTitle>with real experts</GoldTitle>
          </h1>

          <p className="relative text-sm sm:text-base md:text-lg text-stone-400 max-2-xl mt-6 landing-relaxed">
            Book 1:1 mock interviews with senior engineers from top companies
            Get AI-powered feedback, role-specific questions, and the confidence to lanf your dream jobs
          </p>

          <div className="relative flex justify-center gap-2 sm:gap-4 mt-10 sm:w-auto">
            <Link href='/onboarding'>
              <Button variant="gold" size="hero">Get Started</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
