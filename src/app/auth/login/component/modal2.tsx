import { useState, useEffect } from "react";
import Image from "next/image";

type SignupModalProps = {
  onClose?: () => void; 
  onOpenModal1?: () => void; // nova prop para abrir modal1
};

export default function SignupModal({ onClose, onOpenModal1 }: SignupModalProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [typedMessage, setTypedMessage] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullMessage = "Eu sou a Athena, sua assistente emocional. Estou aqui pra te ajudar a entender melhor seus sentimentos e serei sua parceira nessa jornada de autoconhecimento.Preciso te conhecer um pouco para te cadastrar nesta jornada";

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  const handleOpenModal1 = () => {
    setIsOpen(false);
    if (onClose) onClose();
    if (onOpenModal1) onOpenModal1();
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
                Bem-vindo à MindTracking!
              </h3>
              
              <p className="text-[14px] text-black md:text-[15px] font-medium leading-snug">
                {typedMessage}
              </p>
            </div>
          )}

          <Image
            src="/images/athena2.png"
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
            Vamos começar!
          </h2>
          <p className="text-[1.3125rem] text-white mt-3 mb-8 font-inter">
            Sua jornada rumo ao equilíbrio emocional começa aqui.
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
                placeholder="Email"
                className="w-full h-11 pl-12 pr-4 rounded-xl bg-transparent border border-[#2b3640] text-sm text-white placeholder:text-white focus:outline-none ring-2 ring-blue-600 font-bold font-inter"
              />
            </div>
          </div>

          <div className="w-full mb-4 font-inter">
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
                type={showPassword ? "text" : "password"}
                placeholder="Senha"
                className="w-full h-11 pl-12 pr-11 rounded-xl bg-transparent border border-[#2b3640] text-sm text-white placeholder:text-white focus:outline-none ring-2 ring-blue-600 font-bold font-inter"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5"
                onClick={togglePasswordVisibility}
              >
                <Image
                  src={showPassword ? "/images/eye-off.svg" : "/images/eye.svg"}
                  alt={showPassword ? "Ocultar senha" : "Mostrar senha"}
                  width={20}
                  height={20}
                  className="w-full h-full"
                />
              </button>
            </div>
          </div>

          <div className="w-full mb-7 font-inter">
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 w-7 h-7">
                <Image
                  src="/images/password.svg"
                  alt="Confirmar Senha"
                  width={20}
                  height={20}
                  className="w-full h-full"
                />
              </div>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirme sua senha"
                className="w-full h-11 pl-12 pr-11 rounded-xl bg-transparent border border-[#2b3640] text-sm text-white placeholder:text-white focus:outline-none ring-2 ring-blue-600 font-bold font-inter"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5"
                onClick={toggleConfirmPasswordVisibility}
              >
                <Image
                  src={showConfirmPassword ? "/images/eye-off.svg" : "/images/eye.svg"}
                  alt={showConfirmPassword ? "Ocultar senha" : "Mostrar senha"}
                  width={20}
                  height={20}
                  className="w-full h-full"
                />
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full h-11 rounded-[1.5rem] bg-blue-600 text-white font-bold transition font-inter"
          >
            Prosseguir para próxima etapa
          </button>

          <div className="flex items-center justify-center w-full my-3 font-inter">
            <div className="flex-grow h-[0.5px] bg-white/20"></div>
            <span className="px-4 text-[16px] md:text-base text-white font-inter">Ou</span>
            <div className="flex-grow h-[0.5px] bg-white/20"></div>
          </div>

          {/* Botão que abre modal1 */}
          <button
            onClick={handleOpenModal1}
            className="w-full h-11 rounded-[1.5rem] border border-[#2b3640] text-white hover:bg-gray-800/30 transition ring-2 ring-blue-600 font-inter"
          >
            Já tem uma conta?
          </button>
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
