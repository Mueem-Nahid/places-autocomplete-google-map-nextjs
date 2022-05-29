import Image from 'next/image'
import React from 'react'
import AutoSearchComponent from './AutoSearchComponent'

export default function Nav({ setLocation }) {
   return (
      <nav className="navbar navbar-light bg-light ">
         <div className="container-fluid">
            <a className="navbar-brand" href="#">
               <Image src={'/google.png'} width='50px' height='50px' alt='nav' />
            </a>
            <div className="w-50">
               <AutoSearchComponent setLocation={setLocation} />
            </div>
         </div>
      </nav>
   )
}
