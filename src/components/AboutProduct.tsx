import Image from "next/image";
import Guy from "../../public/Guy.svg";
import Vector from "../../public/Vector.svg";

export const About = () => {
  const Separator = () => {
    return <div className="bg-[#001451] h-1 w-full"></div>;
  };

  return (
    <div className="py-4">
      <Image
        src={Guy}
        alt="Guy"
        height={500}
        width={500}
        className="absolute right-0 my-8"
      />
      <div className="flex items-center justify-center gap-5">
        <h1 className="text-2xl text-black">SOBRE O PRODUTO</h1>
        <Image src={Vector} alt="Vector" height={30} width={30} />
      </div>
      <div className="flex flex-col p-12 items-center justify-start gap-5 w-2/3">
        <h1 className="text-3xl text-black font-bold">
          Bem-vindo à Guia do Futuro!
        </h1>
        <span>
          • Nossa plataforma de estudos foi cuidadosamente projetada para
          oferecer uma experiência simples e intuitiva, tornando o aprendizado
          acessível a todos, independentemente do nível de conhecimento. Com uma
          interface amigável e recursos robustos, a Guia do Futuro permite que
          os usuários explorem uma ampla variedade de cursos, desde habilidades
          básicas até tópicos avançados, em diversas áreas do conhecimento.
        </span>
        <Separator />
        <span className="text-black text-lg">
          • Nosso objetivo é capacitar indivíduos de todas as idades e origens a
          desenvolverem suas habilidades, explorarem seus interesses e
          alcançarem seu pleno potencial. Com uma abordagem centrada no usuário
          e um foco na inovação educacional, estamos moldando o futuro da
          aprendizagem online, proporcionando oportunidades de aprendizado
          significativas e impactantes para todos.
        </span>
        <div className="flex items-center justify-start gap-5 w-full">
          <button className="bg-[#1BA1E7] text-white px-4 py-2 rounded-lg w-40">
            Comece já!
          </button>
          <button className="bg-gradient-to-r from-[#A822AC] to-[#450A4A] text-white px-4 py-2 rounded-lg w-40">
            Saiba mais
          </button>
        </div>
        <Separator />
      </div>
    </div>
  );
};
