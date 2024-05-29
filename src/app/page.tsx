import { About } from "@/components/AboutProduct";
import { BannerHome } from "@/components/Banner";
import { Courses } from "@/components/Courses";
import { DailyQuestions } from "@/components/DailyQuestions";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <BannerHome />
      <About />
      <Courses />
      <DailyQuestions />
      <Footer />
    </>
  );
}
