import Link from "next/link"
import {AiFillHome} from 'react-icons/ai'
import {BiTv,BiMoviePlay} from 'react-icons/bi'
export default function MobileNavbar({toggle}){
    return(
        <header className="  w-96 top-[75px] bg-black fixed z-30  h-screen hidden lg:block">
            <nav className="mt-5 px-4">
              <div>
                    <ul className="flex flex-col gap-y-3">
                        <li><Link href={'/'} className="flex items-center gap-x-2 text-white hover:text-red duration-150 text-lg">
                            <AiFillHome size={25}/>
                            Home
                            </Link>
                        </li>
                        <li>
                            <Link href={'/movies'} className="flex items-center gap-x-2 text-white
                            hover:text-red duration-150 text-lg
                            ">
                                <BiMoviePlay size={25}/>
                                Movies
                            </Link>
                            </li>
                        <li><Link href={'/series'} className="flex items-center gap-x-2 text-white hover:text-red duration-150 text-lg">
                            <BiTv size={25}/>
                            Series
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </header>
    )
}