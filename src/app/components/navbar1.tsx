import React from 'react'
import Link from "next/link";
import Image from "next/image"; 

export default function Navbar1() {
  return (
    <>
    
    <div>
    <ul className=" flex flex-col md:flex-row  justify-center  h-8 space-x-4 bg-black items-center text-white font-semibold text-sm  ">
    <li><Link href="/">Hello</Link></li>
    <li><Link href="/our-work">Our Work</Link></li>
    <li><Link href="/products">Products</Link></li>
  </ul>
  </div>
<div>
<ul>
<li><Link href="/our-work"></Link></li>
<Image src="/logo-Image2.jpg" alt="logo" width={70} height={70} className=" rounded-full p-2 ml-10 space-x-5  "/>

<Link href="/">
<Image src="/next.svg" alt="Next Logo" width={50} height={50}/>
</Link>


<li></li>
<li></li>










</ul>
</div>









  </>
  )
}
