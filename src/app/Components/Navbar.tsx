import Link from "next/link";
import Menu from "@/app/Components/Menu";
import Image from "next/image";
import SearchBar from "@/app/Components/SearchBar";
import NavIcons from "@/app/Components/NavIcons";

const Navbar = () => {
    return (
        <div className='h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative'>
                {/* MOBILE NAVBAR */}
            <div className='h-full flex items-center justify-between md:hidden'>
                <Link href={'/'}>
                    <div className='text-2xl tracking-wide'>LAMA</div>
                </Link>
                <Menu/>
            </div>
            {/*bigger screen*/}
            <div className='hidden md:flex items-center justify-between gap-8 h-full'>
                {/*left*/}
                <div className='w-1/3'>
                    <Link href={'/'} className='flex items-center gap-3'>
                        <Image src={'/logo.png'} alt='' width={24} height={24} />
                        <div className='text-2xl tracking-wide'>LAMA</div>
                    </Link>
                </div>
                {/*right*/}
                <div className='w-2/3 flex items-center justify-between gap-8'>
                    <SearchBar />
                    <NavIcons />
                </div>
            </div>
        </div>
    );
};

export default Navbar;