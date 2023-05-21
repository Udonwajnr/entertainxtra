import Link from "next/link"
export default function SeriesCard(){
    return(
        <>
    <Link href={'/description'} to='/movie/titl'>
      <div className='text-white max-w-xs grow'>
          <div className='h-5/6 flex '>
                <img src="https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg" alt="Movie Name" className='w-full w-50' />
          </div>
          <div>
              <h2 className='text-xl font-bold'>IRON DOOR</h2>
              <div className='flex gap-x-3 items-center justify-between'>
                <div className='flex items-center gap-x-2 '>
                  <span className="lg:text-xs text-sm">S1</span>
                  <span className="lg:text-xs text-sm">:</span>
                  <span className="lg:text-xs text-sm">E1</span>
                  <span className="lg:text-xs text-sm font-bold">HD</span>
                </div>
                  <span className='border px-1 text-sm lg:text-xs'>Series</span>
              </div>
          </div>
          </div>
    </Link>
        </>
    )
}