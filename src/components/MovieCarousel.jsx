import Link from "next/link"
import {FaPlay} from 'react-icons/fa'
import Slider from "react-slick"
import {BiTime,BiDownload,BiCameraMovie} from 'react-icons/bi'
import Image from "next/image";

export default function MovieCarousel(){
     const settings = {
        arrows:false,
    // className: "center",
    //   centerMode: true,
    //   className: "slider variable-width",
      dots: true,
      fade:true,
      infinite: true,
      slidesToShow:1,
      slidesToScroll:1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 5000,
    };

    return (
 <div className='overflow-hidden'>
        <Slider {...settings}>
         <div className='relative'>
                <div className='h-screen relative z-10 flex items-center'>
                    <div className='hero-img absolute w-full h-screen -z-10'>
                        <img src="https://images.unsplash.com/photo-1598501479146-ef2b41258663?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt="" className=' w-full h-screen object-cover'/> 
                    </div>
                    <div className='text-white max-w-xl px-8 lg:px-2'>
                        <span className='bg-yellow-500 text-2xl font-bold p-1 rounded'>New</span>
                        <h1 className='text-7xl font-bold mt-5 lg:text-2xl'>StarWars</h1>
                        <div className='text-white grid grid-cols-3  gap-x-2 mt-5 max-w-[150px]'>
                            <span className="lg:text-xs text-sm text-center">2021</span>
                            <span className='border rounded text-sm lg:text-xs text-center'>+18</span>
                            <span className="lg:text-xs text-sm text-center">2h 6m</span>
                        </div>
                        <p className='mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, reprehenderit at architecto ducimus harum neque recusandae itaque eaque totam sapiente expedita voluptates ipsam ipsum ad doloremque fuga dicta enim. Tempore!</p>
                        <div className='grid grid-cols-2 max-w-[300px] gap-x-4 lg:gap-x-10 mt-5'>
                            <Link href={'/'} className='py-2 px-3 flex rounded-md bg-red gap-x-2 justify-center items-center text-xl md:text-sm'>
                            {/* <FaPlay size={25}/> */}
                             Play Now
                             </Link>
                            <Link href={'/'} className=' py-2 px-3 flex rounded-md bg-red gap-x-2 justify-center items-center text-xl bg md:text-sm' >
                            {/* <BiCameraMovie size={25}/> */}
                             Trailer
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative'>
                <div className='h-screen relative z-10 flex items-center'>
                    <div className='hero-img absolute w-full h-screen -z-10'>
                        <img src="https://c4.wallpaperflare.com/wallpaper/381/863/742/star-wars-star-wars-the-last-jedi-lightsaber-rey-from-star-wars-wallpaper-preview.jpg" alt="" className=' w-full h-screen object-cover'/> 
                    </div>
                    <div className='text-white max-w-xl px-8 lg:px-2'>
                        <span className='bg-yellow-500 text-2xl font-bold p-1 rounded'>New</span>
                        <h1 className='text-7xl font-bold mt-5 lg:text-2xl'>StarWars</h1>
                        <div className='text-white flex justify-start items-center  gap-x-3 mt-5'>
                            <span className="lg:text-xs text-sm">2021</span>
                            <span className='border rounded text-sm lg:text-xs px-1'>+18</span>
                            <span className="lg:text-xs text-sm">2h 6m</span>
                        </div>
                        <p className='mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, reprehenderit at architecto ducimus harum neque recusandae itaque eaque totam sapiente expedita voluptates ipsam ipsum ad doloremque fuga dicta enim. Tempore!</p>
                        <div className='grid grid-cols-2 max-w-[300px] gap-x-4 lg:gap-x-10 mt-5'>
                            <Link href={'/'} className='py-2 px-3 flex rounded-md bg-red gap-x-2 justify-center items-center text-xl md:text-sm'>
                            {/* <FaPlay size={25}/> */}
                             Play Now
                             </Link>
                            <Link href={'/'} className=' py-2 px-3 flex rounded-md bg-red gap-x-2 justify-center items-center text-xl md:text-sm'>
                            {/* <BiCameraMovie size={25}/> */}
                             Trailer
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative'>
                <div className='h-screen relative z-10 flex items-center'>
                    <div className='hero-img absolute w-full h-screen -z-10'>
                        <img src="https://e0.pxfuel.com/wallpapers/837/406/desktop-wallpaper-luxury-mansion-exotic-houses.jpg" alt="" className='w-full h-screen object-cover'/> 
                    </div>
                       <div className='text-white max-w-xl px-8 lg:px-2'>
                        <span className='bg-yellow-500 text-2xl font-bold p-1 rounded'>New</span>
                        <h1 className='text-7xl font-bold mt-5 lg:text-2xl'>StarWars</h1>
                        <div className='text-white grid grid-cols-3  gap-x-2 mt-5 max-w-[150px]'>
                            <span className="lg:text-xs text-sm text-center">2021</span>
                            <span className='border rounded text-sm lg:text-xs text-center'>+18</span>
                            <span className="lg:text-xs text-sm text-center">2h 6m</span>
                        </div>
                        <p className='mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, reprehenderit at architecto ducimus harum neque recusandae itaque eaque totam sapiente expedita voluptates ipsam ipsum ad doloremque fuga dicta enim. Tempore!</p>
                        <div className='grid grid-cols-2 max-w-[300px] gap-x-4 lg:gap-x-10 mt-5'>
                            <Link href={'/'} className='py-2 px-3 flex rounded-md bg-red gap-x-2 justify-center items-center text-xl md:text-sm'>
                            {/* <FaPlay size={25}/> */}
                             Play Now
                             </Link>
                            <Link href={'/'} className=' py-2 px-3 flex rounded-md bg-red gap-x-2 justify-center items-center text-xl md:text-sm' >
                            {/* <BiCameraMovie size={25}/> */}
                             Trailer
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Slider>
    </div>
    )
}