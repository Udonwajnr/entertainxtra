import Link from "next/link"
import Image from "next/image"

export default function MovieCard({title,image,year,video_quality ,uuid}){
    return (
      <>
    <Link href={`/movies/details/${uuid}`} >
      <div className='text-white max-w-[200px]'>
          <div className='flex '>
                <img src={image} alt="Movie Name" className='w-full' />
          </div>
          <div>
              <h2 className='text- font-bold lg:text-sm'>{title?.length>25?title.slice(0,23)+'...':title }</h2>
              <div className='flex gap-x-3 items-center justify-between'>
                <div className='flex items-center gap-x-2 '>
                  <span className="lg:text-xs text-sm">{year}</span>
                  {/* <span className="lg:text-xs text-sm">+18</span> */}
                  <span className='font-bold lg:text-xs text-sm'>{video_quality}</span>
                </div>
                  <span className='border px-1 text-sm lg:text-xs'>Movie</span>
              </div>
          </div>
          </div>
    </Link>
        </>
    )
}