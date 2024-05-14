"use client"
import Image from "next/image";
import logo_simbolo_Branco from "../../public/assets/Logo_OCTOBIT_Logo_Branco_SIMBOLO.png";
import frame from "../../public/assets/frame.png";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="w-[100%] h-[100%] pt-[12rem] justify-center items-center flex-col gap-10 flex">
        <Image src={frame} alt="binary" className="absolute w-full z-[-1] opacity-[0.15]"/>
        <Image className=" h-[25rem] w-auto" src={logo_simbolo_Branco} alt="logo" />
        <motion.p initial={{opacity: 0, y: -75}} animate={{opacity: 1, y: 0}} className="w-[70rem] font-bold text-[var(--white)] drop-shadow-xl text-center text-[4rem]">
          Desenvolvendo o Amanhã, Hoje!
        </motion.p>
        <motion.p initial={{opacity: 0, y: -75}} animate={{opacity: 1, y: 0}} className="w-[70rem] font-bold text-[var(--white)] drop-shadow-xl text-center text-[2rem]">
          Empresa Júnior - FFCLRP-USP
        </motion.p>
      </div>  
    </main>
  );
}
