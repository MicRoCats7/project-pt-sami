import Profile from '@/components/shared/pengaturan/Profile'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'

function Pengaturan() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-2xl font-bold'>Settings</CardTitle>
                <CardDescription>
                    Manage your account settings and set e-mail preferences.
                </CardDescription>
                <Separator className='mt-6' />
            </CardHeader>
            <CardContent className='h-svh'>
                <Tabs defaultValue="profile" className="w-full flex flex-row gap-10">
                    <TabsList className="flex flex-col items-start w-[250px] h-full bg-transparent">
                        <TabsTrigger value="profile" className="w-full justify-start">Profile</TabsTrigger>
                        <TabsTrigger value="account" className="w-full justify-start">Account</TabsTrigger>
                        <TabsTrigger value="appearance" className="w-full justify-start">Appearance</TabsTrigger>
                        <TabsTrigger value="notification" className="w-full justify-start">Notification</TabsTrigger>
                        <TabsTrigger value="display" className="w-full justify-start">Display</TabsTrigger>
                    </TabsList>
                    <TabsContent value="profile">
                        <Profile />
                    </TabsContent>
                    <TabsContent value="account">Change your password here.</TabsContent>
                    <TabsContent value="appearance">Appearance</TabsContent>
                    <TabsContent value="notification">Notification</TabsContent>
                    <TabsContent value="display">Display</TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    )
}

export default Pengaturan