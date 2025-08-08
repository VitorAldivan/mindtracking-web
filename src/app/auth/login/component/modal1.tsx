import React from 'react';

interface ModalProps {
  onClose: () => void;
}

export default function Modal1({ onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="relative bg-[#111827] text-white w-full max-w-3xl mx-4 md:mx-auto rounded-xl flex shadow-lg overflow-hidden">
        
        {/* Conteúdo do Modal */}
        <div className="w-full md:w-2/3 p-8 space-y-6">
          {/* Botão fechar */}
          <button
            className="absolute top-4 right-4 text-white text-xl"
            onClick={onClose}
          >
            &times;
          </button>

          {/* Logo/Cérebro */}
          <div className="flex justify-center">
            <img src="/assets/Logo.svg" alt="Logo" className="w-16 h-16" />
          </div>

          {/* Título e subtítulo */}
          <div className="text-center">
            <h2 className="text-2xl font-bold">Bem-vindo de volta</h2>
            <p className="text-sm text-gray-300 mt-1">
              Seu bem-estar importa todos os dias
            </p>
          </div>

          {/* Formulário */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm mb-1" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-500 focus:outline-none focus:border-blue-500"
                placeholder="Email"
              />
            </div>

            <div>
              <label className="block text-sm mb-1" htmlFor="senha">Senha</label>
              <div className="relative">
                <input
                  id="senha"
                  type="password"
                  className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-500 focus:outline-none focus:border-blue-500"
                  placeholder="Senha"
                />
                <img
                  src="/assets/eye-icon.png"
                  alt="Mostrar senha"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
                />
              </div>
              <div className="text-right mt-1">
                <a href="#" className="text-sm text-blue-400 hover:underline">
                  Esqueceu sua senha?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
            >
              Entrar
            </button>

            {/* Separador */}
            <div className="flex items-center justify-center gap-2">
              <span className="text-gray-400 text-sm">Ou</span>
            </div>

            <button
              type="button"
              className="w-full border border-blue-400 text-blue-400 py-2 rounded-md hover:bg-blue-500 hover:text-white transition"
            >
              Ainda não tem uma conta?
            </button>
          </form>
        </div>

        {/* Imagem do personagem */}
        <div className="hidden md:block w-1/3 relative">
          <img
            src="/assets/muie.png"
            alt="Personagem"
            className="absolute bottom-0 right-0 w-40 h-auto"
          />
        </div>
      </div>
    </div>
  );
}
