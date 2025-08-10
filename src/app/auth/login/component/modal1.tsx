import { useState } from "react";
import Image from "next/image";

type LoginModalProps = {
  onClose?: () => void; 
};

export default function LoginModal({ onClose }: LoginModalProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  if (!isOpen) return null;


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      
      <div className="relative flex w-[min(980px,92%)] max-w-[980px] rounded-[12px] bg-slate-800 border border-[#1f2937] shadow-[0_20px_60px_rgba(2,6,23,0.6)] p-8 md:p-12 overflow-visible">

        <div className="flex flex-col items-center w-full max-w-[412px] mx-auto px-4 md:px-0">
      
          <div className="w-16 md:w-18 mb-6">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={62}
              height={60}
              className="h-auto w-full mx-auto"
            />
          </div>

  
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight text-center mb-2">
            Bem-vindo de volta
          </h2>
          <p className="text-[1.3125rem] text-white mt-3 text-center mb-8">
            Seu bem-estar importa todos os dias
          </p>

     
          <div className="w-full mb-7">
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
                className="w-full h-11 pl-12 pr-4 rounded-xl bg-transparent border border-[#2b3640] text-sm text-white placeholder:text-white focus:outline-none ring-2 ring-blue-600 font-bold"
              />
            </div>
          </div>

          
          <div className="w-full mb-4">
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
                className="w-full h-11 pl-12 pr-11 rounded-xl bg-transparent border border-[#2b3640] text-sm text-white placeholder:text-white focus:outline-none ring-2 ring-blue-600 font-bold"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5"
                onClick={togglePasswordVisibility}
              >
                <Image
                  src={showPassword ? "/images/eye.svg" : "/images/eye.svg"}
                  alt={showPassword ? "Ocultar senha" : "Mostrar senha"}
                  width={20}
                  height={20}
                  className="w-full h-full"
                />
              </button>
            </div>
          </div>

         
          <div className="w-full text-right my-3 mb-5">
            <button className="text-sm text-white hover:underline font-bold">
              Esqueceu sua senha?
            </button>
          </div>

         
          <button
            type="submit"
            className="w-full h-11 rounded-[1.5rem] bg-blue-600 text-white font-bold transition"
          >
            Entrar
          </button>

         
          <div className="flex items-center justify-center w-full my-3">
            <div className="flex-grow h-[0.5px] bg-white/20"></div>
            <span className="px-4 text-[16px] md:text-base text-white">Ou</span>
            <div className="flex-grow h-[0.5px] bg-white/20"></div>
          </div>

          
          <button className="w-full h-11 rounded-[1.5rem] border border-[#2b3640] text-white hover:bg-gray-800/30 transition ring-2 ring-blue-600">
            Ainda não tem uma conta?
          </button>
        </div>

        
        <div className="hidden md:block absolute right-4 bottom-0 translate-y-[5%] translate-x-[-10%] pointer-events-none select-none">
          <Image
            src="/images/athena1.png"
            alt="Doctor illustration"
            width={255}
            height={280}
            className="h-auto w-[180px] md:w-[200px]"
          />
        </div>

        <button
          className="absolute top-4 right-4 w-13 h-13 rounded-full text-white hover:bg-white/5 flex items-center justify-center z-50"
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
