'use client';

import React, { useState } from 'react';
import Modal1 from './auth/login/component/modal1';
import Modal2 from './auth/login/component/modal2';

export default function Page() {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4 p-10">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setShowModal1(true)}
      >
        Abrir Modal 1
      </button>

      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={() => setShowModal2(true)}
      >
        Abrir Modal 2
      </button>

      {showModal1 && <Modal1 onClose={() => setShowModal1(false)} />}
      {showModal2 && <Modal2 onClose={() => setShowModal2(false)} />}
    </div>
  );
}
