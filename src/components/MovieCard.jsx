import Link from "next/link"
import Image from "next/image"

export default function MovieCard(){
    return (
        <>
    <Link href={'/description'} >
      <div className='text-white max-w-movie-card h-80 grow'>
          <div className='h-5/6 flex '>
                <Image src="https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg" alt="Movie Name" className='' width={"176"} height={"100"} />
          </div>
          <div>
              <h2 className='text-xl font-bold'>IRON DOOR</h2>
              <div className='flex gap-x-3 items-center justify-between'>
                <div className='flex items-center gap-x-2 '>
                  <span>2021</span>
                  <span>+18</span>
                  <span className='font-bold'>HD</span>
                </div>
                  <span className='border border-red-500 px-1'>Movie</span>
              </div>
          </div>
          </div>
    </Link>
        </>
    )
}