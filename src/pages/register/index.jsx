import Link from "next/link"
export default function Register(){
    return(
        <main>
            <div className='h-screen flex justify-center items-center'>
                <div className=' w-[32rem] py-5 px-10  flex flex-col gap-y-3 signup shadow-2xl bg-light-black'>
                    <h1 className='text-center text-3xl text-white font-bold'> Create An Account </h1>
                    <form action="" className=' flex flex-col gap-y-4' >
                        <div className='flex flex-col gap-y-1'>
                            <label htmlFor=""  className='text-white'>Name</label>
                            <input type="text" required  className='py-2 px-2 focus:bg-[#fff] text-[#959595] bg-bodyBg border border-white outline-none focus:border-red-500' placeholder='John Doe'/>
                        </div>
                        
                        <div className='flex flex-col gap-y-1'>
                            <label htmlFor=""  className='text-white'>Email</label>
                            <input type="email" className='py-2 px-2 focus:bg-[#fff] text-[#959595] bg-bodyBg border border-white rounded outline-none focus:border-red-500' placeholder='johndoe@gmail.com'  required/>
                        </div>

                        <div className='flex flex-col gap-y-1'>
                            <label htmlFor="" className='text-white'>Password</label>
                            <input type="password" className='py-2 px-2 focus:bg-[#fff] text-[#959595] bg-bodyBg border border-white rounded outline-none  focus:border-red-500 text-[#959595]'  placeholder='Password' required/>
                        </div>
                    
                        <div className='flex flex-col gap-y-1'>
                            <label htmlFor="" className='text-white'>Password</label>
                            <input type="password" className='py-2 px-2 focus:bg-[#0f0d0d] text-[#959595] bg-bodyBg border border-white rounded outline-none focus:border-red-500 text-[#959595]'  placeholder='Password' required/>
                        </div>

                        <div className='flex justify-between items-center text-white'>
                            <div>
                                <input type="checkbox" value={'hello'} className="border-none p-2"/>
                                <label htmlFor="">Remember me</label>
                            </div>

                            <div>
                                <Link href="/">Forgot password?</Link>
                            </div>
                        </div>
                        <button type='submit' className='text-white rounded-md bg-red hover:bg-rose-700 py-2'>Submit</button>
                        
                        <small className='text-center text-white text-base'>Already registered ? <Link href={'/login'} className="text-red-500">Login</Link></small>
                    </form>
                </div>
            </div>
        </main>
    )
}