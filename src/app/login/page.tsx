import { BsGoogle, BsFacebook, BsApple } from "react-icons/bs";
import Link from "next/link";
import { Separator } from "@/utils/Separator";

export default function LoginPage() {
  const LoginButtons = () => {
    return (
      <>
        <div className="flex flex-col items-center justify-between w-96 gap-8">
          <button className="w-96 p-4 flex items-center justify-start gap-5 bg-[#011A58] text-white rounded-lg">
            <BsGoogle className="text-white text-lg" />
            Entrar com Google
          </button>
          <button className="w-96 p-4 flex items-center justify-start gap-5 bg-[#320D71] text-white rounded-lg">
            <BsFacebook className="text-white text-lg" />
            Entrar com Facebook
          </button>
          <button className="w-96 p-4 flex items-center justify-start gap-5 bg-[#000000] text-white rounded-lg">
            <BsApple className="text-white text-lg" />
            Entrar com Apple
          </button>
        </div>
      </>
    );
  };

  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="flex items-center justify-end p-24 gap-5 bg-login-bg w-screen h-screen bg-no-repeat">
        <div className="flex flex-col font-sans text-pretty  items-center justify-between h-screen py-10 gap-5 ">
          <h1 className="text-4xl font-bold">Bem-vindo de volta!</h1>
          <p className="text-lg text-center">
            Entre na sua conta com seus dados:
          </p>
          <form className="flex flex-col items-start justify-start gap-5">
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
            <div className="flex items-center justify-between w-96 gap-8">
              <button
                type="submit"
                className="w-96 p-3 bg-[#011A58] text-white rounded-lg"
              >
                Entrar
              </button>
              <Link
                className="w-96 p-3 bg-[#320D71] text-center text-white rounded-lg"
                href="/register"
              >
                Criar conta
              </Link>
            </div>
            <button className="text-[#011A58] text-center w-[100%]">
              Esqueceu a senha?
            </button>
          </form>
          <Separator />
          <LoginButtons />
        </div>
      </div>
    </div>
  );
}
