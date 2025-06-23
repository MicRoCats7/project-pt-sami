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
            <DialogContent className="sm:max-w-[672px]">
                <DialogHeader>
                    <DialogTitle>Tambah Data Problem</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <span className="font-inter font-medium text-base text-text-secondary">Judul Kerusakan</span>
                        <Input id="name" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <span className="font-inter font-medium text-base text-text-secondary">Sub Judul</span>
                        <Input id="username" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <span className="font-inter font-medium text-base text-text-secondary">Uraian Deskripsi</span>
                        <Input id="username" className="col-span-3" />
                    </div>
                </div>
                <DialogFooter className='flex items-center justify-center w-full'>
                    <Button type="submit" className='w-1/2 border-main text-main' variant="outline">Cancel</Button>
                    <Button type="submit" className='w-1/2 bg-main' >Tambah</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>

    )
}

export default DialogAddData