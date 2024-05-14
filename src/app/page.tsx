import Image from "next/image";
import logo_simbolo_Branco from "../../public/assets/Logo_OCTOBIT_Logo_Branco_SIMBOLO.png";
import coding from "../../public/assets/coding-background.jpg";
import frame from "../../public/assets/frame.png";
import Ondulation from "@/components/Ondulation";

export default function Home() {
  return (
    <main>
      <div className="w-[100%] h-[100vh] justify-center items-center flex-col gap-10 flex">
        <Image src={frame} alt="binary" className="absolute w-full z-[-1] opacity-[0.15]"/>
        <Image className=" h-[25rem] w-auto" src={logo_simbolo_Branco} alt="logo" />
        <p className="w-[70rem] font-bold text-[var(--white)] drop-shadow-xl text-center text-[4rem]">
          Desenvolvendo o Amanhã, Hoje!
        </p>
      </div>
      <Ondulation height="40rem" color="var(--white)">
        <div></div>
      </Ondulation>
      <div className="w-full h-[40rem] overflow-hidden">
        <Image className="blur-sm w-full" src={coding} alt="coding"/>
      </div>
    </main>
  );
}
