"use client";

import Logo from '@/components/Logo';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { UserButton } from '@clerk/nextjs';
import { ZapIcon } from 'lucide-react';
import React, { ReactNode } from 'react';

function Layout({ children }: { children: ReactNode }) {

    return (
        <div className="flex flex-col min-h-screen min-w-full bg-background max-h-screen">
            <nav className="flex justify-between items-center border-b border-border h-[60px] px-4 py-2">
                    <div className="flex gap-4 items-center">
                        <ZapIcon/>
                        <Logo />
                    </div>
                    <div className="flex gap-4 items-center">
                        <ThemeSwitcher/>
                        <UserButton />
                    </div>
            </nav>
            <main className='flex w-full flex-grow'> {children} </main>
        </div>
    );
}

export default Layout;