import Link from "next/link"

export default function SeasonalSearchCard({title,image,year,video_quality ,uuid}){
    return (
        <>
        <Link  href={`/series/episodes/${uuid}`}>
          <div className='text-white flex'>
              <div className='flex w-20'>
                    <img src={image} alt="Series Name" className='w-full h-full' />
              </div>
              <div className="flex justify-center flex-col">
                  <h2 className='text-xm font-bold lg:text-xs'>{title?.length>25?title.slice(0,21)+'...':title }</h2>
                  <div className='flex gap-x-3 items-center justify-between mt-1'>
                    <div className='flex items-center gap-x-2 '>
                      <span className="lg:text-xs text-sm">{year}</span>
                      {/* <span className="lg:text-xs text-sm">+18</span> */}
                      <span className='font-bold lg:text-xs text-sm'>{video_quality}</span>
                    </div>
                      {/* <span className='border px-1 text-sm lg:text-xs'>Seasonal</span> */}
                  </div>
              </div>
              </div>
        </Link>
        </>
    )
}