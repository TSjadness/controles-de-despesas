import React from "react";

interface HeaderProps {
  saldo: number;
}

const Header: React.FC<HeaderProps> = ({ saldo }) => {
  return (
    <header className=" flex flex-col items-center justify-center p-8  w-full mx-auto  px-2 sm:px-6 lg:px-8 text-white bg-[#00002b]">
      <h1 className="text-3xl font-bold">Controle de Transações </h1>
      <h2 className="text-lg mt-2">Saldo Atual: R${saldo}</h2>
    </header>
  );
};

export default Header;
