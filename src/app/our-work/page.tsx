import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Fullscreen } from "lucide-react";

export default function ourWork() {
  return (
    <>
      <h1 className="text-3xl text-center mt-8">Our Work</h1>

      <div className=" flex just justify-center items-center mb-20">
        <main className=" w-[500] p-4">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </main>
        <AlertDialog>
          <AlertDialogTrigger>Open Work</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <div className=" flex justify-center mb-8">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <Image
                src="/landscape-315179_1280.jpg"
                alt="Image 1"
                width="400"
                height="400"
              />
            </CarouselItem>
            <CarouselItem>
              <Image src="/Moon.jpg" alt="Image 1" width="100" height="100" />
            </CarouselItem>
            <CarouselItem>
              {" "}
              <Image src="/Moon3.jpg" alt="Image 1" width="400" height="400" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className=" flex justify-center mb-12 ">
        <Card>
          <CardHeader>
            <CardTitle>Create Project</CardTitle>
            <CardDescription>
              Deploy your new project in one click
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Name</p>
            <Input
              className=" mb-2 mt-1"
              type="email"
              placeholder="Name of Your Project"
            />
            <p>Framework </p>
            <Select>
              <SelectTrigger className="w-[180px] mb-2 mt-1 ">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Next.Js">Light</SelectItem>
                <SelectItem value="Astro">Dark</SelectItem>
                <SelectItem value="Nuxt">System</SelectItem>
                <SelectItem value="Turbo">System</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>

          <CardFooter className=" flex justify-between ">
            <Button>Cancel</Button>
            <Button>Deploy</Button>
          </CardFooter>
        </Card>
      </div>

      <div className=" flex mb-10 justify-center ">
        <RadioGroup defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="option-one" />
            <Label htmlFor="option-one">Option One</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="option-two" />
            <Label htmlFor="option-two">Option Two</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-three" id="option-three" />
            <Label htmlFor="option-three">Option Three</Label>
          </div>
        </RadioGroup>
      </div>
      <div className=" flex justify-center ">
        <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
          Jokester began sneaking into the castle in the middle of the night and
          leaving jokes all over the place: under the king's pillow, in his
          soup, even in the royal toilet. The king was furious, but he couldn't
          seem to stop Jokester. And then, one day, the people of the kingdom
          discovered that the jokes left by Jokester were so funny that they
          couldn't help but laugh. And once they started laughing, they couldn't
          stop.
        </ScrollArea>
      </div>
      <div className=" flex justify-evenly h-80 m-5 flex-wrap items-center ml-44 mr-44 p-1 ">
        <div className=" bg-blue-950 w-80 h-80 rounded-lg p-6 " >Lorem ipsum dolor sit amet consectetur adipisicing elit,Lor sit amet consectetur adipisicing elitem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        <div className=" bg-blue-950 w-80 h-80 rounded-lg p-6">Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit</div>
        <div className=" bg-blue-950 w-80 h-80 rounded-lg p-6">Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit</div>
        {/* <div className=" bg-purple-500">Block 4</div>
        <div className=" bg-orange-500">Block 5</div>
        <div className=" bg-yellow-500">Block 6</div> */}
      </div>

      <div className=" flex h-30 ml-44 mr-44 mt-20 mb-20 justify-between bg-slate-50 rounded-xl p-3 ">
  <div className="m-3 p-6 bg-blue-100 rounded-lg text-black">
    <p>“The success combination in business is: Do what you do better... and: do more of what you do.”</p>
    <span>- David J. Schwartz</span>
  </div>
  <div className="m-3 p-6 bg-blue-100 rounded-lg text-black">
    <p>“Give out what you most want to come back.”</p>
    <span>- Robin Sharma</span>
  </div>
  <div className="m-3 p-6 bg-blue-100 rounded-lg text-black">
    <p>“You don't have to be great at something to start, but you have to start to be great at something.”</p>
    <span>- Zig Ziglar</span>
  </div>
</div>

<div className=" flex rounded-2xl  bg-white h-10 m-20  justify-evenly  ">
  <div className=" bg-blue-300 text-black font-semibold rounded-2xl h-8 pl-4 pr-4 pt-1 m-1 ">Profile</div>
  <div className=" bg-blue-300  text-black font-semibold rounded-2xl h-8 pl-4 pr-4 pt-1 m-1 " >Notification</div>
  <div className=" bg-blue-300  text-black font-semibold rounded-2xl h-8 pl-4 pr-4 pt-1  m-1 ">Payments</div>
  <div className=" bg-blue-300   text-black font-semibold rounded-2xl h-8 pl-4 pr-4 pt-1  m-1 ">Settings</div>
</div>


<div className=" flex rounded-2xl  bg-white h-10 m-20  justify-between  ">
  <div className=" bg-blue-300 text-black font-semibold rounded-2xl h-8 pl-4 pr-4 pt-1 m-1 ">Profile</div>
  <div className=" bg-blue-300  text-black font-semibold rounded-2xl h-8 pl-4 pr-4 pt-1 m-1 " >Notification</div>
  <div className=" bg-blue-300  text-black font-semibold rounded-2xl h-8 pl-4 pr-4 pt-1  m-1 ">Payments</div>
  <div className=" bg-blue-300   text-black font-semibold rounded-2xl h-8 pl-4 pr-4 pt-1  m-1 ">Settings</div>
</div>

<div className=" flex rounded-2xl  bg-white h-10 m-20  justify-end  ">
  <div className=" bg-blue-300 text-black font-semibold rounded-2xl h-8 pl-4 pr-4 pt-1 m-1 ">Profile</div>
  <div className=" bg-blue-300  text-black font-semibold rounded-2xl h-8 pl-4 pr-4 pt-1 m-1 " >Notification</div>
  <div className=" bg-blue-300  text-black font-semibold rounded-2xl h-8 pl-4 pr-4 pt-1  m-1 ">Payments</div>
  <div className=" bg-blue-300   text-black font-semibold rounded-2xl h-8 pl-4 pr-4 pt-1  m-1 ">Settings</div>
</div>

<div className=" flex rounded-2xl  bg-white h-10 m-20  justify-around  ">
  <div className=" bg-blue-300 text-black font-semibold rounded-2xl h-8 pl-4 pr-4 pt-1 m-1 ">Profile</div>
  <div className=" bg-blue-300  text-black font-semibold rounded-2xl h-8 pl-4 pr-4 pt-1 m-1 " >Notification</div>
  <div className=" bg-blue-300  text-black font-semibold rounded-2xl h-8 pl-4 pr-4 pt-1  m-1 ">Payments</div>
  <div className=" bg-blue-300   text-black font-semibold rounded-2xl h-8 pl-4 pr-4 pt-1  m-1 ">Settings</div>
</div>

<div className=" flex rounded-2xl  bg-white h-10 m-20  justify-center ">
  <div className=" bg-blue-300 text-black font-semibold rounded-2xl h-8 pl-4 pr-4 pt-1 m-1 ">Profile</div>
  <div className=" bg-blue-300  text-black font-semibold rounded-2xl h-8 pl-4 pr-4 pt-1 m-1 " >Notification</div>
  <div className=" bg-blue-300  text-black font-semibold rounded-2xl h-8 pl-4 pr-4 pt-1  m-1 ">Payments</div>
  <div className=" bg-blue-300   text-black font-semibold rounded-2xl h-8 pl-4 pr-4 pt-1  m-1 ">Settings</div>
</div>

<div className=" flex justify-center">
<div className="  max-w-sm rounded overflow-hidden shadow-lg ">
  <Image src="/Moon3.jpg" width="400" height="400"  alt="Moon Image" />
  <div>
   <div className=" font-bold text-xl mb-2 mt-3 ">The Coldest Moon</div>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, ea. Ipsum, tota  sit amet consectetur adipisicing elit. Repudiandae, ea. Ipsum, tot Repudiandae, ea. Ipsum, tot</p>
<div className=" flex justify-items-start mt-16 mb-3">
 <span className=" bg-slate-400 rounded-2xl text-black font-semibold h-8 pl-3 pr-3 pt-1 m-1 ">#Photography</span>
 <span className=" bg-slate-400 rounded-2xl text-black font-semibold h-8 pl-3 pr-3 pt-1 m-1 ">#Travel</span>
 <span className=" bg-slate-400 rounded-2xl text-black font-semibold h-8 pl-3 pr-3 pt-1 m-1 ">#winter</span>
</div>
</div>
</div>
</div> 

<div className=" flex bg-slate-50 h-40 m-32 rounded-xl justify-around ">
  <div ><Image src="/man1.jpg" width="120" height="120" alt="Image 1" className=" rounded-full mt-3 " /></div>
  <div><Image src="/Man2.jpg" width="120" height="120" alt="Image 2" className=" rounded-full mt-3" /></div>
  <div><Image src="/Man3.jpg" width="120" height="120" alt="Image 3" className=" rounded-full mt-3" /></div>
  <div><Image src="/wo.jpg" width="120" height="120" alt="Image 3" className=" rounded-full mt-3" /></div>





</div>
    </>
  );
}
