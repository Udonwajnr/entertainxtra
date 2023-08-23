import Link from "next/link"
export default function EpisodeSearchCard ({title,year,video_quality,image,uuid}){
    return(
        <Link href={`/episodes/details/${uuid}`}>
          <div className='text-white flex'>
              <div className='flex w-20'>
                    <img src={image} alt="Series Name" className=' h-full' />
              </div>
              <div  className="flex justify-center flex-col">
                  <h2 className='text-xs font-bold lg:text-xs'>{title?.length>25?title.slice(0,23)+'...':title } </h2>
                  <div className='flex gap-x-3 items-center justify-between'>
                    <div className='flex items-center justify-start gap-x-3 mt-1'>
                      <span className="font-bold lg:text-xs text-sm uppercase">{video_quality}</span>
                    </div>
                      <span className='text-xs px-1 lg:text-xs'>Series</span>
                  </div>
              </div>
              </div>
        </Link>
    )
}