import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

export default function Profile() {
    return (
        <section>
            <h1 className='font-medium text-lg'>Profile</h1>
            <p className='font-normal text-sm text-text-secondary'>This is how others will see you on the site.</p>
            <Separator className='my-6' />
            <div className='flex flex-col gap-2 mb-8'>
                <Label htmlFor='username' className='text-sm font-medium'>Username</Label>
                <Input
                    id='username'
                    placeholder='Your name'
                    type='text'
                    className='w-5/6'
                />
                <p className='text-xs text-text-secondary'>
                    This is your public display name. It can be your real name or a pseudonym. You can only change this once every
                    30 days.
                </p>
            </div>
            <div className='flex flex-col gap-2 mb-8'>
                <Label htmlFor='email' className='text-sm font-medium'>Email</Label>
                <Select>
                    <SelectTrigger className="w-5/6">
                        <SelectValue placeholder="Select a verified email to display" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="example@gmail.com">example@gmail.com</SelectItem>
                        <SelectItem value="example2@gmail.com">example2@gmail.com</SelectItem>
                        <SelectItem value="example3@gmail.com">example3@gmail.com</SelectItem>
                    </SelectContent>
                </Select>
                <p className='text-xs text-text-secondary'>
                    You can manage verified email addresses in your email settings.
                </p>
            </div>
            <div className='flex flex-col gap-2'>
                <Label htmlFor='email' className='text-sm font-medium'>Bio</Label>
                <Textarea
                    id='bio'
                    placeholder='Tell us about yourself'
                    className='w-5/6 h-24 resize-none'
                    rows={4}
                />
                <p className='text-xs text-text-secondary'>
                    You can @mention other users and organizations to link to them.
                </p>
            </div>
            <Button className='mt-8 bg-main'>
                Update Profile
            </Button>
        </section>
    )
}
