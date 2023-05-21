import Link from "next/link"
import {AiFillHome,AiOutlineUserAdd,AiOutlineLogin,AiOutlineMail, AiOutlineSearch} from 'react-icons/ai'
import {BiTv,BiMoviePlay} from 'react-icons/bi'
export default function MobileNavbar({toggle}){
    return(
        <header className="  w-96 top-[75px] bg-black fixed z-30  h-screen hidden lg:block">
            <nav className="mt-5 px-4">
              <div className="relative h-screen">
                    <ul className="grid gap-y-10">
                        <li><Link href={'/'} className="flex items-center gap-x-2 text-white hover:text-red duration-150 text-lg" onClick={toggle}>
                            <AiFillHome size={25}/>
                            Home
                            </Link>
                        </li>

                        <li>
                            <Link href={'/movies'} className="flex items-center gap-x-2 text-white
                            hover:text-red duration-150 text-lg
                            "
                            onClick={toggle}
                            >
                                <BiMoviePlay size={25}/>
                                Movies
                            </Link>
                        </li>

                        <li>
                            <Link href={'/series'} className="flex items-center gap-x-2 text-white hover:text-red duration-150 text-lg" onClick={toggle}>
                            <BiTv size={25}/>
                            Series
                            </Link>
                        </li>

                        <li>
                            <Link href={'/contact'} className="flex items-center gap-x-2 text-white hover:text-red duration-150" onClick={toggle}>
                            <AiOutlineMail size={25}/>
                            Contact Us
                            </Link>
                        </li>

                        <li>
                            <Link href={'/search'} className="flex items-center gap-x-2 text-white hover:text-red duration-150" onClick={toggle}>
                            <AiOutlineSearch size={25}/>
                            Search
                            </Link>
                        </li>

                        <li><Link href={'/register'} className="flex items-center gap-x-2 text-white 
                            hover:text-red duration-150 text-lg" onClick={toggle}>
                            <AiOutlineUserAdd size={25}/>
                            Register
                            </Link>
                        </li>
                        <li>
                            <Link href={'/login'} className="flex items-center gap-x-2 text-white
                            hover:text-red duration-150 text-lg" onClick={toggle}>
                                <AiOutlineLogin size={25}/>
                                Login
                            </Link>
                        </li>

                    </ul>
                </div>
            </nav>

        </header>
    )
}