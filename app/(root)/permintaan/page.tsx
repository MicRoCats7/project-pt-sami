import { CardPermintaan } from '@/components/shared/permintaan/CardPermintaan'
import { LogPermintaan } from '@/components/shared/permintaan/LogPermintaan'
import { Button } from '@/components/ui/button'
import React from 'react'

function Permintaan() {
    return (
        <section className='font-geist'>
            <h1 className="text-2xl text-text-main font-bold mb-4 font-inter">Permintaan</h1>
            <div className='flex items-start gap-4'>
                <div className='flex items-end flex-col w-[70%]'>
                    <CardPermintaan />
                    <Button className='w-1/4 mt-4 py-7 bg-main text-white hover:bg-primary/90'>
                        Ajukan Permintaan
                    </Button>
                </div>
                <LogPermintaan />
            </div>
        </section>
    )
}

export default Permintaan