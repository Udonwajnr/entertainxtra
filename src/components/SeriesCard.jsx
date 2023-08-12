import Link from "next/link"
export default function SeriesCard({title,year,video_quality,image,uuid}){
    return(
        <>
    <Link href={'/'}>
      <div className='text-white max-w-[160px]'>
          <div className='flex '>
                <img src={image} alt="Series Name" className='w-full h-full' />
          </div>
          <div>
              <h2 className='text-sm font-bold lg:text-xs'>{title?.length>25?title.slice(0,23)+'...':title } </h2>
              <div className='flex gap-x-3 items-center justify-between'>
                <div className='flex items-center justify-start gap-x-3 mt-1'>
                  {/* <span className="lg:text-xs text-sm">S1:E2</span> */}
                  {/* <span className="lg:text-xs text-sm">:</span> */}
                  {/* <span className="lg:text-xs text-sm">E1</span> */}
                  <span className="font-bold lg:text-xs text-sm">{video_quality}</span>
                </div>
                  <span className='border px-1 text-sm lg:text-xs'>Series</span>
              </div>
          </div>
          </div>
    </Link>
        </>
    )
}