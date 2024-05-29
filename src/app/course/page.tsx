import { Header } from "@/components/Header";
import Image from "next/image";
import SoftwareSVG from "../../../public/softwareBg.svg";
import { InfoCourse } from "@/components/InfoCourse";

export default function CoursePage() {
  return (
    <>
      <Header />
      <div className=" relative flex items-center justify-center w-screen">
        <Image src={SoftwareSVG} alt="Software" />
        <h1 className="absolute text-5xl font-extrabold text-[#EBB1FF] uppercase">
          Engenharia de Software
        </h1>
      </div>
      <InfoCourse />
    </>
  );
}
