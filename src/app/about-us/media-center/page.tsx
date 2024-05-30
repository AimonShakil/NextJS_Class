import Image from "next/image"; 
import image from '@/assets/i.jpg'
import Link from "next/link";

export default function Home()

 {
  return (
    <>
    <div> Nested Media Center Page 
      <Link href="/about-us">About Us page Link</Link>
      <br/>
      <Link href="/home">Home page Link</Link>


    </div>
    </>
  )
 }