import Link from "next/link"
import {AiFillHome} from 'react-icons/ai'
import {BiTv,BiMoviePlay} from 'react-icons/bi'
import {FaBars} from 'react-icons/fa'
import {AiOutlineClose,AiOutlineMail, AiOutlineSearch,AiOutlineUser} from 'react-icons/ai'


export default function Navbar({active, toggle, toggleSearchBar}){

    return (
        <header className="bg-black  w-full top-0 z-30 sticky">
            <nav className="flex justify-between items-center py-5 px-8 lg:px-2">
            <div className="cursor-pointer hidden lg:block" onClick={toggle}>
               {
                active?
                <AiOutlineClose color="#fff" className="w-7 h-7 lg:w-5 lg:h-5"/>
                :
                <FaBars color="#fff" className="w-7 h-7 lg:w-5 lg:h-5" />
               }
            </div>
                <div className="logo text-3xl text-white" >
                    <Link href={'/'} className="text-bold text-red">EntertainXtra</Link>
                </div>

                <div className="lg:hidden">
                    <ul className="flex gap-x-3 ">
                        <li><Link href={'/'} className="flex items-center gap-x-2 text-white hover:text-red duration-150">
                            <AiFillHome size= {25}/>
                            Home
                            </Link>
                        </li>
                        <li>
                            <Link href={'/movies'} className="flex items-center gap-x-2 text-white
                            hover:text-red duration-150
                            ">
                                <BiMoviePlay size={25}/>
                                Movies
                            </Link>
                            </li>
                        <li>
                            <Link href={'/series'} className="flex items-center gap-x-2 text-white hover:text-red duration-150">
                            <BiTv size={25}/>
                            TV Series
                            </Link>
                        </li>
                        
                        <li>
                            <Link href={'/contact'} className="flex items-center gap-x-2 text-white hover:text-red duration-150">
                            <AiOutlineMail size={25}/>
                            Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link href={'/search'} className="flex items-center gap-x-2 text-white hover:text-red duration-150">
                            <AiOutlineSearch size={25}/>
                            Search
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="lg:hidden">
                    <ul className="flex gap-x-3">
                        <li><Link href={'/register'} className="text-white hover:text-red duration-150">Register</Link></li>
                        <li><Link href={'/login'} className="text-white hover:text-red duration-150">Login</Link></li>
                    </ul>
                </div>

                <div className="hidden lg:block">
                    <Link href={'/login'} className="flex items-center gap-x-2 text-white
                            hover:text-red duration-150 text-lg cursor-pointer">
                        <AiOutlineUser className="w-7 h-7 lg:w-5 lg:h-5 "/>
                    </Link>
                </div>
            </nav>
        </header>
    )
}