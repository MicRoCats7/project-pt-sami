import DialogAddData from '@/components/shared/users/DialogAddData'
import { TableUsers } from '@/components/shared/users/TableUsers'
import { Button } from '@/components/ui/button'
import React from 'react'

function UserData() {
    return (
        <section className='font-geist'>
            <div className='mb-4 flex items-center justify-between flex-wrap'>
                <h1 className="text-2xl text-text-main font-bold font-inter">Data User</h1>
                <div className="flex items-center gap-2 w-full md:w-auto">
                    <Button variant="outline" className="h-10 bg-white border-blue-600 text-blue-600 hover:bg-blue-50 text-sm">
                        EXPORT
                    </Button>
                    <DialogAddData />
                </div>
            </div>
            <TableUsers />
        </section>
    )
}

export default UserData