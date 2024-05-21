import Image from "next/image";
import Chapeu from "../../public/Chapeu.svg";
import Software from "../../public/Software.svg";
import Direito from "../../public/Direito.svg";
import { IoMdSearch } from "react-icons/io";

type CoursesProps = {
  CourseImage: string;
  Title: string;
  Description: string;
  Inscritos: number;
};

export const Courses = () => {
  const CourseWrapper = ({
    CourseImage,
    Title,
    Description,
    Inscritos,
  }: CoursesProps) => {
    return (
      <div className="bg-transparent w-1/2 h-[300px] text-white flex items-start gap-4 justify-start py-5">
        <Image src={CourseImage} alt={Title} width={60} height={60} />
        <div className="flex flex-col items-start justify-start gap-5 w-full">
          <h1 className=" text-2xl font-semibold">{Title}</h1>
          <span className="text-lg h-32 ">{Description}</span>
          <div className=" rounded-tl-xl rounded-br-xl bg-[#1BA1E7] text-white text-sm px-4 py-2">
            Usuários Inscritos: {Inscritos}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-r from-[#12224B] to-[#3B087B] flex items-center gap-5 p-4 justify-between">
      <div className="flex w-[100%] flex-col justify-center items-center gap-4 p-4">
        <div className="flex items-center justify-center gap-5">
          <h1 className="text-white text-2xl font-semibold uppercase">
            Cursos em Destaque
          </h1>
          <Image src={Chapeu} alt="Guia do Futuro" width={50} height={50} />
        </div>
        <div className="flex items-center justify-center gap-16 px-20">
          <CourseWrapper
            CourseImage={Software}
            Title="Engenharia de Software"
            Description="Engenharia de Software é um curso que aborda técnicas, métodos e ferramentas para desenvolver, testar e manter software, focando em qualidade, eficiência e colaboração 
            em equipe."
            Inscritos={100}
          />
          <CourseWrapper
            CourseImage={Direito}
            Title="Direito"
            Description="O curso de Direito explora leis, sistemas legais e habilidades 
            jurídicas, preparando  profissionais para carreiras como 
            advogados e juízes."
            Inscritos={130}
          />
        </div>
        <div className="bg-transparent flex w-3/4 px-4 py-2 text-white text-sm items-center justify-between gap-4">
          <h1 className="text-2xl w-1/3">Procurando algo específico?</h1>
          <div className="relative w-2/4">
            <input
              className="bg-white rounded-full h-10 px-4 border-b-2 border-white focus:outline-none
             text-black w-full"
              type="text"
              placeholder="Pesquisar..."
            />
            <button className="absolute right-0 top-0 bg-[#04A9FF] text-white px-4 h-10 rounded-full">
              <IoMdSearch size={20} />
            </button>
          </div>
          <span>ou</span>
          <button className="bg-gradient-to-r from-[#A822AC] to-[#E42FF3] text-white px-4 py-2 rounded-full w-40">
            Surpreenda-me!
          </button>
        </div>
      </div>
    </div>
  );
};
