import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"

export default function Aboutus(){
    const name='rehan'
return(
    <> 
    <Navbar/>
    <h1>About Us Page</h1>
    <h3>{name ==='rehan'?'in q2':'in q3'}</h3>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae consequatur dolorum, reiciendis voluptatem accusamus vero quas, excepturi aliquam laborum eaque minima cum, quidem molestiae vitae sequi labore officiis veniam aut.
        
    </p>
    <div className=" ml-5 mt-5 mb-5" >
        
        <Button variant="outline" size="lg" className=" hover:bg-slate-600"> Shadcn Button</Button>
    </div>
    
    </>
  
)

}