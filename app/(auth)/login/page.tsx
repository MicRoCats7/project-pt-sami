import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clock } from "lucide-react";
import Image from "next/image";
import React from "react";

function Login() {
  return (
    <>
      <div className="absolute left-0 top-[101px] font-inter">
        <Image
          src="/assets/icon-login/bg-clock.svg"
          alt="bg-clock"
          width={245.5}
          height={87}
          className="relative"
        />
        <div className="absolute left-6 top-0 w-full h-full flex items-center justify-start">
          <Clock color="#fff" className="w-9 h-9" />
          <div className="flex flex-col items-start justify-start ml-2 text-white">
            <span className="text-[22px] font-semibold">9/20/2025</span>
            <span className="text-[30px] font-semibold">9.49 PM</span>
          </div>
        </div>
      </div>
      <div className="max-w-[404px] mx-auto">
        <div className="flex flex-col w-full gap-6 items-center justify-center min-h-screen bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center">
          <Image
            src="/assets/icon-login/img-login.svg"
            alt="img-login"
            width={384}
            height={96}
          />
          <div className="flex flex-col items-start w-full">
            <span>NIK</span>
            <Input className="border-black" placeholder="000234"/>
          </div>
          <div className="flex flex-col items-start w-full">
            <span>Password</span>
            <Input className="border-black" placeholder="******"/>
          </div>
          <Button className="w-full rounded-[6px] bg-main">
            Login
          </Button>
          <Button className="w-full rounded-[6px] bg-main">
            Operator
          </Button>
          <p>Lupa Password? Contact Line Leader</p>
        </div>
      </div>
    </>
  );
}

export default Login;
