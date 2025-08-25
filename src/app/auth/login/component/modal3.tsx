'use client';

import { useState, useEffect } from "react";
import Image from "next/image";

type Modal3Props = {
  onClose?: () => void; 
  onOpenModal1?: () => void;
  onOpenModal2?: () => void;
};

export default function Modal3({ onClose, onOpenModal1, onOpenModal2 }: Modal3Props) {
  const [isOpen, setIsOpen] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [typedMessage, setTypedMessage] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullMessage = "Cadastro concluído com sucesso! Agora você pode acessar todos os recursos da plataforma.";

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  const handleOpenModal1 = () => {
    setIsOpen(false);
    if (onClose) onClose();
    if (onOpenModal1) onOpenModal1();
  };

  const handleOpenModal2 = () => {
    setIsOpen(false);
    if (onClose) onClose();
    if (onOpenModal2) onOpenModal2();
  };

  useEffect(() => {
    const messageTimer = setTimeout(() => {
      setShowMessage(true);
    }, 1000);
    
    return () => clearTimeout(messageTimer);
  }, []);

  useEffect(() => {
    if (!showMessage) return;

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
  }, [showMessage]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 font-inter">
      <div className="h-170 relative flex w-[min(980px,92%)] max-w-[980px] rounded-[12px] bg-slate-800 border border-[#1f2937] shadow-[0_20px_60px_rgba(2,6,23,0.6)] p-8 md:p-12 overflow-visible font-inter">

        {/* Ilustração da doutora com balão de mensagem */}
        <div className="hidden md:block absolute left-5 bottom-0 translate-y-[5%] translate-x-[10%] pointer-events-none select-none">
          {showMessage && (
            <div className={`
              absolute -top-30 -right-60 w-72 bg-white text-slate-800 p-4 rounded-lg shadow-xl
              animate-fadeIn z-20 border border-gray-200
              ${isTypingComplete ? 'h-auto' : 'h-52'}
              transition-all duration-300 ease-in-out
            `}>
              <div className="absolute top-40 right-68 w-5 h-5 bg-white transform rotate-45"></div>
              
              <h3 className="text-[17px] md:text-[18px] font-bold mb-2 text-black leading-tight">
                Tudo pronto!
              </h3>
              
              <p className="text-[14px] text-black md:text-[15px] font-medium leading-snug">
                {typedMessage}
              </p>
            </div>
          )}

          <Image
            src="/images/athena3.png"
            alt="Doctor illustration"
            width={255}
            height={280}
            className="h-auto w-[190px] md:w-[230px]"
          />
        </div>

        <div className="flex flex-col w-full max-w-[412px] ml-auto px-4 md:pl-12 font-inter items-center text-center">

          <div className="w-16 md:w-18 mb-6 font-inter">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={62}
              height={60}
              className="h-auto w-full"
            />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-2 font-inter">
            Cadastro Concluído!
          </h2>
          <p className="text-[1.3125rem] text-white mt-3 mb-8 font-inter">
            Seu cadastro foi realizado com sucesso. Bem-vindo à plataforma!
          </p>

          <div className="w-full mb-4 font-inter">
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 w-7 h-7">
                <Image
                  src="/images/email.svg"
                  alt="Email"
                  width={20}
                  height={20}
                  className="w-full h-full"
                />
              </div>
              <input
                type="email"
                placeholder="E-mail cadastrado"
                className="w-full h-11 pl-12 pr-4 rounded-xl bg-transparent border border-[#2b3640] text-sm text-white placeholder:text-white focus:outline-none ring-2 ring-blue-600 font-bold font-inter"
                disabled
              />
            </div>
          </div>

          <div className="w-full mb-7 font-inter">
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 w-7 h-7">
                <Image
                  src="/images/password.svg"
                  alt="Senha"
                  width={20}
                  height={20}
                  className="w-full h-full"
                />
              </div>
              <input
                type="password"
                placeholder="Senha cadastrada"
                className="w-full h-11 pl-12 pr-11 rounded-xl bg-transparent border border-[#2b3640] text-sm text-white placeholder:text-white focus:outline-none ring-2 ring-blue-600 font-bold font-inter"
                disabled
              />
            </div>
          </div>

          <button
            onClick={handleClose}
            className="w-full h-11 rounded-[1.5rem] bg-blue-600 text-white font-bold 
                       transition-all duration-300 ease-out font-inter
                       hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30
                       active:scale-[0.98] active:bg-blue-800 mb-4"
          >
            Acessar Plataforma
          </button>

          <div className="flex items-center justify-center w-full my-3 font-inter">
            <div className="flex-grow h-[0.5px] bg-white/20"></div>
            <span className="px-4 text-[16px] md:text-base text-white font-inter">Ou</span>
            <div className="flex-grow h-[0.5px] bg-white/20"></div>
          </div>

          <div className="flex gap-4 w-full">
            <button
              onClick={handleOpenModal1}
              className="flex-1 h-11 rounded-[1.5rem] font-bold border border-[#2b3640] text-white 
                         transition-all duration-300 ease-in-out font-inter
                         hover:bg-gray-800/30 hover:ring-blue-500 hover:border-blue-400
                         hover:shadow-[0_0_15px_-3px_rgba(37,99,235,0.3)]
                         active:scale-[0.98] active:duration-100
                         ring-2 ring-blue-600"
            >
              Voltar ao Login
            </button>
            
            <button
              onClick={handleOpenModal2}
              className="flex-1 h-11 rounded-[1.5rem] font-bold border border-[#2b3640] text-white 
                         transition-all duration-300 ease-in-out font-inter
                         hover:bg-gray-800/30 hover:ring-blue-500 hover:border-blue-400
                         hover:shadow-[0_0_15px_-3px_rgba(37,99,235,0.3)]
                         active:scale-[0.98] active:duration-100
                         ring-2 ring-blue-600"
            >
              Voltar ao Cadastro
            </button>
          </div>
        </div>

        <button
          className="absolute top-4 right-4 w-13 h-13 rounded-full text-white hover:bg-white/5 flex items-center justify-center z-50 font-inter"
          aria-label="Fechar"
          onClick={handleClose}
        >
          <Image
            src="/images/fechar.svg"
            alt="Fechar"
            width={40}
            height={32}
          />
        </button>
      </div>
    </div>
  );
}