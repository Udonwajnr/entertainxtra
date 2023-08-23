import Link from "next/link"
export default function MovieSearchCard({uuid,image,title,year,video_quality}){
    return(
        <Link href={`/movies/details/${uuid}`} >
      <div className='text-white  flex '>
          <div className='flex w-20'>
                <img src={image} alt="Movie Name" className=' h-full' />
          </div>
          <div className="flex justify-center flex-col">
              <h2 className='text-xs font-bold lg:text-xs'>{title?.length>25?title.slice(0,21)+'...':title }</h2>
              <div className='flex gap-x-3 items-center justify-between mt-1'>
                <div className='flex items-center gap-x-2 '>
                  <span className="lg:text-xs text-sm">{year}</span>
                  {/* <span className="lg:text-xs text-sm">+18</span> */}
                  <span className='font-bold lg:text-xs text-sm'>{video_quality}</span>
                </div>
                  <span className=' text-xs px-1  lg:text-xs'>Movie</span>
              </div>
          </div>
          </div>
    </Link>
    )
}