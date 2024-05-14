"use client"
import Image from "next/image";
import instagram from "@/../public/assets/Instagram.svg";
import linkedin from "@/../public/assets/linkedin.svg";
import frame from "../../../public/assets/frame.png";
import { motion } from "framer-motion";

export default function Contato(){
    return(
        <main className="pt-[16rem] text-center flex  flex-col justify-center items-center">
            <Image src={frame} alt="binary" className="absolute w-full z-[-1] opacity-[0.15]"/>
            <h1 className="text-[var(--white)] text-[4rem] font-bold m-16">
                Fale Conosco através de: 
            </h1>
            <span className="w-[70rem] h-[0.5rem] rounded-full bg-[var(--white)]"/>
            <div className="flex gap-48">
                <motion.div initial={{opacity: 0, y: -75}} animate={{opacity: 1, y: 0}} className="flex-col">
                    <h1 className="text-[var(--white)] text-[3rem] font-bold m-10">Instagram</h1>
                    <div className="flex items-center justify-center gap-8 mb-16">
                        <Image className="w-[5rem]" alt="instagram" src={instagram}/>
                        <a href="https://www.instagram.com/octobitjr" className="text-[var(--white)] font-bold text-[2rem]">@octobitjr</a>
                    </div>
                </motion.div>
                <motion.div initial={{opacity: 0, y: -75}} animate={{opacity: 1, y: 0}} className="flex-col">
                    <h1 className="text-[var(--white)] text-[3rem] font-bold m-10">LinkedIn</h1>
                    <div className="flex items-center justify-center gap-8">
                        <Image className="w-[5rem]" alt="linkedin" src={linkedin}/>
                        <a href="https://www.linkedin.com/company/octobit-empresa-j%C3%BAnior-usp/" className="text-[var(--white)] font-bold text-[2rem]"> OctoBit Empresa Júnior USP </a>
                    </div>
                </motion.div>
            </div>
        </main>
    )
}