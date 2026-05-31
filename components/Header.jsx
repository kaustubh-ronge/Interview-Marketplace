import React from 'react'
import { Button } from './ui/button'
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <nav className='fixed top-0 inset-x-0 z-50 flex items-center justify-between px-10 py-3 border-b border-white/7 backdrop-blur-xl'>

            {/* logo  */}
            <Link href={'/'}>
                <Image src={'/logo.png'}
                    alt='Logo'
                    width={100}
                    height={100}
                    className='h-11 w-auto'
                />
            </Link>

            {/* Redirection Logic  */}


            {/* sign in  */}
            <div className="flex items-center gap-3">
                <Show when="signed-out">

                    <SignInButton>
                        <Button variant="ghost">Sign In</Button>
                    </SignInButton>
                    <SignUpButton>
                        <Button variant="gold">Get Started</Button>
                    </SignUpButton>
                </Show>
                <Show when="signed-in">
                    <UserButton />
                </Show>
            </div>

        </nav>
    )
}

export default Header