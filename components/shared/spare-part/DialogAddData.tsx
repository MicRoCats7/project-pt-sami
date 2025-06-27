"use client";

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function DialogAddData() {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          onClick={() => setOpen(true)}
          className="h-10 bg-blue-600 hover:bg-blue-700 text-sm rounded-[8px] py-2 px-12 text-white font-medium cursor-pointer"
        >
          TAMBAH DATA
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[1063px]">
        <DialogHeader>
          <DialogTitle>Tambah Data Spare Part</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-4 py-4">
          {/* Row 1 */}
          <div className="flex items-center gap-2 w-full">
            <span className="font-inter font-medium text-base text-text-secondary w-1/3">Location</span>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Pilih Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Location</SelectLabel>
                  <SelectItem value="apple">AC90</SelectItem>
                  <SelectItem value="banana">AC91</SelectItem>
                  <SelectItem value="blueberry">AC92</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-3 w-full border border-gray-200 rounded-md">
            <span className="font-normal text-base text-text-secondary w-1/6 md:w-1/5 pl-3">Baru:</span>
            <Input className="flex-1 text-sm rounded-l-none" />
          </div>

          {/* Row 2 */}
          <div className="flex items-center gap-2 w-full">
            <span className="font-inter font-medium text-base text-text-secondary w-1/3">PART NAME</span>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Pilih PART NAME" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Part Time</SelectLabel>
                  <SelectItem value="supervisor">SUPERVISOR</SelectItem>
                  <SelectItem value="leader">LINE LEADER</SelectItem>
                  <SelectItem value="teknisi">TEKNISI</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-3 w-full border border-gray-200 rounded-md">
            <span className="font-normal text-base text-text-secondary w-1/6 md:w-1/5 pl-3">Baru:</span>
            <Input className="flex-1 text-sm rounded-l-none" />
          </div>

          {/* Row 3 */}
          <div className="flex items-center gap-2 w-full">
            <span className="font-inter font-medium text-base text-text-secondary w-1/3">PART NO</span>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Pilih PART NO" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Part No</SelectLabel>
                  <SelectItem value="supervisor">SUPERVISOR</SelectItem>
                  <SelectItem value="leader">LINE LEADER</SelectItem>
                  <SelectItem value="teknisi">TEKNISI</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-3 w-full border border-gray-200 rounded-md">
            <span className="font-normal text-base text-text-secondary w-1/6 md:w-1/5 pl-3">Baru:</span>
            <Input className="flex-1 text-sm rounded-l-none" />
          </div>

          {/* Row 4 */}
          <div className="flex items-center gap-2 w-full">
            <span className="font-inter font-medium text-base text-text-secondary w-1/3">PART NO SAMI</span>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Pilih PART NO SAMI" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Part No Sami</SelectLabel>
                  <SelectItem value="supervisor">SUPERVISOR</SelectItem>
                  <SelectItem value="leader">LINE LEADER</SelectItem>
                  <SelectItem value="teknisi">TEKNISI</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-3 w-full border border-gray-200 rounded-md">
            <span className="font-normal text-base text-text-secondary w-1/6 md:w-1/5 pl-3">Baru:</span>
            <Input className="flex-1 text-sm rounded-l-none" />
          </div>

          {/* Row 5 */}
          <div className="flex items-center gap-2 w-full">
            <span className="font-inter font-medium text-base text-text-secondary w-1/3">Kategori</span>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Pilih Kategori" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Kategori</SelectLabel>
                  <SelectItem value="supervisor">SUPERVISOR</SelectItem>
                  <SelectItem value="leader">LINE LEADER</SelectItem>
                  <SelectItem value="teknisi">TEKNISI</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-3 w-full border border-gray-200 rounded-md">
            <span className="font-normal text-base text-text-secondary w-1/6 md:w-1/5 pl-3">Baru:</span>
            <Input className="flex-1 text-sm rounded-l-none" />
          </div>

          {/* Row 6 */}
          <div className="flex items-center gap-2 w-full">
            <span className="font-inter font-medium text-base text-text-secondary w-1/3">Spec. Mesin / Equipment</span>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Pilih Spec. Mesin / Equipment" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Spec. Mesin / Equipment</SelectLabel>
                  <SelectItem value="supervisor">SUPERVISOR</SelectItem>
                  <SelectItem value="leader">LINE LEADER</SelectItem>
                  <SelectItem value="teknisi">TEKNISI</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-3 w-full border border-gray-200 rounded-md">
            <span className="font-normal text-base text-text-secondary w-1/6 md:w-1/5 pl-3">Baru:</span>
            <Input className="flex-1 text-sm rounded-l-none" />
          </div>

          {/* Row 7 */}
          <div className="flex items-center gap-2 w-full">
            <span className="font-inter font-medium text-base text-text-secondary w-1/3">Nama Mesin / Equipment</span>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Pilih Nama Mesin / Equipment" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Nama Mesin / Equipment</SelectLabel>
                  <SelectItem value="supervisor">SUPERVISOR</SelectItem>
                  <SelectItem value="leader">LINE LEADER</SelectItem>
                  <SelectItem value="teknisi">TEKNISI</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-3 w-full border border-gray-200 rounded-md">
            <span className="font-normal text-base text-text-secondary w-1/6 md:w-1/5 pl-3">Baru:</span>
            <Input className="flex-1 text-sm rounded-l-none" />
          </div>
        </div>

        <DialogFooter className="flex items-end justify-end w-full gap-4">
          <Button
            variant="outline"
            className="w-1/4 border-main text-main"
            onClick={() => setOpen(false)} // Tutup dialog
          >
            Cancel
          </Button>
          <Button type="submit" className="w-1/4 bg-main text-white">
            Tambah
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DialogAddData;
