"use client";

import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import React from 'react'

export const CardPermintaan = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Card className="w-full font-inter py-4">
      <CardContent className="flex flex-col items-center justify-center gap-4 w-full px-3">
        <div className="flex items-center gap-2 w-full">
          <span className="font-inter font-medium text-base text-text-secondary mr-3.5">Kerusakan</span>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pilih Kerusakan" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Kerusakan</SelectLabel>
                <SelectItem value="apple">AC90</SelectItem>
                <SelectItem value="banana">AC90</SelectItem>
                <SelectItem value="blueberry">AC90</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <span className="font-inter font-medium text-base text-text-secondary mx-3">Atau</span>
          <Input
            className="w-full"
            placeholder="Tambahkan Kerusakan Baru..."
            type="text"
          />
        </div>
        <div className="flex items-center gap-10 w-full">
          <span className="font-inter font-medium text-base text-text-secondary">Prod NO</span>
          <Select>
            <SelectTrigger className="w-1/4">
              <SelectValue placeholder="Pilih Prod NO" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Kerusakan</SelectLabel>
                <SelectItem value="apple">AC90</SelectItem>
                <SelectItem value="banana">AC90</SelectItem>
                <SelectItem value="blueberry">AC90</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className='grid grid-cols-2 gap-5 w-full'>
          <div className='flex items-center w-full'>
            <span className="font-inter font-medium text-base text-text-secondary w-[35%]">Nama Mesin</span>
            <Input
              className="w-full bg-input/100"
              placeholder="Autofill"
              type="text"
              disabled
            />
          </div>
          <div className='flex items-center w-full'>
            <span className="font-inter font-medium text-base text-text-secondary w-[35%]">No Mesin</span>
            <Input
              className="w-full bg-input/100"
              placeholder="Autofill"
              type="text"
              disabled
            />
          </div>
          <div className='flex items-center w-full'>
            <span className="font-inter font-medium text-base text-text-secondary w-[35%]">Lokasi</span>
            <Input
              className="w-full bg-input/100"
              placeholder="Autofill"
              type="text"
              disabled
            />
          </div>
          <div className='flex items-center w-full'>
            <span className="font-inter font-medium text-base text-text-secondary w-[35%]">Carline</span>
            <Input
              className="w-full bg-input/100"
              placeholder="Autofill"
              type="text"
              disabled
            />
          </div>
        </div>
        <div className="flex items-center gap-10 w-full">
          <span className="font-inter font-medium text-base text-text-secondary">Catatan</span>
          <Input
            className="w-full"
            placeholder="Tambahkan Catatan (Opsional)"
            type="text"
          />
        </div>
        <div className="flex items-start gap-10 w-full">
          <span className="font-inter font-medium text-base text-text-secondary">Tanggal</span>
          <div className="pointer-events-none opacity-60">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-lg border"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
