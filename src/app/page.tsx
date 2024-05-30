import Image from "next/image"; 
import image from '@/assets/i.jpg'
import Link from "next/link";
import { Button } from "@/components/ui/button";


export default function Home()

 {
  return (
  <>
  <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
  
  {/* <div className="flex justify-evenly items-center bg-slate-400 m-10 ">
  <div className=" w-2/3 text-center">
    <h1 className=" text-white text-2xl uppercase" >Welcome to Panverse</h1>
    <h2 className=" text-slate-200"> Happy to see you</h2>
    <button className=" border border-dotted border-fuchsia-950 rounded-2xl p-3 m-4 bg-fuchsia-500 text-white">Get Started</button>
  </div>
  <div className="">
  <img src="/main-qimg-98f2a80f3422f6fe78bf2b11cd01da75-lq.jpg" alt="Picture"width={150} height={150} className=" rounded-full p-3"/>

  </div>
  </div> */}
  {/* <ul className=" flex flex-col md:flex-row justify-center h-48 space-x-4 bg-slate-400 items-center m-6 ">
    <li><Link href="/">Home</Link></li>
    <li><Link href="/our-work">Our Work</Link></li>
    <li><Link href="/research">Research</Link></li>
  </ul> */}

  {/* <button className=" bg-blue-400 m-5 p-3 rounded-2xl border-black border-2">Click Me</button> */}
  {/* <h2>Routing of pages</h2>
    <Link href="/media-center"> </Link>
    <br/>
    <Link href="/about-us">About Us page Link</Link>
    <br/>
    <Link href="/">Home page Link</Link>
    <br/>
    <Link href="/about-us/media-center">Media Center page Link</Link> */}
   
   <div className="  bg-white h-14  p-2  text-black font-semibold text-sm  shadow-xl">
        <div className=" flex  justify-between items-center content-around  h-full  ">
          <ul className=" sm:flex space-x-5 ">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about-us">About US </Link></li>
                <li><Link href="/our-work">Our Work</Link></li>
                <li><Link href="/books">Books</Link></li>
                <li><Link href="/users">Users</Link></li>
                <button className=" p-1 content-end rounded-full   border-black border-2 text-sm  ">Sign up</button>
                
          </ul> 
                
          <div>
                <Image src="/logo-Image2.jpg" alt="logo" width={70} height={70} className=" rounded-full p-2 ml-10 space-x-5  "/>
          </div>  
        </div> 
      </div>     
                
        <br/>
        <br/>
        
        
          <nav className=" w-full h-25 shadow-xl bg-red-500 ">
            <div className=" flex flex-col justify-between flex-wrap items-center content-around p-2 m-3">
               
              {/* <Link href="/">
                <Image src="/logo-Image.jpg" alt="logo" width={100} height={100}   className=" self-start cursor-pointer rounded-full  "/> 
              </Link>  */}
              
              <div className=" uppercase text-center font-extrabold  text-5xl mb-2  ">
                Maxilla
              </div>
        
              <div className=" self-center mt-4" > 
              <ul className=" sm:flex font-bold font-sans text-sm ">
                <li className= "uppercase hover:border-b ml-10 space-x-5 "><Link href="/">Home</Link></li>
                <li className= "uppercase hover:border-b ml-10 space-x-5 " ><Link href="/about-us">About US </Link></li>
                <li className= "uppercase hover:border-b ml-10 space-x-5 "><Link href="/our-work">Why us</Link></li>
                <li className= "uppercase hover:border-b ml-10 space-x-5 " ><Link href="/our-work">Contact</Link></li>
                <button className=" p-1 ml-5 mb mr-2 bg-black text-white rounded-full border-black border-2 text-sm  ">Sign up</button>
              </ul>
              </div>
             
              </div>  
              <div className="flex justify-center flex-wrap bg-red-500 h-80 text-8xl text-yellow-50 font-semibold uppercase">
                Ship from Store in Under an Hour

              </div>
          </nav>
          

          <br/>
        <br/>
        
              
              
              <nav className=" h-20 shadow-md bg-slate-300 rounded-full mt-10 ">
              <div className=" flex justify-between p-4  ">
                
                <div className=" flex ">
                <Link href="/"><Image src="/small-logo.png" alt="logo" width={20} height={20} /></Link>  
                <Link href="/"><Image src="/heart.png" alt= "logo"  width={20} height={20} /> </Link>
                <Link href="/"><Image src="/share.png" alt= "logo"  width={20} height={20} /> </Link>
                <Link href="/"><Image src="/person.png" alt= "logo"  width={20} height={20} /> </Link>
                </div>

                <div>
                  
                </div> 
                
                  
                <div className=" flex mr-10 space-x-5">Block 2</div>
                
                <div className=" flex  justify-evenly flex-wrap  ">
                  <ul className=" sm:flex ">
                  <li className=" uppercase hover:border-b-2"> <Link href="/">Home </Link></li>
                  <li className=" uppercase hover:border-b-2"> <Link href="about-us">About US </Link></li>
                  <li className=" uppercase hover:border-b-2"> <Link href="our-work">Why us </Link></li>
                  <li className=" uppercase hover:border-b-2"> <Link href="about-us">Team </Link></li>
                  <li className=" uppercase hover:border-b-2"> <Link href="our-work">Contact </Link></li>
                  </ul> </div>
                </div>
              

              </nav>

              <nav className=" h-20 shadow-md bg-slate-400 rounded-full mt-10 ">
              <div className=" flex justify-between p-4  ">
                
                <div >
                Block 1
                </div>

                <div>
                  Block 2
                </div> 
                
                  
                <div >Block 3</div>
                
                <div>
                Block 4
                </div>
                </div>
              

              </nav>



              <nav className=" h-20 shadow-md bg-slate-400 rounded-full mt-10 ">
              <div className=" flex justify-between p-4  ">
                
                <div >
                Block 1
                </div>

                <div>
                  Block 2
                </div> 
                
                  
                <div >Block 3</div>
                
                <div>
                Block 4
                </div>
                </div>
              


                

              

              </nav>
















    <Image src={image} alt="logo" className="w-32 h-32 object-contain" /> 
    
    <Image src={"https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"

    } 
    width={500}
    height={500}
    alt="url"
    className=" w-32 h-32 object-contain object -top-0"
    
  />
  {/* <div>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div> */}

<h2 className=" text-4xl font-bold text-center py-8">Flexbox</h2>
<div className=" flex gap-4 h-full">
  <div className=" bg-red-500 text-white h-26 ">
    <p> 
      Flex Item 1
    </p>
  </div>
  <div className=" bg-blue-500 text-white h-26 order-1  ">
    <p> 
      Flex Item 2
    </p>
  </div>
  <div className=" bg-yellow-500 text-white h-26 ">
    <p> 
      Flex Item 3
    </p>
  </div>
</div>



<h2 className=" uppercase font-medium  text-center text-black  ">Assignment</h2>
<div className=" flex rounded-md shadow-sm  ">
<h1 className="  text-blue-600 font-bold justify-center">CSS FLEX & Grid</h1>
<p>This book takes a completely different approach. I won't teach you the things flex and grid can do. Instead, I will first show you some components and layouts and make you think how to build them using the CSS concepts you already know. Now you have a problem, and you want a solution.</p>
</div>
<div> 
<h1> Grid , grow shrink, Flex short had Properties</h1>
<div className=" flex p-6">
  <div className=" bg bg-red-500 flex-[1]"> Div 1</div> 
  <div className=" bg bg-green-500 flex-[2] "> </div>
  <div className=" bg bg bg-yellow-500 flex -[3]"> Div 1</div>
</div>
</div>
<br/ >
<h2 className=" p-4 ">Grid</h2>
<div className=" grid grid-cols-4 grid-rows-3 ">
<div className=" bg-pink-300">1</div>
<div className=" bg-blue-300">2</div>
<div className=" bg-green-300">3</div>
<div className=" bg-yellow-300">3</div>
<div className=" bg-red-300">3</div>
<div className=" bg-pink-300">3</div>
<div className=" bg-pink-300"   >3</div>
<div>4</div>
<div>5</div>
<div>6</div>
<div>7</div>
<div>8</div>
<div>9</div>
<div>10</div>
<div>11</div>
<div>12</div>

</div>

<div>
  <Button variant={"secondary"}> submit </Button>
  <Button variant={"secondary"} asChild className="bg-purple-500" >


  </Button>
</div>

<h2>Card</h2>
<div>

</div>

  </>
  );
}