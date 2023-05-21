import Link from "next/link"
import Image from "next/image"

export default function MovieCard(){
    return (
        <>
    <Link href={'/description'} >
      <div className='text-white max-w-xs grow'>
          <div className='h-5/6 flex '>
                <img src="https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg" alt="Movie Name" className='w-full' />
          </div>
          <div>
              <h2 className='text-xl font-bold lg:text-sm'>IRON DOOR</h2>
              <div className='flex gap-x-3 items-center justify-between'>
                <div className='flex items-center gap-x-2 '>
                  <span className="lg:text-xs text-sm">2021</span>
                  <span className="lg:text-xs text-sm">+18</span>
                  <span className='font-bold lg:text-xs text-sm'>HD</span>
                </div>
                  <span className='border px-1 text-sm lg:text-xs'>Movie</span>
              </div>
          </div>
          </div>
    </Link>
        </>
    )
}