import Image from "next/image";
import logo_simbolo_PRETO from "../../public/assets/Logo_OCTOBIT_Logo_Preto_SIMBOLO.png";

export default function Home() {
  return (
    <main>
      
      <Image src={logo_simbolo_PRETO} alt="logo" />
      <p className="font-bold text-[2rem]">
        A OctoBit Jr. é uma empresa júnior fundada e composta majoritariamente por alunos
        do curso de Bacharelado em Ciência da Computação, da FFCLRP-USP. Ela
        realiza serviços sem fins lucrativos, proporcionando aos membros experiências
        profissionais desde que ingressam no curso, até a sua conclusão.
      </p>

    </main>
  );
}
