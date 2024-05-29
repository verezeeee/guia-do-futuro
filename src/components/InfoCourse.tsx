"use client";
import { IoMdSearch } from "react-icons/io";
import SoftwareSVG from "../../public/softwareBg.svg";
import Rating from "../../public/Rating.svg";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import DonutChart from "@/utils/donutChart";

export const InfoCourse = () => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 14,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#3FC929" : "#308fe8",
    },
  }));

  return (
    <>
      <div className="flex flex-col items-start justify-center w-screen p-8">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-2xl font-bold text-[#000000] uppercase">
            Meu Aprendizado
          </h1>
          <div className="relative w-2/4">
            <input
              className="bg-gray-300 rounded-full h-10 px-4 border-b-2 border-white focus:outline-none
             text-black w-full"
              type="text"
              placeholder="Procure sua trilha aqui..."
            />
            <button className="absolute right-0 top-0 bg-[#04A9FF] text-white px-4 h-10 rounded-full">
              <IoMdSearch size={20} />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-start w-full gap-4 p-4 h-1/2">
          <div className="w-1/4 flex flex-col p-3 border border-black rounded-sm items-center justify-center gap-2 min-h-[450px]">
            <h1 className="text-md font-semibold text-[#7D7D7D]">
              Última trillha
            </h1>
            <div className="flex flex-col rounded-t-md">
              <Image
                className="rounded-t-lg h-[120px] object-cover"
                src={SoftwareSVG}
                alt="Software"
              />
              <div className="flex flex-col bg-[#D9D9D9] w-full p-3 gap-1">
                <h1 className="text-md text-black">Engenharia de Software</h1>
                <span className="text-[#7D7D7D]">Carga horária: 40h</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-black font-bold text-base">
                  Progresso:
                </span>
                <span className="text-[#7d7d7d] text-sm p-2">46%</span>
              </div>
              <BorderLinearProgress variant="determinate" value={46} />
              <span className="text-black font-bold text-base my-2">
                Continuar Exercícios
              </span>
              <Image
                className="transform hover:scale-105 transition-transform cursor-pointer"
                src={Rating}
                alt="Rating"
              />
            </div>
          </div>
          <div className="flex w-full h-full gap-2 justify-center items-center">
            <div className=" flex flex-col p-3 border border-black rounded-sm items-center justify-between w-2/3 min-h-[450px]">
              <h1 className="text-2xl text-[#7D7D7D]">
                Desempenho neste curso
              </h1>
              <div className="flex w-full mb-10">
                <div className="flex flex-col items-start justify-center gap-10">
                  <h1>
                    <strong className="text-black text-5xl font-extrabold">
                      36
                    </strong>{" "}
                    Questões Respondidas
                  </h1>
                  <h1>
                    <strong className="text-black text-5xl font-extrabold">
                      4h
                    </strong>{" "}
                    Tempo médio de estudo
                  </h1>
                  <h1>
                    <strong className="text-black text-5xl font-extrabold">
                      2
                    </strong>{" "}
                    Semanas consecutivas
                  </h1>
                </div>
                <div className="flex flex-col gap-4 min-h-[300px] items-center justify-center">
                  <DonutChart series={[70, 30]} labels={["Acertos", "Erros"]} />
                  <span className="text-[#7D7D7D] text-sm">
                    4 de 6 trilhas concluídas
                  </span>
                  <span className="text-[#FFA41C] text-sm">Meta semanal</span>
                </div>
              </div>
            </div>
            <div className=" flex flex-col p-3 border border-black rounded-sm items-center justify-start w-1/2 gap-3 min-h-[450px]">
              <h1 className="text-md text-[#7D7D7D]">Recomendados</h1>
              <div className="flex flex-col rounded-t-md transform hover:scale-105 cursor-pointer transition-transform">
                <Image
                  className="rounded-t-lg h-[100px] object-cover"
                  src={SoftwareSVG}
                  alt="Software"
                />
                <div className="flex flex-col bg-[#D9D9D9] w-full p-3 gap-1">
                  <h1 className="text-md text-black">Engenharia de Software</h1>
                  <span className="text-[#7D7D7D]">Carga horária: 40h</span>
                </div>
              </div>
              <div className="flex flex-col rounded-t-md transform hover:scale-105 cursor-pointer transition-transform ">
                <Image
                  className="rounded-t-lg h-[100px] object-cover"
                  src={SoftwareSVG}
                  alt="Software"
                />
                <div className="flex flex-col bg-[#D9D9D9] w-full p-3 gap-1">
                  <h1 className="text-md text-black">Engenharia de Software</h1>
                  <span className="text-[#7D7D7D]">Carga horária: 40h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
