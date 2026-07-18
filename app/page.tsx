import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Reframe } from "@/components/sections/Reframe";
import { Experiences } from "@/components/sections/Experiences";
import { Feels } from "@/components/sections/Feels";
import { Trust } from "@/components/sections/Trust";
import { Community } from "@/components/sections/Community";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Reframe />
        <Experiences />
        <Feels />
        <Trust />
        <Community />
      </main>
      <Footer />
    </>
  );
}
