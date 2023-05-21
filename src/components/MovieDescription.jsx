
import {BiCameraMovie} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {BiTime,BiDownload} from 'react-icons/bi'
import {GoGlobe} from 'react-icons/go'
import {FaShareAlt} from 'react-icons/fa'
import RelatedMovies from './RelatedMovies'
import Link from 'next/link'

export default function MovieDescription(){
    return(
         <div className=''>
          <div className='flex items-center text-white px-8   py-5 mt-10 lg:flex-col lg:px-2'>
           {/* comming back */}
            <div className='w-2/12 lg:w-full ' >
              <img src="https://excellencetheme.com/templates/avastream/images/play-page/01.jpg" alt=""  className=''/>
              <div className='flex justify-between mt-7 font-bold text-gray-400'>
                <span className="lg:text-xs text-sm">1080p</span>
                <span className="lg:text-xs text-sm">HD</span>
                <span className="lg:text-xs text-sm">7.1</span>
              </div>  
            </div>

            <div className='w-10/12 px-10 lg:px-2 lg:w-full lg:mt-5'>
              <h1 className='text-5xl font-bold lg:text-center'>THE DARK KNIGHT RISES</h1>
              {/* comeback here */}
              <div className='flex items-center justify-between lg:justify-between mt-8 gap-x-5 text-gray-400'>
                <span className='flex items-center text-xl lg:text-xs gap-x-2'>
                  <AiOutlineUser size={25}/>
                  +18
                </span>
                <span className='flex items-center text-xl lg:text-xs gap-x-2'>
                  <BiTime size={25}/>
                  2hr 45min
                </span>
                <span className='flex items-center text-xl lg:text-xs gap-x-2'>
                  <GoGlobe size={25}/>
                   United States
                </span>
              </div>
              <article className='mt-8 text-sm'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit adipisci dolorem iure libero voluptates ullam sapiente ab labore laborum facere iusto id consequuntur dolores doloribus, quis, maiores tempora, fugit ex natus neque atque. Nobis iusto, impedit veritatis atque, laboriosam adipisci rem numquam odit aliquid eos eius. Explicabo nesciunt soluta facere deleniti, reiciendis modi incidunt quidem repudiandae doloribus sit? Placeat, illum.
              </article>

              <div className='mt-5 flex gap-x-3 '>
                  <div className='w-3/12 lg:w-6/12'>
                    <h3 className='font-bold text-2xl lg:text-base'>Director</h3>
                    <span className='lg:text-xs'>Christopher Nolan</span>
                  </div>
                  
                  <div className='w-3/12 lg:w-6/12'>
                    <h3 className='font-bold text-2xl lg:text-base'>Cast</h3>
                    <span className='lg:text-xs'>Christian Bale, Michael Cain, Gary Oldman, Anne Hathway, Tom Hardy, Marion Cotillard</span>
                  </div>

              </div>

        {/* change it to the cloud player */}
              <div className='grid grid-cols-3 gap-x-3 lg:gap-x-1 mt-8 justify-between items-center'>
                <Link href={'/play'} className="bg-red justify-center px-7 lg:px-3 lg:rounded-md py-2.5 text-xl flex items-center gap-x-2 lg:text-xs"><BiDownload  className='w-7 h-7 lg:w-5 lg:h-5'/> Download</Link>
                {/* <button to={'/play'} className="bg-[#ff0000]">My List</button> */}
                <button to={'/play'} className="bg-red text-center justify-center px-7 lg:px-3 lg:rounded-md py-2.5 text-xl flex items-center gap-x-2 lg:text-xs"><BiCameraMovie className='w-7 h-7 lg:w-5 lg:h-5'/> Trailer</button>
                <button to={'/play'} className="bg-red justify-center px-7 lg:px-3 py-2.5 text-xl lg:rounded-md flex items-center gap-x-2 lg:text-xs"><FaShareAlt className='w-7 h-7 lg:w-5 lg:h-5'/> Share</button>
              </div>
        {/* change it to the cloud player */}
            </div>

        </div>
        <RelatedMovies/>
    </div>
    )
}