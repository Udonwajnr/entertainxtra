import {BiCameraMovie} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {BiTime,BiDownload} from 'react-icons/bi'
import {GoGlobe} from 'react-icons/go'
import {FaShareAlt} from 'react-icons/fa'
import RelatedMovies from './RelatedMovies'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
export default function DetailsLoading({title,image,year,video_quality,trailer_url,language,length_of_video,description,actors,subtitle_link,file_link,genre,movie}){
    return (
    <div className=''>
        <div className='flex items-center text-white px-8   py-5 mt-10 lg:flex-col lg:px-2'>
         {/* comming back */}
          <div className='w-2/12 lg:w-full ' >
            <div role="status" className="space-y-8 animate-pulse ">
                <div className="flex items-center justify-center w-full h-80 bg-gray-300 rounded dark:bg-gray-700">
                </div>
                <div className="w-full">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-full"></div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-full"></div>
                </div>
                <span className="sr-only">Loading...</span>
            </div>  
          </div>

          <div className='w-10/12 px-10 lg:px-2 lg:w-full lg:mt-5'>
            <h1 className='text-5xl font-bold lg:text-center'></h1>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-full"></div>
           
            {/* comeback here */}
            <div className='flex items-center justify-between lg:justify-between mt-8 gap-x-5 text-gray-400'>
             <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-full"></div>
            </div>
            <article className='mt-8 text-base'>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-full"></div>
              
            </article>

            <div className=''>
              <div className=''>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-full"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-full"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-full"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-full"></div>
                </div>
            </div>

      {/* change it to the cloud player */}
            
      {/* change it to the cloud player */}
          </div>
      </div>
      <section className="py-5">
        <div className=' mt-8 px-10 lg:px-2 flex justify-around flex-wrap'>
            <div className="">
                <div role="status" className="space-y-8 animate-pulse  ">
                    <div className="flex items-center justify-center w-full h-60 max-w-[200px] bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                    </div>
                    <div className="w-full mt-2">
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    </div>
                </div> 
            </div>

            <div className="">
                <div role="status" className="space-y-8 animate-pulse">
                    <div className="flex items-center justify-center w-full h-60 max-w-[200px] bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                    </div>
                    <div className="w-full">
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    </div>
                    <span className="sr-only">Loading...</span>
                </div> 
            </div>
            <div className="">
                <div role="status" className="space-y-8 animate-pulse  ">
                    <div className="flex items-center justify-center w-full h-60 max-w-[200px] bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                    </div>
                    <div className="w-full">
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    </div>
                    <span className="sr-only">Loading...</span>
                </div> 
            </div>
            <div className="">
                <div role="status" className="space-y-8 animate-pulse ">
                    <div className="flex items-center justify-center w-full h-60 max-w-[200px] bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                    </div>
                    <div className="w-full">
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    </div>
                    <span className="sr-only">Loading...</span>
                </div> 
            </div>
            <div className="">
                <div role="status" className="space-y-8 animate-pulse m ">
                    <div className="flex items-center justify-center w-full h-60 max-w-[200px] bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                    </div>
                    <div className="w-full">
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    </div>
                    <span className="sr-only">Loading...</span>
                </div> 
            </div>
            <div className="">
                <div role="status" className="space-y-8 animate-pulse ">
                    <div className="flex items-center justify-center w-full h-60 max-w-[200px] bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                    </div>
                    <div className="w-full">
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    </div>
                    <span className="sr-only">Loading...</span>
                </div> 
            </div>
            <div className="">
                <div role="status" className="space-y-8 animate-pulse ">
                    <div className="flex items-center justify-center w-full h-60 max-w-[200px] bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                    </div>
                    <div className="w-full">
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    </div>
                    <span className="sr-only">Loading...</span>
                </div> 
            </div>
            <div className="">
                <div role="status" className="space-y-8 animate-pulse ">
                    <div className="flex items-center justify-center w-full h-60 max-w-[200px] bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                    </div>
                    <div className="w-full">
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    </div>
                    <span className="sr-only">Loading...</span>
                </div> 
            </div>
        </div>
    </section>
  </div>
    )
}