import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import MobileNavbar from '@/components/MobileNavbar'
import { useState } from 'react'
import Footer from '@/components/Footer'

export default function App({ Component, pageProps }) {
  const [active,setActive] = useState(false)
  // toggles navbar bar icon
  const toggle =()=>{
    setActive(!active)
  }

  return(
  <>
    <Navbar toggle={toggle} active={active} />
    {
      active&&
      <MobileNavbar toggle={toggle}/>
    }
    <Component {...pageProps} />
    <Footer/>
  </>)
}

