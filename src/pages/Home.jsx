import React from 'react'
import Hero from '../components/Hero'
import Service from '../components/Service'
import Testimonials from '../components/Testimonials'
import Counter from '../components/Counter'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import kimishaBackground from "../images/kimishaBackground.png";
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
    
        <div className="fixed inset-0 -z-50 bg-[#14091d] flex items-center justify-center overflow-hidden">
           <img
         src={kimishaBackground}
         alt="Kimisha Boutique"
         className="
           w-full
           h-full
           object-contain
           object-top
           pt-28
           md:pt-24
           lg:pt-60
           select-none
           pointer-events-none
         "
       />
             </div>
       
             {/* Soft Overlay */}
       
             <div className="fixed inset-0 -z-40 bg-gradient-to-b from-black/30 via-black/30 to-black/30" />
      
    


      <div className="relative z-10 min-h-screen">
  <Hero />
      <Service />
      <Collections />
      <Counter />
      <Testimonials />
      </div>
    
    </div>
  )
}

export default Home