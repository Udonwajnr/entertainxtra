import Link from 'next/link'
import { useRouter } from 'next/router'
import  {AiOutlineSearch} from 'react-icons/ai'

export default function Search(){
    const router= useRouter()
    return(
        <div className="h-screen bg-light-black fixed w-full top-0 z-40 p-5 flex items-center justify-center">
            <div>
                <button onClick={()=>router.back()} className="text-white text-right text-3xl absolute top-0 right-5">
                    Close
                </button>
            </div>

            <div className="absolute top-32 left-5">
                <h3 className="text-white text-2xl">Search</h3>
                <span className="text-white">
                    Type keyword to Search
                </span>
            </div>
            <div className="w-full">
                <form action="" className="w-full relative">
                    <input type="text" className="w-full text-white focus:border-red-500 outline-none caret-white h-16 text-4xl border-l-0 border-r-0 border-t-0 border-b-white border-b-2 bg-light-black" placeholder="Search"/>
                    <button className='absolute bottom-3 right-3'>
                        <AiOutlineSearch color='#fff' size={25}/>
                    </button>
                </form>
            </div>
        </div>
    )
}