"use client"
import Image from "next/image";
import caio from "@/../public/assets/Caio.png";
import vitin from "@/../public/assets/Vitin.png";
import cadu from "@/../public/assets/Cadu.png";
import unb from "@/../public/assets/UnB.png";
import erick from "@/../public/assets/Erick.png";
import abnt from "@/../public/assets/ABNT.png";
import ligeiro from "@/../public/assets/Ligeiro.png";
import mauricio from "@/../public/assets/Maurício.png";
import fsolar1 from "@/../public/assets/fsolar1.png";
import fsolar2 from "@/../public/assets/Fsolar2.png";
import fsolar3 from "@/../public/assets/Fsolar3.png";
import Ondulation from "@/components/Ondulation";
import { motion, useAnimation} from "framer-motion";
import { useEffect, useState } from "react";

export default function Projetos(){
  const [isScrolled1, setIsScrolled1] = useState<boolean>(false);
  const [isScrolled2, setIsScrolled2] = useState<boolean>(false);
  const mainControls = useAnimation();
  const mainControls2 = useAnimation();

  const handleScroll = (() => {
    const scrolled1 = window.scrollY > 100;
    const scrolled2 = window.scrollY > 970;
    setIsScrolled1(scrolled1);
    setIsScrolled2(scrolled2);
  });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  useEffect(() => {
    if(isScrolled1){
      mainControls.start("visible")
    }
    if(isScrolled2){
      mainControls2.start("visible")
    }
  }, [isScrolled1, isScrolled2]);

    return(
      <main className="pt-[8rem] text-center flex  flex-col justify-center items-center">
        <div className="h-[100vh]">
          <h1 className="text-[var(--white)] text-[5rem] font-bold m-10">Time de Projetos: </h1>
          <div className="grid grid-cols-4 gap-16">
            <div className="flex flex-col items-center justify-center">
                <Image className="rounded-full border-[var(--white)] border-4 w-[12rem]" src={caio} alt="caio"/>
                <h2 className="text-[var(--white)] text-[2rem] font-bold">Caio</h2>
            </div>
            <div className="flex flex-col items-center justify-center">
                <Image className="rounded-full border-[var(--white)] border-4 w-[12rem]" src={vitin} alt="vitin"/>
                <h2 className="text-[var(--white)] text-[2rem] font-bold">Vitin</h2>
            </div>
            <div className="flex flex-col items-center justify-center">
                <Image className="rounded-full border-[var(--white)] border-4 w-[12rem]" src={cadu} alt="cadu"/>
                <h2 className="text-[var(--white)] text-[2rem] font-bold">Cadu</h2>
            </div>
            <div className="flex flex-col items-center justify-center">
                <Image className="rounded-full border-[var(--white)] border-4 w-[12rem]" src={unb} alt="unb"/>
                <h2 className="text-[var(--white)] text-[2rem] font-bold">UnB</h2>
            </div>
            <div className="flex flex-col items-center justify-center">
                <Image className="rounded-full border-[var(--white)] border-4 w-[12rem]" src={erick} alt="erick"/>
                <h2 className="text-[var(--white)] text-[2rem] font-bold">Erick</h2>
            </div>
            <div className="flex flex-col items-center justify-center">
                <Image className="rounded-full border-[var(--white)] border-4 w-[12rem]" src={abnt} alt="caio"/>
                <h2 className="text-[var(--white)] text-[2rem] font-bold">ABNT</h2>
            </div>
            <div className="flex flex-col items-center justify-center">
                <Image className="rounded-full border-[var(--white)] border-4 w-[12rem]" src={ligeiro} alt="caio"/>
                <h2 className="text-[var(--white)] text-[2rem] font-bold">Ligeiro</h2>
            </div>
            <div className="flex flex-col items-center justify-center">
                <Image className="rounded-full border-[var(--white)] border-4 w-[12rem]" src={mauricio} alt="caio"/>
                <h2 className="text-[var(--white)] text-[2rem] font-bold">Maurício</h2>
            </div>
          </div>
        </div>
        <Ondulation height="60rem" color="var(--black)">
          <h2 className="text-[var(--white)] text-[5rem] font-bold m-5">Projetos:</h2>
          <motion.div
                variants={{
                    hidden: {opacity: 0, y: 75},
                    visible: {opacity: 1, y: 0}
                }}
                initial="hidden"
                animate={mainControls}
                transition={{duration: 0.5, delay: 0.25}}
                className="flex flex-col justify-center items-center w-[100vw] mt-[3rem]"
                >
                <h2 className="text-[var(--white)] mb-8 text-center font-bold text-[2.3rem]">
                    Fsolar
                </h2>
                <a target="_blank" rel="noopener noreferrer" href="https://dev.d1viwze5xdjx7s.amplifyapp.com/" className="mb-6 border rounded-full text-[var(--white)] text-[1.3rem] font-bold drop-shadow-xl w-[11rem] h-[3rem] hover:bg-[var(--darkpurple)] cursor-pointer flex justify-center items-center bg-[var(--purple)]">Acesse Agora</a>
                <Image className="w-[40%] m-4" src={fsolar1} alt="fsolar"/>
                <Image className="w-[40%] m-4" src={fsolar2} alt="fsolar"/>
                <Image className="w-[40%] m-4 mb-16" src={fsolar3} alt="fsolar"/>
            </motion.div>
        </Ondulation>
      </main>
    )
}