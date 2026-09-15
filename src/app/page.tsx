import Hero from "@/components/home/Hero";
import WorshipTimes from "@/components/home/WorshipTimes";
import LatestSermon from "@/components/home/LatestSermon";
import RecentNews from "@/components/home/RecentNews";
import AboutSnippet from "@/components/home/AboutSnippet";
import NewcomerCTA from "@/components/home/NewcomerCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <WorshipTimes />
      <LatestSermon />
      <RecentNews />
      <AboutSnippet />
      <NewcomerCTA />
    </>
  );
}
