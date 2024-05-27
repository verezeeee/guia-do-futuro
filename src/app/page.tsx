import { About } from "@/components/AboutProduct";
import { BannerHome } from "@/components/Banner";
import { Courses } from "@/components/Courses";
import { DailyQuestions } from "@/components/DailyQuestions";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Image from "next/image";

export default function Home() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
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
