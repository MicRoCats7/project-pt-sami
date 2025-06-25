import React from "react";
import Image from "next/image";

export type StatusType =
  | "Belum Ditangani"
  | "Selesai"
  | "Sedang Proses"
  | "Terlambat"
  | "Dibatalkan";

const statusMap: Record<
  StatusType,
  { icon: string; textColor: string }
> = {
  "Belum Ditangani": {
    icon: "/assets/icon_overview/icon_permintaan.svg",
    textColor: "text-yellow-500",
  },
  Selesai: {
    icon: "/assets/icon_overview/icon_success.svg",
    textColor: "text-green-600",
  },
  "Sedang Proses": {
    icon: "/assets/icon_overview/icon_progress.svg",
    textColor: "text-blue-500",
  },
  Terlambat: {
    icon: "/assets/icon_overview/icon_terlambat.svg",
    textColor: "text-purple-600",
  },
  Dibatalkan: {
    icon: "/assets/icon_overview/icon_batal.svg",
    textColor: "text-red-600",
  },
};

export default function StatusIndicator({ status }: { status: StatusType }) {
  const { icon, textColor } = statusMap[status];

  return (
    <div className={`flex items-center space-x-2 font-semibold ${textColor}`}>
      <Image src={icon} alt={status} width={20} height={20} />
      <span>{status}</span>
    </div>
  );
}
