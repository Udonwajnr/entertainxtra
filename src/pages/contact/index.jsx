export default function contract(){
    return(
        <main>
            <section className="h-screen flex justify-center items-center">
                <div className="flex justify-center items-center w-full">
                    <div className="max-w-xl w-full px-10 lg:px-2 py-5  shadow-2xl bg-light-black">
                        <h1 className="text-white text-center text-3xl font-bold">Contact us</h1>
                        <form action="">
                            <div className=' flex flex-col gap-y-4'>
                                <label htmlFor=""  className='text-white'>Name</label>
                                <input type="text" className='py-2 px-2 focus:bg-[#fff] text-[#959595] bg-bodyBg border border-white rounded outline-none focus:border-red-500' placeholder='Johndoe'  required/>
                            </div>
                            <div className='flex flex-col gap-y-1'>
                                <label htmlFor=""  className='text-white'>Email</label>
                                <input type="text" className='py-2 px-2 focus:bg-[#fff] text-[#959595] bg-bodyBg border border-white rounded outline-none focus:border-red-500' placeholder='johndoe@gmail.com'  required/>
                            </div>
                            <div className='flex flex-col gap-y-1'>
                                <label htmlFor=""  className='text-white'>Subject</label>
                                <input type="text" className='py-2 px-2 focus:bg-[#fff] text-[#959595] bg-bodyBg border border-white rounded outline-none focus:border-red-500' placeholder=''  required/>
                            </div>
                            <div className='flex flex-col gap-y-1'>
                                <label htmlFor=""  className='text-white'>Message</label>
                                <textarea name="" id="" cols="30" rows="10" className="py-2 px-2  outline-none focus:border-red border resize-none" placeholder="Message"></textarea>
                            </div>
                            <div className="flex justify-end">
                                <button type='submit' className='text-white w-full bg-red hover:bg-rose-700 px-4 rounded-md py-2 mt-4'>Submit</button>
                            </div>

                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}