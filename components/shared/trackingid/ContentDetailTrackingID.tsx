"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import StatusIndicator, {
  StatusType,
} from "@/components/shared/StatusIndicator";

type InfoProps = {
  label: string;
  value: React.ReactNode;
  note?: string;
};

function Info({ label, value, note }: InfoProps) {
  return (
    <div className="mb-2">
      <div className="text-sm text-muted-foreground font-medium">{label}</div>
      <div className="flex items-center space-x-2">
        <div className="text-base font-semibold">{value}</div>
        {note && <span className="text-xs text-muted-foreground">{note}</span>}
      </div>
      <Separator className="my-2" />
    </div>
  );
}

export default function ContentDetailTrackingID() {
  const [status, setStatus] = useState("Belum Ditangani");

  const handleCancel = () => {
    if (status === "Belum Ditangani") {
      const confirmCancel = window.confirm(
        "Apakah kamu yakin ingin membatalkan permintaan?"
      );
      if (confirmCancel) {
        // Ganti dengan logic pembatalan nyata seperti API call
        console.log("Permintaan dibatalkan");
        // Contoh ubah status (opsional)
        setStatus("Dibatalkan");
      }
    }
  };

  return (
    <div className="p-6 space-y-4 mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">C.Max Cutter</h1>
        <div className="space-x-2 flex items-center">
          <p>Hanya bisa dibatalkan jika status di </p>
          <Image
            src="/assets/icon_overview/icon_permintaan.svg"
            alt="Icon Permintaan"
            width={25}
            height={25}
          />
          <p>Belum Ditangani</p>
          <Button
            variant="destructive"
            onClick={handleCancel}
            disabled={status !== "Belum Ditangani"}
            className={`transition ${
              status === "Belum Ditangani"
                ? "cursor-pointer hover:bg-destructive/90"
                : "opacity-50 cursor-not-allowed"
            }`}
          >
            Batalkan Permintaan
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-6 grid grid-cols-2 gap-4">
          <div>
            <Info label="Kerusakan" value="C.Max Cutter" />
            <Info label="Prod NO" value="AC9PRA-14" />
            <Info label="Nama Mesin" value="C.Max Cutter" note="Autofill" />
            <Info label="No Mesin" value="AC95" note="Autofill" />
            <Info label="Lokasi" value="AC9PRA-14" note="Autofill" />
            <Info label="Carline" value="TOYOTA" note="Autofill" />
            <Info
              label="Prioritas"
              value={
                <span className="inline-flex items-center justify-center bg-[#FEBD01] text-white text-sm font-semibold rounded-full px-4 py-[1px] h-[27px] w-[97px]">
                  Sedang
                </span>
              }
            />
            <Info label="Waktu Permintaan" value="06:00" note="Autofill" />
            <Info
              label="Tanggal Permintaan"
              value="02 December 2024"
              note="Autofill"
            />
          </div>
          <div>
            <Info
              label="Status"
              value={<StatusIndicator status={status as StatusType} />}
            />

            <Info
              label="PIC"
              value={<span className="font-medium">UZI</span>}
              note="Shift A"
            />
            <Info label="Waktu Mulai" value="06:13" note="Autofill" />
            <Info label="Selesai" value="--:--" note="Menghitung..." />
            <Info
              label="TIME OF"
              value={<span className="text-muted-foreground">Menit</span>}
            />
            <Info label="Menunggu MTC" value="13" />
            <Info label="Repair" value="Menunggu..." />
            <Info label="Menunggu QA" value="Menunggu..." />
            <Info label="Menunggu Part" value="Menunggu..." />
            <Info
              label="Total Waktu Perbaikan"
              value={
                <span className="text-muted-foreground">Menghitung...</span>
              }
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button
          variant="outline"
          className="text-[#2F57EF] border-[#2F57EF] font-semibold rounded-b-sm px-6 py-2 hover:bg-[#2F57EF]/10 transition cursor-pointer"
        >
          EXPORT DATA
        </Button>
      </div>
    </div>
  );
}
