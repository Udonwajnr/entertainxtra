import {BiCameraMovie} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {BiTime,BiDownload} from 'react-icons/bi'
import {GoGlobe} from 'react-icons/go'
import {FaShareAlt} from 'react-icons/fa'
import RelatedMovies from './RelatedMovies'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function SeasonalDetails({title,image,year,trailer_url,language,description,actors,genre,movie,country}){
    const [video,setVideo] = useState(false)
  
    const playTrailer =()=>{
      setVideo(!video)
    }

    return(
        <>
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

                  {/* <div className='w-3/12 lg:w-full'>
                    <h3 className='font-bold text-2xl lg:text-base'>Movie Time</h3>
                    <span className='lg:text-base'>{length_of_video}</span>
                  </div> */}
                  <div className='w-3/12 lg:w-full'>
                    <h3 className='font-bold text-2xl lg:text-base'>Country</h3>
                    <span className='lg:text-base'>{country || "United States"}</span>
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
        {/* change it to the cloud player */}
            </div>
        </div>
        </>
    )
}