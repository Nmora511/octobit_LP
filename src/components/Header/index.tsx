"use client"
import { useEffect, useState } from "react";
import logo_horizontal_preto from "../../../public/assets/Logo_OCTOBIT_Logo_Preto_VERTICAL.png";
import logo_horizontal_branco from "../../../public/assets/Logo_OCTOBIT_nome_Branco_HORIZONTAL.png";
import Image from "next/image";

export default function Header(){
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    const handleScroll = (() => {
      const scrolled = window.scrollY > 1;
      setIsScrolled(scrolled);
    });

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return(
    <header className="z-[100] fixed w-[100%] h-32 opacity-1 bg-[var(--black)] border-b-[1px] border-[var(--white)] flex items-center text-[var(--white)]">
        <div className={`w-96 bg-[var(--white)] translate-x-[21%] border-2 border-[var(--black)] h-60 ml-48 flex justify-center rounded-b-[5rem] items-center duration-[75ms] ease-in-out transition-all ${isScrolled ? "opacity-1" : "opacity-0 translate-y-[-15rem]"}`} >
          <Image className="w-auto h-44 translate-y-[1rem]" alt="logo" src={logo_horizontal_preto}/>
        </div>
        <div className="flex justify-around absolute items-center w-full">
          <div className={`w-96 flex justify-center items-center duration-[50ms] ease-in-out transition-all ${isScrolled ? "translate-y-[10rem] opacity-0" : "opacity-1"}`} >
            <Image className="w-auto h-26" alt="logo" src={logo_horizontal_branco}/>
          </div>
          <div className="">
            <a href="/" className="text-[1.5rem] mx-4 cursor-pointer transition-all duration-[250ms] font-bold hover:text-[var(--purple)]">Home</a>
            <a href="octobit_LP/sobre" className="text-[1.5rem] mx-4 cursor-pointer transition-all duration-[250ms] font-bold hover:text-[var(--purple)]">Sobre</a>
            <a href="octobit_LP/membros" className="text-[1.5rem] mx-4 cursor-pointer transition-all duration-[250ms] font-bold hover:text-[var(--purple)]">Membros</a>
            <a href="octobit_LP/projetos" className="text-[1.5rem] mx-4 cursor-pointer transition-all duration-[250ms] font-bold hover:text-[var(--purple)]">Projetos</a>
            <a href="octobit_LP/contato" className="text-[1.5rem] mx-4 cursor-pointer transition-all duration-[250ms] font-bold hover:text-[var(--purple)]">Contato</a>
          </div>
        </div>
    </header>
  )
}