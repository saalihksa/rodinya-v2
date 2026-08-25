import { AboutCafe } from "@/components/home/AboutCafe";
import { DayStory } from "@/components/home/DayStory";
import { Desserts } from "@/components/home/Desserts";
import { FindUs } from "@/components/home/FindUs";
import { HeroSlider } from "@/components/home/HeroSlider";
import { HomeInfo } from "@/components/home/HomeInfo";
import { HomeQuote } from "@/components/home/HomeQuote";
import { ReviewsMarquee } from "@/components/home/ReviewsMarquee";
import { Seasonal } from "@/components/home/Seasonal";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <HomeInfo />
      <Desserts />
      <DayStory />
      <HomeQuote />
      <Seasonal />
      <AboutCafe />
      <ReviewsMarquee />
      <FindUs />
    </>
  );
}
