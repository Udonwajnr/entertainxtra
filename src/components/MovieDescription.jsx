import {BiCameraMovie} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {BiTime,BiDownload} from 'react-icons/bi'
import {GoGlobe} from 'react-icons/go'
import {FaShareAlt} from 'react-icons/fa'
import RelatedMovies from './RelatedMovies'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function MovieDescription({title,image,year,video_quality,trailer_url,language,length_of_video,description,actors,subtitle_link,file_link,genre,movie,country}){
  const [video,setVideo] = useState(false)
  
  const playTrailer =()=>{
    setVideo(!video)
  }
  return(
        <div className=''>
          <div className='flex items-center text-white px-8 py-5 mt-10 lg:mt-0 md:flex-col lg:px-2'>
           {/* comming back */}
            <div className='w-2/12 lg:w-full ' >
              <img src={image} alt=""  className='w-full'/>
              {/* <div className='flex justify-between mt-7 font-bold text-gray-400'>
                <span className="lg:text-xs text-sm">1080p</span>
                <span className="lg:text-xs text-sm">{video_quality}</span>
                <span className="lg:text-xs text-sm">7.1</span>
              </div>   */}
            </div>

            <div className='w-10/12 px-10 lg:px-2 lg:w-full lg:mt-5'>
              <h1 className='text-5xl font-bold lg:text-center lg:text-xl'>{title}</h1>
              {/* comeback here */}
            
              <article className='mt-3 text-base'>
                {description}
              </article>

              <div className='mt-5 flex gap-x-3 lg:flex-col lg:gap-y- flex-wrap space-y-2'>
              <div className='w-3/12 lg:w-full'>
                    <h3 className='font-bold text-2xl lg:text-base'>Year</h3>
                    <span className='lg:text-base'>{year}</span>
                  </div>

                  <div className='w-3/12 lg:w-full'>
                    <h3 className='font-bold text-2xl lg:text-base'>Movie Time</h3>
                    <span className='lg:text-base'>{length_of_video}</span>
                  </div>
                  <div className='w-3/12 lg:w-full'>
                    <h3 className='font-bold text-2xl lg:text-base'>Country</h3>
                    <span className='lg:text-base'>{country || "United States"}</span>
                  </div>

                  <div className='w-3/12 lg:w-full'>
                    <h3 className='font-bold text-2xl lg:text-base'>Video Quality</h3>
                    <span className='lg:text-base'>{video_quality || 1080}</span>
                  </div>
                <div className='w-3/12 lg:w-full'>
                      <h3 className='font-bold text-2xl lg:text-base'>Genre</h3>
                      <span className='lg:text-base'>
                      {
                        genre?.map((actor,index)=>{
                          return(
                            <span key={index}>{actor.join(' , ')}</span>
                          )
                        })
                      }
                      </span>
                    </div>
                    
                  <div className='w-3/12 lg:w-full'>
                    <h3 className='font-bold text-2xl lg:text-base'>Director</h3>
                    <span className='lg:text-base'>Christopher Nolan</span>
                  </div>
                  
                  <div className='w-3/12 lg:w-full'>
                    <h3 className='font-bold text-2xl lg:text-base'>Cast</h3>
                    <span className='lg:text-base'>
                      
                    {
                      actors?.map((actor,index)=>{
                        return(
                          <span key={index}>{actor.join(',')}</span>
                        )
                      })
                    }
                    </span>
                  </div>
              </div>

        {/* change it to the cloud player */}
              <div className='grid grid-cols-3 gap-x-3 lg:gap-x-1 mt-8  lg:mt-5 justify-between items-center'>
                <Link href={file_link} className="bg-red justify-center px-7 lg:px-3 lg:rounded-md py-2.5 text-xl flex items-center gap-x-2 lg:text-xs"><BiDownload  className='w-7 h-7 lg:w-5 lg:h-5'/> Download</Link>
                {/* <button to={'/play'} className="bg-[#ff0000]">My List</button> */}

                <button className="bg-red text-center justify-center px-7 lg:px-3 lg:rounded-md py-2.5 text-xl flex items-center gap-x-2 lg:text-xs" onClick={playTrailer}><BiCameraMovie className='w-7 h-7 lg:w-5 lg:h-5'/> Trailer</button>
                <Link href={'/play'} className="bg-red justify-center px-7 lg:px-3 py-2.5 text-xl lg:rounded-md flex items-center gap-x-2 lg:text-xs"><FaShareAlt className='w-7 h-7 lg:w-5 lg:h-5'/> Share</Link>
              </div>
        {/* change it to the cloud player */}
            </div>
        </div>
        <RelatedMovies genre={genre} movie={movie}/>
        {
          video
           &&
          <div className='w-full h-screen bg-black fixed z-40 top-0 flex justify-center items-center'>
            <button className='text-lg absolute top-0 right-0 text-white' onClick={playTrailer}>
              <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m8 8l32 32M8 40L40 8"></path></svg>
            </button>
            <iframe width="560" height="315" src={trailer_url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        }
    </div>
    )
}