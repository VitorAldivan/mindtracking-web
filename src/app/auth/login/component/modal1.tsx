import { useState } from "react";
import Image from "next/image";

type LoginModalProps = {
  onClose?: () => void; 
  onOpenModal2?: () => void; // Prop para abrir o modal2
};

export default function LoginModal({ onClose, onOpenModal2 }: LoginModalProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  const handleOpenModal2 = () => {
    setIsOpen(false);
    if (onClose) onClose();
    if (onOpenModal2) onOpenModal2();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 font-inter">
      <div className="h-170 relative flex w-[min(980px,92%)] max-w-[980px] rounded-[12px] bg-slate-800 border border-[#1f2937] shadow-[0_20px_60px_rgba(2,6,23,0.6)] p-8 md:p-12 overflow-visible font-inter">
        <div className="flex flex-col items-center w-full max-w-[412px] mx-auto px-4 md:px-0 font-inter">
          <div className="w-16 md:w-18 mb-6 font-inter">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={62}
              height={60}
              className="h-auto w-full mx-auto"
            />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight text-center mb-2 font-inter">
            Bem-vindo de volta
          </h2>
          <p className="text-[1.3125rem] text-white mt-3 text-center mb-8 font-inter">
            Seu bem-estar importa todos os dias
          </p>

          {/* Campo Email */}
          <div className="w-full mb-7 font-inter">
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

          {/* Campo Senha */}
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

          {/* Esqueceu senha */}
          <div className="w-full text-right my-3 mb-5 font-inter">
            <button className="text-sm text-white hover:underline font-bold font-inter">
              Esqueceu sua senha?
            </button>
          </div>

          {/* Botão Entrar */}
          <button
            type="submit"
            className="w-full h-11 rounded-[1.5rem] bg-blue-600 text-white font-bold transition font-inter"
          >
            Entrar
          </button>

          {/* Divisor */}
          <div className="flex items-center justify-center w-full my-3 font-inter">
            <div className="flex-grow h-[0.5px] bg-white/20"></div>
            <span className="px-4 text-[16px] md:text-base text-white font-inter">Ou</span>
            <div className="flex-grow h-[0.5px] bg-white/20"></div>
          </div>

          {/* Botão para abrir modal2 */}
          <button
            onClick={handleOpenModal2}
            className="w-full h-11 rounded-[1.5rem] border border-[#2b3640] text-white hover:bg-gray-800/30 transition ring-2 ring-blue-600 font-inter"
          >
            Ainda não tem uma conta?
          </button>
        </div>

        {/* Ilustração */}
        <div className="hidden md:block absolute right-4 bottom-0 translate-y-[5%] translate-x-[-10%] pointer-events-none select-none font-inter">
          <Image
            src="/images/athena1.png"
            alt="Doctor illustration"
            width={255}
            height={280}
            className="h-auto w-[180px] md:w-[200px]"
          />
        </div>

        {/* Botão fechar */}
        <button
          className="absolute top-4 right-4 w-13 h-13 rounded-full text-white hover:bg-white/5 flex items-center justify-center z-50 font-inter"
          aria-label="Fechar"
          onClick={handleClose}
        >
          <Image src="/images/fechar.svg" alt="Fechar" width={40} height={32} />
        </button>
      </div>
    </div>
  );
}
