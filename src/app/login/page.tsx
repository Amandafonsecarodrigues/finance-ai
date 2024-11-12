import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
//sfc

const LoginPage = () => {
  return (
    <div className="grid h-full grid-cols-2">
      {/* esquerda */}
      <div className="mx-auto flex h-full max-w-[550px] flex-col justify-center p-8">
        <Image
          src="/logoFinance.svg"
          width={27}
          height={26}
          alt="logo"
          className="mb-8"
        />

        <h1 className="mb-3 text-4xl font-bold">Bem-Vindo</h1>

        <p className="mb-8 text-muted-foreground">
          A Finance AI é uma plataforma de gestão financeira que utiliza IA para
          monitorar suas movimentações, e oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>

        <SignInButton>
          <Button variant="outline">
            <LogInIcon className="mr-2" />
            Fazer Login ou Criar Conta
          </Button>
        </SignInButton>
      </div>
      {/* direita */}

      <div className="relative h-full w-full">
        <Image src="/login.svg" alt="logo" fill className="object-cover" />
      </div>
    </div>
  );
};

export default LoginPage;
