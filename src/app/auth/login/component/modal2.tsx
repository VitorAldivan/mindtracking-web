import React from 'react';

interface ModalProps {
  onClose: () => void;
}

export default function Modal2({ onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-bold mb-4">Modal 2</h2>
        <p>Conteúdo do Modal 2</p>
        <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded" onClick={onClose}>
          Fechar
        </button>
      </div>
    </div>
  );
}
