import ContentSection from "@/components/ContentSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MissionStatement from "@/components/MissionStatement";
import OurClients from "@/components/OurClients";
import RecentNews from "@/components/RecentNews";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <MissionStatement />

      <ContentSection />
      <OurClients />
      <RecentNews />
      <Footer />
    </>
  );
}
