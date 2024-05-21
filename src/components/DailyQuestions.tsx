"use client";
import Image from "next/image";
import Exclamation from "../../public/VectorExclamation.svg";
import Questao from "../../public/Questao1.svg";
import { useState } from "react";

type AnswersProps = {
  question: {
    letter: string;
    description: string;
  };
};

export const DailyQuestions = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);
  const AnsWrapper = ({
    question,
    index,
  }: AnswersProps & { index: number }) => {
    return (
      <div className="flex items-start justify-start gap-5 w-full">
        <button
          onClick={() => setSelectedQuestion(index)}
          className={`${
            selectedQuestion === index
              ? "bg-[#011A58] text-white"
              : "bg-transparent"
          } text-lg
        } flex items-center justify-center border-spacing-1 border border-black rounded-full w-10 h-10`}
        >
          {question.letter}
        </button>
        <span className="text-black text-lg flex items-center justify-center p-1">
          {question.description}
        </span>
      </div>
    );
  };

  const questions = [
    { letter: "A", description: "String" },
    { letter: "B", description: "Hashing" },
    { letter: "C", description: "Matriz" },
    { letter: "D", description: "Árvore" },
    { letter: "E", description: "Vetor" },
  ];

  const Answers = () => {
    return (
      <div className="flex flex-col w-full gap-2">
        {questions.map((question, index) => (
          <AnsWrapper key={index} question={question} index={index} />
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="bg-white flex flex-col items-center justify-center gap-5 p-8">
        <div className="flex items-center justify-center gap-5">
          <h1 className="text-black text-2xl font-semibold uppercase">
            Pergunta Diária
          </h1>
          <Image
            src={Exclamation}
            alt="Guia do Futuro"
            width={50}
            height={50}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-5 border border-spacing-1 border-black rounded-md p-6">
          <span className="text-black text-lg">
            Um Analista de TI necessitou usar uma estrutura de dados simples que
            utilizasse pouca carga de memória de armazenamento. Tal estrutura é
            vista como um arranjo cuja capacidade pode variar dinamicamente,
            isto é, se o espaço reservado for totalmente ocupado e algum espaço
            adicional for necessário, este será alocado automaticamente não
            havendo a necessidade de se preocupar com a capacidade de
            armazenamento ou sua ocupação. Contudo, para que se possa utilizar
            essa coleção de dados de forma adequada, algumas informações
            necessárias devem ser mantidas internamente, tais como a quantidade
            total de elementos e a última posição ocupada na coleção, conforme
            exemplificado na figura abaixo. 
          </span>
          <Image src={Questao} alt="Guia do Futuro" width={400} height={400} />
          <span className="text-black text-lg w-full">
            Trata-se da estrutura linear unidimensional :
          </span>
          <Answers />
        </div>
      </div>
    </>
  );
};
