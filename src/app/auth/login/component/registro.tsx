'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import InputField from "./input/index"; // componente dos inputs
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type SignupModalProps = {
  onClose?: () => void;
  onOpenModal1?: () => void; // login
};

export default function SignupModal({ onClose, onOpenModal1 }: SignupModalProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [step, setStep] = useState<"form" | "done">("form");
  const [showMessage, setShowMessage] = useState(false);
  const [typedMessage, setTypedMessage] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [birthDate, setBirthDate] = useState<Date | null>(null);

  const fullMessageForm =
    "Eu sou a Athena, sua assistente emocional. Estou aqui pra te ajudar a entender melhor seus sentimentos e serei sua parceira nessa jornada de autoconhecimento. Preciso te conhecer um pouco para te cadastrar nesta jornada";

  const fullMessageDone =
    "Estamos quase lá...";

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  const handleOpenModal1 = () => {
    setIsOpen(false);
    if (onClose) onClose();
    if (onOpenModal1) onOpenModal1();
  };

  const handleProsseguir = () => {
    setStep("done");
    setShowMessage(false);
    setTypedMessage("");
    setIsTypingComplete(false);

    setTimeout(() => setShowMessage(true), 500);
  };

  // delay inicial pra fala da Athena
  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 1000);
    return () => clearTimeout(timer);
  }, [step]);

  // efeito de digitação
  useEffect(() => {
    if (!showMessage) return;

    const fullMessage = step === "form" ? fullMessageForm : fullMessageDone;
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullMessage.length) {
        setTypedMessage(fullMessage.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, 30);

    return () => {
      clearInterval(typingInterval);
      setIsTypingComplete(false);
    };
  }, [showMessage, step]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 font-inter">
      <div className="h-170 relative flex w-[min(980px,92%)] max-w-[980px] rounded-[12px] bg-slate-800 border border-[#1f2937] shadow-[0_20px_60px_rgba(2,6,23,0.6)] p-8 md:p-12 overflow-visible">

        {/* Atena + mensagem */}
        <div className="hidden md:block absolute left-5 bottom-0 translate-y-[5%] translate-x-[10%] pointer-events-none select-none">
          {showMessage && (
            <div
              className={`
                absolute -top-30 -right-60 w-72 bg-white text-slate-800 p-4 rounded-lg shadow-xl
                animate-fadeIn z-20 border border-gray-200
                ${isTypingComplete ? "h-auto" : "h-52"}
                transition-all duration-300 ease-in-out
              `}
            >
              <div className="absolute top-40 right-68 w-5 h-5 bg-white transform rotate-45"></div>
              <h3 className="text-[17px] md:text-[18px] font-bold mb-2 text-black leading-tight">
                {step === "form" ? "Bem-vindo à MindTracking!" : "Tudo pronto!"}
              </h3>
              <p className="text-[14px] text-black md:text-[15px] font-medium leading-snug">
                {typedMessage}
              </p>
            </div>
          )}

          <Image
            src={step === "form" ? "/images/athena2.png" : "/images/athena3.png"}
            alt="Doctor illustration"
            width={255}
            height={280}
            className="h-auto w-[190px] md:w-[230px]"
          />
        </div>

        {/* Conteúdo variável */}
        <div className="flex flex-col w-full max-w-[412px] ml-auto px-4 md:pl-12 items-center text-center">

          {/* Logo */}
          <div className="w-16 md:w-18 mb-6">
            <Image src="/images/logo.svg" alt="Logo" width={62} height={60} className="h-auto w-full" />
          </div>

          {step === "form" ? (
            <>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Vamos começar!</h2>
              <p className="text-[1.3125rem] text-white mt-3 mb-8">
                Sua jornada rumo ao equilíbrio emocional começa aqui.
              </p>

              <InputField placeholder="Email" type="email" iconSrc="/images/email.svg" />
              <InputField placeholder="Senha" type="password" iconSrc="/images/password.svg" hasTogglePassword />
              <InputField placeholder="Confirme sua senha" type="password" iconSrc="/images/password.svg" hasTogglePassword />

              <button
                type="button"
                onClick={handleProsseguir}
                className="w-full h-11 rounded-[1.5rem] bg-blue-600 text-white font-bold 
                           transition-all duration-300 ease-out
                           hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30
                           active:scale-[0.98] active:bg-blue-800"
              >
                Prosseguir para próxima etapa
              </button>

              {/* divisor */}
              <div className="flex items-center justify-center w-full my-3">
                <div className="flex-grow h-[0.5px] bg-white/20"></div>
                <span className="px-4 text-[16px] text-white">Ou</span>
                <div className="flex-grow h-[0.5px] bg-white/20"></div>
              </div>

              <button
                onClick={handleOpenModal1}
                className="w-full h-11 rounded-[1.5rem] font-bold border border-[#2b3640] text-white 
                           transition-all duration-300 ease-in-out
                           hover:bg-gray-800/30 hover:ring-blue-500 hover:border-blue-400
                           hover:shadow-[0_0_15px_-3px_rgba(37,99,235,0.3)]
                           active:scale-[0.98] ring-2 ring-blue-600"
              >
                Já tem uma conta?
              </button>
            </>
          ) : (
            <>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Cadastro Concluído!</h2>
              <p className="text-[1.3125rem] text-white mt-3 mb-8">
                Seu cadastro foi realizado com sucesso. Bem-vindo à plataforma!
              </p>

              <InputField placeholder="Nome" type="text" iconSrc="/images/user.svg" />

              {/* Campo de data de nascimento usando o InputField personalizado */}
              <InputField 
                placeholder="Data de nascimento" 
                type="date" 
                iconSrc="/images/calendar.svg" 
                value={birthDate}
                onChange={setBirthDate}
              />

              <button
                onClick={handleClose}
                className="w-full h-11 rounded-[1.5rem] bg-blue-600 text-white font-hbold 
                           transition-all duration-300 ease-out
                           hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30
                           active:scale-[0.98] active:bg-blue-800 mb-4"
              >
                Acessar Plataforma
              </button>

              {/* divisor */}
              <div className="flex items-center justify-center w-full my-3">
                <div className="flex-grow h-[0.5px] bg-white/20"></div>
                <span className="px-4 text-[16px] text-white">Ou</span>
                <div className="flex-grow h-[0.5px] bg-white/20"></div>
              </div>

              <div className="flex gap-4 w-full">
                <button
                  onClick={handleOpenModal1}
                  className="flex-1 h-11 rounded-[1.5rem] font-bold border border-[#2b3640] text-white 
                             transition-all duration-300 ease-in-out
                             hover:bg-gray-800/30 hover:ring-blue-500 hover:border-blue-400
                             hover:shadow-[0_0_15px_-3px_rgba(37,99,235,0.3)]
                             active:scale-[0.98] ring-2 ring-blue-600"
                >
                  Voltar ao Login
                </button>
                <button
                  onClick={() => setStep("form")}
                  className="flex-1 h-11 rounded-[1.5rem] font-bold border border-[#2b3640] text-white 
                             transition-all duration-300 ease-in-out
                             hover:bg-gray-800/30 hover:ring-blue-500 hover:border-blue-400
                             hover:shadow-[0_0_15px_-3px_rgba(37,99,235,0.3)]
                             active:scale-[0.98] ring-2 ring-blue-600"
                >
                  Voltar ao Cadastro
                </button>
              </div>
            </>
          )}
        </div>

        {/* Botão fechar */}
        <button
          className="absolute top-4 right-4 w-13 h-13 rounded-full text-white hover:bg-white/5 flex items-center justify-center z-50"
          aria-label="Fechar"
          onClick={handleClose}
        >
          <Image src="/images/fechar.svg" alt="Fechar" width={40} height={32} />
        </button>
      </div>
    </div>
  );
}