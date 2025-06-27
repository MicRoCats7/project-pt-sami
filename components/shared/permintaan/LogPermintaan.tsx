import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowUpRight, Copy } from "lucide-react";
import Image from "next/image";
import React from "react";
import { TbFileSearch, TbFlag3Filled } from "react-icons/tb";

export const LogPermintaan = () => {
  return (
    <div className="flex items-center flex-col gap-2 w-[30%]">
      <Card className="w-full font-inter py-4">
        <CardContent className="w-full flex items-center justify-between px-3">
          <span className="text-sm font-medium text-text-main">
            Log Permintaan Hari ini
          </span>
          <TbFileSearch size={28} color="#3A57E8" />
        </CardContent>
      </Card>
      <ScrollArea className="h-[600px] w-full">
        {Array.from({ length: 20 }).map((_, index) => (
          <Card className="w-full font-inter my-2" key={index}>
            <CardContent className="flex flex-col items-center justify-center w-full px-4">
              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold text-text-main">
                    C.MAX CUTTER
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-text-secondary text-xs">
                      ID: #0001-04072025
                    </span>
                    <Copy
                      className="cursor-pointer"
                      color="#8A92A6"
                      size={16}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="border-2 border-blue-500 bg-white text-blue-500 w-10 h-10 flex items-center justify-center rounded-full text-xs font-medium">
                    UZI
                  </div>
                </div>
              </div>
              <div className="flex items-end justify-between w-full">
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/icon_overview/icon_permintaan.svg"
                    alt="Icon Permintaan"
                    width={27}
                    height={27}
                  />
                  <span className="text-sm font-medium text-text-main">
                    Belum Ditangani • 
                  </span>
                  <span className="text-xs font-medium text-main">
                    12 Menit yang Lalu
                  </span>
                </div>
                <Button className="mt-2 bg-main text-white hover:bg-primary/90">
                  Detail
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </ScrollArea>
    </div>
  );
};
