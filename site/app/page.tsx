import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import {
  About,
  Awards,
  CtaBanner,
  DemoVillage,
  Hero,
  Partners,
  Sdgs,
  SideEventsOutcomes,
  StartupChallenge,
  Tracks,
} from "@/app/components/Sections";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Tracks />
        <DemoVillage />
        <StartupChallenge />
        <Awards />
        <SideEventsOutcomes />
        <Sdgs />
        <Partners />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
