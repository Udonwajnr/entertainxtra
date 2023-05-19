export default function Profile(){
    return (
        <main>
            <section>
                <div>
                    <form action="">
                        <div className="flex">
                            {/* name */}
                            <div>
                              <label htmlFor=""  className='text-white'>Name</label>
                            <input type="text" required  className='py-2 px-2 focus:bg-[#fff] text-[#959595] bg-bodyBg border border-white outline-none focus:border-red-500' placeholder='John Doe'/>
                            </div>

                            {/* email */}
                            <div>
                                <label htmlFor=""  className='text-white'>Email</label>
                                <input type="email" className='py-2 px-2 focus:bg-[#fff] text-[#959595] bg-bodyBg border border-white rounded outline-none focus:border-red-500' placeholder='johndoe@gmail.com'  required/>
                            </div>
                        </div>
                    </form> 
                </div>
            </section>
        </main>
    )
}