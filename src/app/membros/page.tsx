"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import caio from "../../../public/assets/Caio.png";
import vitin from "../../../public/assets/Vitin.png";
import cadu from "../../../public/assets/Cadu.png";
import unb from "../../../public/assets/UnB.png";
import erick from "../../../public/assets/Erick.png";


export default function Membros(){
    return(
        <main className="pt-[8rem] text-center flex  flex-col justify-center items-center">
            <h1 className="text-[var(--white)] text-[5rem] font-bold m-4">Membros: </h1>
            <div className="grid-cols-5 grid gap-y-[1rem] gap-x-[7rem]">
                <motion.div initial={{opacity: 0, y: -75}} animate={{opacity: 1, y: 0}} whileHover={{scale: 1.1}} className="flex flex-col items-center justify-center">
                    <Image className="rounded-full border-[var(--white)] border-4 w-[12rem]" src={caio} alt="caio"/>
                    <h2 className="text-[var(--white)] text-[2rem] font-bold">Caio</h2>
                    <h2 className="text-[var(--white)] text-[1.2rem] font-bold">-Presidente-</h2>
                    <h2 className="text-[var(--white)] text-[1.2rem] font-bold">-Diretor Financeiro e <br/> Comercial-</h2>
                </motion.div>
                <div></div>
                <motion.div initial={{opacity: 0, y: -75}} animate={{opacity: 1, y: 0}} whileHover={{scale: 1.1}} className="flex flex-col items-center justify-center">
                    <Image className="rounded-full border-[var(--white)] border-4 w-[12rem]" src={vitin} alt="vitin"/>
                    <h2 className="text-[var(--white)] text-[2rem] font-bold">Vitin</h2>
                    <h2 className="text-[var(--white)] text-[1.2rem] font-bold">-Vice Presidente-</h2>
                </motion.div>
                <div></div>
                <motion.div  initial={{opacity: 0, y: -75}} animate={{opacity: 1, y: 0}}whileHover={{scale: 1.1}} className="flex flex-col items-center justify-center">
                    <Image className="rounded-full border-[var(--white)] border-4 w-[12rem]" src={cadu} alt="cadu"/>
                    <h2 className="text-[var(--white)] text-[2rem] font-bold">Cadu</h2>
                    <h2 className="text-[var(--white)] text-[1.2rem] font-bold">-Diretor de RH-</h2>
                </motion.div>
                <motion.div initial={{opacity: 0, y: -75}} animate={{opacity: 1, y: 0}} whileHover={{scale: 1.1}} className="flex flex-col items-center justify-center col-start-2">
                    <Image className="rounded-full border-[var(--white)] border-4 w-[12rem]" src={unb} alt="unb"/>
                    <h2 className="text-[var(--white)] text-[2rem] font-bold">UnB</h2>
                    <h2 className="text-[var(--white)] text-[1.2rem] font-bold">-Diretor de Projetos-</h2>
                </motion.div>
                <motion.div initial={{opacity: 0, y: -75}} animate={{opacity: 1, y: 0}} whileHover={{scale: 1.1}} className="flex flex-col items-center justify-center col-start-4">
                    <Image className="rounded-full border-[var(--white)] border-4 w-[12rem]" src={erick} alt="erick"/>
                    <h2 className="text-[var(--white)] text-[2rem] font-bold">Erick</h2>
                    <h2 className="text-[var(--white)] text-[1.2rem] font-bold">-Diretor de Marketing-</h2>
                </motion.div>
            </div>
        </main>
    )
}