"use client"

import {useState} from "react";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className="">
            <Image
                src="/menu.png"
                alt=""
                height={28}
                width={28}
                className='cursor-pointer'
                onClick={() => setOpen((prev) => !prev)}
            />

            {
                open && (
                    <div className='absolute bg-black text-white left-0 top-20 w-full h-[100vh-80px] flex flex-col
                        items-center gap-8 text-xl z-10'>
                        {/* eslint-disable-next-line react/jsx-no-undef */}
                        <Link href={'/'} >Home</Link>
                        <Link href={'/'} >Shop</Link>
                        <Link href={'/'} >Deals</Link>
                        <Link href={'/'} >About</Link>
                        <Link href={'/'} >Contact</Link>
                        <Link href={'/'} >Logout</Link>
                        <Link href={'/'} >Cart(1)</Link>
                    </div>
                )
            }
        </div>
    );
};

export default Menu;