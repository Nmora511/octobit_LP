"use client"
import Image from "next/image"
import logo_branco from "../../../public/assets/Logo_OCTOBIT_Logo_Branco_SIMBOLO.png";
import frame from "../../../public/assets/frame.png";
import { motion, useAnimation} from "framer-motion";
import Ondulation from "@/components/Ondulation";
import { useEffect, useState } from "react";

export default function Sobre(){
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
    <main className="pt-[3rem] text-center flex flex-col items-center">
        <div className="h-[100vh] flex w-full justify-center items-center">
            <Image src={frame} alt="binary" className="absolute w-full z-[-1] opacity-[0.15]"/>
            <Image className="h-[30rem] w-auto m-16" src={logo_branco} alt="logo"/>
            <span className="h-[30rem] w-[0.7rem] rounded-full bg-[var(--white)]"/>
            <motion.div initial={{opacity: 0, x: -75}} animate={{opacity: 1, x: 0}} className="w-[50%] m-16">
              <h2 className="text-[var(--white)] text-justify font-bold text-[2.6rem]">A OctoBit Jr. é uma empresa júnior fundada e composta majoritariamente por alunos
  do curso de Bacharelado em Ciência da Computação, da FFCLRP-USP. Ela
  realiza serviços sem fins lucrativos, proporcionando aos membros experiências
  profissionais desde que ingressam no curso, até a sua conclusão.</h2>
            </motion.div>
        </div>
        <Ondulation height="100%" color="var(--black)" >
            <motion.div
                variants={{
                    hidden: {opacity: 0, y: 75},
                    visible: {opacity: 1, y: 0}
                }}
                initial="hidden"
                animate={mainControls}
                transition={{duration: 0.5, delay: 0.25}}
                className="flex flex-col justify-center items-center mt-[8rem]"
                >
                <h2 className="text-[var(--white)] mb-8 text-center font-bold text-[2.3rem]">
                    Estão entre os objetivos da OctoBit Jr. :
                </h2>
                <ul className="text-[var(--black)] bg-[var(--white)] font-bold border-[var(--purple)] border-4 rounded-[2.5rem] text-[1.5rem] w-[40%] text-justify">
                    <li className="p-4">* A capacitação profissional de seus integrantes</li>
                    <li className="p-4">* Uma oportunidade dos membros entenderem como o mercado de trabalho de
    computação funciona</li>
                    <li className="p-4">* Resolver problemas encontrados no mercado de tecnologia, através
    das mentes inovadoras do curso</li>
                    <li className="p-4">* Contribuir com empresas de pequeno ou grande porte, microempreendedores ou
    qualquer entidade que necessite de uma solução tecnológica para um problema
    encontrado</li>
                </ul>
            </motion.div>
            <motion.div
                variants={{
                    hidden: {opacity: 0, y: 75},
                    visible: {opacity: 1, y: 0}
                }}
                initial="hidden"
                animate={mainControls2}
                transition={{duration: 0.5, delay: 0.25}}
                className="flex flex-col justify-center items-center m-[8rem]"
                >
              <div className="w-[45%]">
                <h2 className="text-[var(--white)] mb-8 text-justify font-bold text-[1.5rem]">
                    A OctoBit Jr. tentará desenvolver as habilidades de seus membros ao máximo e não 
                    será limitada no âmbito tecnológico.
                </h2> 
              </div>
              <h2 className="text-[var(--white)] mb-8 text-center font-bold text-[2.3rem]">
                  Assim, ela desenvolverá as seguintes competências:
                </h2>
              <ul className="text-[var(--black)] bg-[var(--white)] font-bold border-[var(--purple)] border-4 rounded-[2.5rem] text-[1.5rem] w-[40%] text-justify">
                  <li className="p-4">* Capacidade de gestão de uma equipe</li>   
                  <li className="p-4">* Lidar com problemas adversos da produção prática de um sistema</li>   
                  <li className="p-4">* Desenvolvimento de sistemas</li>   
                  <li className="p-4">* Trabalhar em um projeto em grupo</li>   
                  <li className="p-4">* Atendimento ao cliente</li>   
                  <li className="p-4">* Adaptar-se às novas tecnologias e inovações do mercado para criação de novas
  soluções</li>   
              </ul>
            </motion.div>
        </Ondulation>
    </main>
  )
}