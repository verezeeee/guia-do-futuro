import { Separator } from "@/utils/Separator";
import { BsApple, BsFacebook, BsGoogle } from "react-icons/bs";

export default function Register() {
  const RegisterButtons = () => {
    return (
      <>
        <div className="flex flex-col items-center justify-between w-96 gap-8">
          <button className="w-96 p-4 flex items-center justify-start gap-5 bg-[#011A58] text-white rounded-lg">
            <BsGoogle className="text-white text-lg" />
            Criar conta com Google
          </button>
          <button className="w-96 p-4 flex items-center justify-start gap-5 bg-[#320D71] text-white rounded-lg">
            <BsFacebook className="text-white text-lg" />
            Criar conta com Facebook
          </button>
          <button className="w-96 p-4 flex items-center justify-start gap-5 bg-[#000000] text-white rounded-lg">
            <BsApple className="text-white text-lg" />
            Criar conta com Apple
          </button>
        </div>
      </>
    );
  };

  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="flex items-center justify-end p-16 gap-5 bg-register-bg w-screen h-screen bg-no-repeat">
        <div className="flex flex-col font-sans text-pretty items-center justify-between h-screen py-10 gap-5">
          <h1 className="text-4xl font-bold">Sua jornada começa aqui!</h1>
          <p className="text-lg text-center">Cria sua conta com seus dados:</p>
          <form className="flex flex-col items-start justify-start gap-5">
            <input
              type="text"
              placeholder="Nome"
              className="w-96 p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-96 p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="password"
              placeholder="Senha"
              className="w-96 p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="password"
              placeholder="Confirme sua senha"
              className="w-96 p-3 border border-gray-300 rounded-lg"
            />
            <div className="flex items-center justify-start w-96 gap-2">
              <input type="checkbox" name="Termos" id="termos" />
              <label htmlFor="termos" className="text-black text-sm">
                Aceito os termos de uso
              </label>
            </div>
            <button
              type="submit"
              className="w-96 p-3 bg-[#011A58] text-white rounded-lg"
            >
              Registrar
            </button>
          </form>
          <Separator />
          <RegisterButtons />
        </div>
      </div>
    </div>
  );
}
