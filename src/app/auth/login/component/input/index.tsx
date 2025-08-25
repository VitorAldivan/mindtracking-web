'use client';

import { useState, useRef } from "react";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type InputProps = {
  placeholder: string;
  type?: string;
  iconSrc: string;
  hasTogglePassword?: boolean;
  value?: string | Date | null;
  onChange?: (date: Date | null) => void;
};

export default function InputField({
  placeholder,
  type = "text",
  iconSrc,
  hasTogglePassword = false,
  value,
  onChange
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const datePickerRef = useRef<DatePicker>(null);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleDateChange = (date: Date | null) => {
    if (onChange) {
      onChange(date);
    }
  };

  const inputType =
    hasTogglePassword && type === "password"
      ? (showPassword ? "text" : "password")
      : type;

  // Se for um campo de data, renderizamos o DatePicker
  if (type === "date") {
    return (
      <div className="w-full mb-4 font-inter">
        <div className="relative">
          {/* Ícone à esquerda - SEU ÍCONE SVG */}
          <div className="absolute left-3 top-1/2 -translate-y-1/2 w-7 h-7 z-10">
            <Image
              src={iconSrc}
              alt={placeholder}
              width={20}
              height={20}
              className="w-full h-full"
            />
          </div>

          {/* DatePicker personalizado com a mesma estética dos outros inputs */}
          <DatePicker
            ref={datePickerRef}
            selected={value instanceof Date ? value : null}
            onChange={handleDateChange}
            placeholderText={placeholder}
            className="w-full h-11 pl-12 pr-4 rounded-xl bg-transparent border border-[#2b3640] text-sm text-white placeholder:text-white focus:outline-none ring-2 ring-blue-600 font-bold font-inter"
            dateFormat="dd/MM/yyyy"
            showYearDropdown
            scrollableYearDropdown
            yearDropdownItemNumber={100}
            maxDate={new Date()}
            popperClassName="react-datepicker-popper"
            popperPlacement="bottom-start"
            wrapperClassName="w-full"
          />
        </div>
      </div>
    );
  }

  // Para outros tipos de input (text, email, password, etc.) - MANTIDO ORIGINAL
  return (
    <div className="w-full mb-4 font-inter">
      <div className="relative">
        {/* Ícone à esquerda */}
        <div className="absolute left-3 top-1/2 -translate-y-1/2 w-7 h-7">
          <Image
            src={iconSrc}
            alt={placeholder}
            width={20}
            height={20}
            className="w-full h-full"
          />
        </div>

        {/* Input */}
        <input
          type={inputType}
          placeholder={placeholder}
          className="w-full h-11 pl-12 pr-11 rounded-xl bg-transparent border border-[#2b3640] text-sm text-white placeholder:text-white focus:outline-none ring-2 ring-blue-600 font-bold font-inter"
        />

        {/* Botão de mostrar/ocultar senha */}
        {hasTogglePassword && type === "password" && (
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5"
            onClick={togglePasswordVisibility}
          >
            <Image
              src={showPassword ? "/images/eye.svg" : "/images/eye-off.svg"}
              alt={showPassword ? "Ocultar senha" : "Mostrar senha"}
              width={20}
              height={20}
              className="w-full h-full"
            />
          </button>
        )}
      </div>
    </div>
  );
}