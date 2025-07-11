import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

function DialogAddData() {
    return (
        <Dialog>
            <DialogTrigger className="h-10 bg-blue-600 hover:bg-blue-700 text-sm rounded-[8px] py-2 px-12 text-white font-medium cursor-pointer">
                TAMBAH DATA
            </DialogTrigger>
            <DialogContent className="sm:max-w-[1063px]">
                <DialogHeader>
                    <DialogTitle>Tambah Data Mesin</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-4 py-4">
                    <div className="flex items-center gap-2 w-full">
                        <span className="font-inter font-medium text-base text-text-secondary w-1/3">Nama Mesin</span>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Pilih Nama Mesin" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Mesin</SelectLabel>
                                    <SelectItem value="apple">AC90</SelectItem>
                                    <SelectItem value="banana">AC90</SelectItem>
                                    <SelectItem value="blueberry">AC90</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex items-center gap-3 w-full border border-gray-200 rounded-md">
                        <span className="font-normal text-base text-text-secondary w-1/6 md:w-1/5 pl-3">Baru:</span>
                        <Input id="namaMesinBaru" className="flex-1 text-sm rounded-l-none" />
                    </div>
                    <div className="flex items-center gap-2 w-full">
                        <span className="font-inter font-medium text-base text-text-secondary w-1/3">No. Mesin</span>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Pilih No. Mesin" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>No. Mesin</SelectLabel>
                                    <SelectItem value="apple">SUPERVISOR</SelectItem>
                                    <SelectItem value="banana">LINE LEADER</SelectItem>
                                    <SelectItem value="blueberry">TEKNISI</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex items-center gap-3 w-full border border-gray-200 rounded-md">
                        <span className="font-normal text-base text-text-secondary w-1/6 md:w-1/5 pl-3">Baru:</span>
                        <Input id="namaMesinBaru" className="flex-1 text-sm rounded-l-none" />
                    </div>
                    <div className="flex items-center gap-2 w-full">
                        <span className="font-inter font-medium text-base text-text-secondary w-1/3">Lokasi</span>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Pilih Lokasi" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Lokasi</SelectLabel>
                                    <SelectItem value="apple">SUPERVISOR</SelectItem>
                                    <SelectItem value="banana">LINE LEADER</SelectItem>
                                    <SelectItem value="blueberry">TEKNISI</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex items-center gap-3 w-full border border-gray-200 rounded-md">
                        <span className="font-normal text-base text-text-secondary w-1/6 md:w-1/5 pl-3">Baru:</span>
                        <Input id="namaMesinBaru" className="flex-1 text-sm rounded-l-none" />
                    </div>
                    <div className="flex items-center gap-2 w-full">
                        <span className="font-inter font-medium text-base text-text-secondary w-1/3">Carline</span>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Pilih Carline" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Carline</SelectLabel>
                                    <SelectItem value="apple">SUPERVISOR</SelectItem>
                                    <SelectItem value="banana">LINE LEADER</SelectItem>
                                    <SelectItem value="blueberry">TEKNISI</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex items-center gap-3 w-full border border-gray-200 rounded-md">
                        <span className="font-normal text-base text-text-secondary w-1/6 md:w-1/5 pl-3">Baru:</span>
                        <Input id="namaMesinBaru" className="flex-1 text-sm rounded-l-none" />
                    </div>
                </div>
                <DialogFooter className='flex items-end justify-end w-full'>
                    <Button type="submit" className='w-1/4 border-main text-main' variant="outline">Cancel</Button>
                    <Button type="submit" className='w-1/4 bg-main' >Tambah</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>

    )
}

export default DialogAddData