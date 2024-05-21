import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export const Footer = () => {
  const Separator = () => {
    return <div className="h-[1px] w-full bg-white" />;
  };

  return (
    <>
      <div className="bg-[#011A58] flex flex-col items-start gap-8 p-20">
        <div className="flex items-start justify-around gap-5 w-full">
          <div className="flex flex-col items-start justify-start gap-5">
            <h1 className="text-white text-2xl font-semibold">
              Guia do Futuro
            </h1>
            <div className="flex items-start justify-start gap-2 flex-col">
              <a href="#" className="text-white text-sm">
                Quem somos
              </a>
              <a href="#" className="text-white text-sm">
                Membros da equipe
              </a>
              <a href="#" className="text-white text-sm">
                Assinatura Premium
              </a>
              <a href="#" className="text-white text-sm">
                Contatos
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-5">
            <h1 className="text-white text-2xl font-semibold">Contato</h1>
            <div className="flex items-start justify-start gap-2 flex-col">
              <a href="#" className="text-white text-sm flex gap-2">
                <MdOutlineEmail className="text-white text-lg" size={24} />
                atendimento@guiadofuturo.com
              </a>
              <a
                href="#"
                className="text-white text-sm flex gap-2 justify-center items-center"
              >
                <FaPhoneAlt className="text-white text-lg" size={24} />
                +55 (62) ####-####
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-5">
            <h1 className="text-white text-2xl font-semibold">Mais</h1>
            <div className="flex items-start justify-start gap-2 flex-col">
              <a href="#" className="text-white text-sm">
                Termos
              </a>
              <a href="#" className="text-white text-sm">
                Privacidade
              </a>
              <a href="#" className="text-white text-sm">
                Ajuda
              </a>
              <a href="#" className="text-white text-sm">
                Acessibilidade
              </a>
            </div>
          </div>
        </div>
        <Separator />
        <div className="flex items-center justify-between w-full">
          <span className="text-white text-sm">
            © 2021 Guia do Futuro. Todos os direitos reservados.
          </span>
          <div className="flex items-center justify-center gap-5">
            <a href="#" className="text-white text-sm">
              <FaLinkedin className="text-white text-lg" size={24} />
            </a>
            <a href="#" className="text-white text-sm">
              <FaInstagram className="text-white text-lg" size={24} />
            </a>
            <a href="#" className="text-white text-sm">
              <FaFacebook className="text-white text-lg" size={24} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
