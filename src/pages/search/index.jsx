import Link from 'next/link'
import { useRouter } from 'next/router'
import  {AiOutlineSearch} from 'react-icons/ai'
import SearchDetails from '@/components/SearchBox'
import { useState } from 'react'

export default function Search(){
    const router= useRouter()
    const [search,setSearch] = useState("")


    return(
        <div className="h-screen bg-light-black  w-full  z-40 p-5 flex-col">
            <div>
                <button onClick={()=>router.back()} className="text-white text-right text-3xl absolute top-0 right-5">
                    Close
                </button>
            </div>

            {/* <div className  a="absolute top-32 left-5">
                <h3 className="text-white text-2xl">Search</h3>
                <span className="text-white">
                    Type keyword to Search
                </span>
            </div> */}
            <div className="w-full">
                <form action="" className="w-full relative">
                    <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} className="w-full text-white focus:border-red-500 outline-none caret-white h-16 text-4xl border-l-0 border-r-0 border-t-0 border-b-white border-b-2 bg-light-black" placeholder="Search"/>
                    <button className='absolute bottom-3 right-3'>
                        <AiOutlineSearch color='#fff' size={25}/>
                    </button>
                </form>
            </div>
            <SearchDetails setSearch={setSearch} search={search} movie/>
            
        </div>
    )
}