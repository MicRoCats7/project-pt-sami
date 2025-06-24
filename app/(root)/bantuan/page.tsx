import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { IoIosWarning } from 'react-icons/io'
import { LuServerCrash } from "react-icons/lu";
import { GoGear } from "react-icons/go";
import { HiOutlineUserCircle } from "react-icons/hi2";

function BantuanDukungan() {
    return (
        <section className='font-inter'>
            <h1 className="text-2xl text-text-main font-bold font-inter">Bantuan / Dukungan</h1>
            <div className='flex items-center justify-center'>
                <div className='flex flex-col items-center justify-center mt-8 w-1/2 mx-auto'>
                    <h2 className='font-bold text-3xl'>Ada masalah? Butuh bantuan?</h2>
                    <p className='font-medium text-xl text-[#AAAAAA]'>Cari cara menyelesaikan masalah atau email team developer</p>
                    <div className='relative w-full mt-6'>
                        <Search className='absolute text-gray-400 top-1/2 left-3 -translate-y-1/2' />
                        <Input
                            type="text"
                            placeholder="Cara mendelete data didalam tabel..."
                            className="w-full bg-white pl-12 py-7"
                        />
                    </div>
                </div>
                <Card className="w-[23%] py-4 px-6">
                    <CardHeader className='items-center justify-center'>
                        <LuServerCrash size={75} color='3A57E8' />
                    </CardHeader>
                    <CardContent className="flex flex-col items-start justify-start gap-2 w-full px-3">
                        <h3 className="text-lg font-medium text-text-main">Server downtime</h3>
                        <p className='text-sm font-normal text-text-secondary'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </CardContent>
                    <CardFooter className='px-3'>
                        <h3 className="text-sm font-medium text-text-secondary">Frequently Asked Question</h3>
                    </CardFooter>
                </Card>
            </div>
            <div className='grid grid-cols-4 gap-10 mt-12 w-full'>
                <Card className="py-4 px-6">
                    <CardHeader className='items-center justify-center'>
                        <LuServerCrash size={75} color='3A57E8' />
                    </CardHeader>
                    <CardContent className="flex flex-col items-start justify-start gap-2 w-full px-3">
                        <h3 className="text-lg font-medium text-text-main">Server bermasalah</h3>
                        <p className='text-sm font-normal text-text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </CardContent>
                    <CardFooter className='px-3'>
                        <h3 className="text-sm font-medium text-text-secondary">Frequently Asked Question</h3>
                    </CardFooter>
                </Card>
                <Card className="py-4 px-6">
                    <CardHeader className='items-center justify-center'>
                        <IoIosWarning size={75} color='3A57E8' />
                    </CardHeader>
                    <CardContent className="flex flex-col items-start justify-start gap-2 w-full px-3">
                        <h3 className="text-lg font-medium text-text-main">Peringatan</h3>
                        <p className='text-sm font-normal text-text-secondary'>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                    </CardContent>
                    <CardFooter className='px-3'>
                        <h3 className="text-sm font-medium text-text-secondary">Frequently Asked Question</h3>
                    </CardFooter>
                </Card>
                <Card className="py-4 px-6">
                    <CardHeader className='items-center justify-center'>
                        <GoGear size={75} color='3A57E8' />
                    </CardHeader>
                    <CardContent className="flex flex-col items-start justify-start gap-2 w-full px-3">
                        <h3 className="text-lg font-medium text-text-main">Cara setting tema</h3>
                        <p className='text-sm font-normal text-text-secondary'>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                    </CardContent>
                    <CardFooter className='px-3'>
                        <h3 className="text-sm font-medium text-text-secondary">Frequently Asked Question</h3>
                    </CardFooter>
                </Card>
                <Card className="py-4 px-6">
                    <CardHeader className='items-center justify-center'>
                        <HiOutlineUserCircle size={75} color='3A57E8' />
                    </CardHeader>
                    <CardContent className="flex flex-col items-start justify-start gap-2 w-full px-3">
                        <h3 className="text-lg font-medium text-text-main">Cara edit akun</h3>
                        <p className='text-sm font-normal text-text-secondary'>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                    </CardContent>
                    <CardFooter className='px-3'>
                        <h3 className="text-sm font-medium text-text-secondary">Frequently Asked Question</h3>
                    </CardFooter>
                </Card>
            </div>
        </section>
    )
}

export default BantuanDukungan