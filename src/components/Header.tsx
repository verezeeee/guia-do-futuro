import Logo from "../../public/guiaDoFuturoLogo.svg";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="bg-gradient-to-r from-[#000B43] to-[#044CA0] flex items-center gap-5 p-4 justify-between">
      <Image src={Logo} alt="Guia do Futuro" width={200} height={50} />
      <div className="flex w-[100%] justify-center items-center gap-16">
        <a
          href="#"
          className="text-white text-md font-semibold hover:underline"
        >
          Faculdade
        </a>
        <a
          href="#"
          className="text-white text-md font-semibold hover:underline"
        >
          Exercícios
        </a>
        <a
          href="#"
          className="text-white text-md font-semibold hover:underline"
        >
          Materiais Didáticos
        </a>
        <a
          href="#"
          className="text-white text-md font-semibold hover:underline"
        >
          Cursos
        </a>
        <a
          href="#"
          className="text-white text-md font-semibold hover:underline"
        >
          Teste Vocacional
        </a>
        <a className="text-[#D41DD9] text-md font-semibold hover:underline cursor-pointer">
          Assinatura Premium
        </a>
      </div>
      <button className="bg-[#1BA1E7] text-white px-4 py-2 rounded-lg w-40">
        Criar conta
      </button>
    </div>
  );
};
