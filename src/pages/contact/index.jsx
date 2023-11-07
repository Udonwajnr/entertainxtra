import axios from "axios"
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact(){
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [subject,setSubject] = useState("")
    const [message,setMessage] = useState("")

    const submitContact = async(e)=>{
        e.preventDefault()
        const data = {name,email,subject,message}
        axios.post("http://localhost:5000/api/contact",data)
        .then((data)=>{
            toast.success('Submitted', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                setEmail("")
                setSubject("")
                setMessage("")
                setName("")
        })
        .catch((err)=>{
            toast.error('Not Submitted', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        })
        
    }
    const notify = () => toast.success('Submitted', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

        return(
        <main>
            <section className="h-screen flex justify-center items-center">
                <div className="flex justify-center items-center w-full">
                    <div className="max-w-xl w-full px-10 lg:px-2 py-5  shadow-2xl bg-light-black">
                        <h1 className="text-white text-center text-3xl font-bold">Contact us</h1>
                        <form action="" onSubmit={submitContact}>
                            <div className=' flex flex-col gap-y-4'>
                                <label htmlFor=""  className='text-white'>Name</label>
                                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className='py-2 px-2 focus:bg-[#fff] text-[#000000] bg-bodyBg border border-white rounded outline-none focus:border-red-500' placeholder='Johndoe'  required/>
                            </div>
                            <div className='flex flex-col gap-y-1'>
                                <label htmlFor=""  className='text-white'>Email</label>
                                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className='py-2 px-2 focus:bg-[#fff] text-[#000000] bg-bodyBg border border-white rounded outline-none focus:border-red-500' placeholder='johndoe@gmail.com'  required/>
                            </div>
                            <div className='flex flex-col gap-y-1'>
                                <label htmlFor=""  className='text-white'>Subject</label>
                                <input type="text" value={subject} onChange={(e)=>setSubject(e.target.value)} className='py-2 px-2 focus:bg-[#fff] text-[#000000] bg-bodyBg border border-white rounded outline-none focus:border-red-500' placeholder=''  required/>
                            </div>
                            <div className='flex flex-col gap-y-1'>
                                <label htmlFor=""  className='text-white'>Message</label>
                                <textarea name=""  value={message} onChange={(e)=>setMessage(e.target.value)} id="" cols="30" rows="10" className="py-2 px-2 text-[#000000]  outline-none focus:border-red border resize-none" placeholder="Message"></textarea>
                            </div>
                            <div className="flex justify-end">
                                <button type='submit' className='text-white w-full bg-red hover:bg-rose-700 px-4 rounded-md py-2 mt-4'>Submit</button>
                            </div>
                            <div>
        <ToastContainer />
      </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}