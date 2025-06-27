"use client";

import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Command,
  CommandInput,
  CommandItem,
  CommandGroup,
  CommandEmpty,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronDown, Check } from "lucide-react";
import React from "react";

const kerusakanOptions = [
  "Bellmouth Bawah Besar",
  "Bellmouth Bawah Kecil",
  "Bellmouth Atas Besar",
  "Bellmouth Atas Kecil",
  "Belt Conveyor",
  "Belt Conveyor 1",
  "Belt Conveyor 2",
  "Belt Conveyor 3",
  "Belt Conveyor 4",
  "Belt Conveyor 5",
  "Belt Conveyor 6",
  "Belt Conveyor 7",
  "Belt Conveyor 8",
  "Belt Conveyor 9",
  "Belt Conveyor 10",
  "Belt Conveyor 11",
  "Belt Conveyor 12",
  "Belt Conveyor 13",
  "Belt Conveyor 14",
  "Belt Conveyor 15",
  "Belt Conveyor 16",
  "Belt Conveyor 17",
  "Belt Conveyor 18",
  "Belt Conveyor 19",
];

const prodNoOptions = [
  "AC90",
  "AC91",
  "AC92",
  "AC93",
  "AC94",
  "AC95",
  "AC96",
  "AC97",
  "AC98",
  "AC99",
];

const SearchableSelect = ({
  options,
  placeholder,
  selected,
  setSelected,
  className,
}: {
  options: string[];
  placeholder: string;
  selected: string;
  setSelected: (val: string) => void;
  className?: string;
}) => {
  const [open, setOpen] = React.useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("justify-between", className)}
        >
          {selected || placeholder}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder={`Cari ${placeholder.toLowerCase()}...`} />
          <CommandEmpty>Tidak ditemukan</CommandEmpty>
          <CommandGroup>
            <CommandList className="max-h-[300px] overflow-y-auto">
              {options.map((option) => (
                <CommandItem
                  key={option}
                  value={option}
                  onSelect={(currentValue) => {
                    setSelected(currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selected === option ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {option}
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export const CardPermintaan = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [selectedKerusakan, setSelectedKerusakan] = React.useState("");
  const [selectedProdNo, setSelectedProdNo] = React.useState("");
  const [waktuPermintaan, setWaktuPermintaan] = React.useState("--:--:--");

  // Update jam setiap menit
  React.useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const jam = now.getHours().toString().padStart(2, "0");
      const menit = now.getMinutes().toString().padStart(2, "0");
      const detik = now.getSeconds().toString().padStart(2, "0");
      setWaktuPermintaan(`${jam}:${menit}:${detik}`);
    };

    updateTime(); // Jalankan sekali saat mount
    const interval = setInterval(updateTime, 1000); // Update tiap menit
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="w-full font-inter py-4">
      <CardContent className="flex flex-col items-center justify-center gap-4 w-full px-3">
        {/* KERUSAKAN */}
        <div className="flex items-center gap-2 w-full">
          <span className="font-inter font-medium text-base text-text-secondary mr-3.5">
            Kerusakan
          </span>
          <SearchableSelect
            options={kerusakanOptions}
            placeholder="Pilih Kerusakan"
            selected={selectedKerusakan}
            setSelected={setSelectedKerusakan}
            className="w-1/2"
          />
          <span className="font-inter font-medium text-base text-text-secondary mx-3">
            Atau
          </span>
          <Input
            className="w-full"
            placeholder="Tambahkan Kerusakan Baru..."
            type="text"
          />
        </div>
        <div className="flex items-center gap-10 w-full">
          <span className="font-inter font-medium text-base text-text-secondary">
            Prod NO
          </span>
          <SearchableSelect
            options={prodNoOptions}
            placeholder="Pilih Prod NO"
            selected={selectedProdNo}
            setSelected={setSelectedProdNo}
            className="w-1/4"
          />
        </div>
        <div className="grid grid-cols-2 gap-5 w-full">
          {["Nama Mesin", "No Mesin", "Lokasi", "Carline"].map((label) => (
            <div key={label} className="flex items-center w-full">
              <span className="font-inter font-medium text-base text-text-secondary w-[35%]">
                {label}
              </span>
              <Input
                className="w-full bg-input/100"
                placeholder="Autofill"
                type="text"
                disabled
              />
            </div>
          ))}
        </div>

        {/* CATATAN */}
        <div className="flex items-center gap-10 w-full">
          <span className="font-inter font-medium text-base text-text-secondary">
            Catatan
          </span>
          <Input
            className="w-full"
            placeholder="Tambahkan Catatan (Opsional)"
            type="text"
          />
        </div>
        <div className="flex items-start gap-10 w-full">
          <span className="font-inter font-medium text-base text-text-secondary">
            Tanggal
          </span>
          <div className="pointer-events-none opacity-60">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-lg border"
            />
          </div>
          <span className="italic text-sm text-muted-foreground">
            Autofill
          </span>
        </div>
        <div className="flex items-start gap-10 w-full">
          <span className="font-inter font-medium text-base text-text-secondary">
            Waktu Permintaan diajukan
          </span>
          <div className="flex items-center gap-2 w-full bg-input/100 border border-input rounded-md px-3 py-2 text-muted-foreground">
            <span className="tracking-widest text-lg font-mono">
              {waktuPermintaan}
            </span>
            <span className="italic text-sm text-muted-foreground">
              Autofill
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
