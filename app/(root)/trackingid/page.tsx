"use client";

import React, { useState } from "react";
import { CircleAlert } from "lucide-react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function TrackingId() {
  const [otp, setOtp] = useState("");
  const router = useRouter();

  const handleCari = () => {
    if (!/^\d{10}$/.test(otp)) {
      alert("Tracking ID harus terdiri dari 10 angka.");
      return;
    }
    // Lakukan proses pencarian di sini
    alert("Tracking ID valid: " + otp);
    router.push(`/trackingid/${otp}`);
  };

  return (
    <>
      <div className="mb-4 flex items-center justify-between flex-wrap">
        <h1 className="text-2xl text-text-main font-bold font-inter">
          Tracking ID
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <div className="flex flex-col justify-center items-center gap-4 mt-10">
          <h1 className="text-5xl font-bold">ID Status Tracker</h1>
          <p className="text-[16px] text-main flex gap-2.5">
            Silahkan masukkan ID yang ingin dilacak
            <span>
              <CircleAlert className="text-gray-500" />
            </span>
          </p>
          <InputOTP
            maxLength={10}
            pattern="\d*"
            value={otp}
            onChange={(value) => setOtp(value)}
          >
            <InputOTPGroup>
              <InputOTPSlot
                className="text-[35px] w-[50px] h-[50px] border"
                index={0}
              />
              <InputOTPSlot
                className="text-[35px] w-[50px] h-[50px] border"
                index={1}
              />
              <InputOTPSlot
                className="text-[35px] w-[50px] h-[50px] border"
                index={2}
              />
              <InputOTPSlot
                className="text-[35px] w-[50px] h-[50px] border"
                index={3}
              />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot
                className="text-[35px] w-[50px] h-[50px] border"
                index={4}
              />
              <InputOTPSlot
                className="text-[35px] w-[50px] h-[50px] border"
                index={5}
              />
              <InputOTPSlot
                className="text-[35px] w-[50px] h-[50px] border"
                index={6}
              />
              <InputOTPSlot
                className="text-[35px] w-[50px] h-[50px] border"
                index={7}
              />
              <InputOTPSlot
                className="text-[35px] w-[50px] h-[50px] border"
                index={8}
              />
              <InputOTPSlot
                className="text-[35px] w-[50px] h-[50px] border"
                index={9}
              />
            </InputOTPGroup>
          </InputOTP>

          <Button className="w-full bg-main" onClick={handleCari}>
            Cari
          </Button>
        </div>
      </div>
    </>
  );
}

export default TrackingId;
