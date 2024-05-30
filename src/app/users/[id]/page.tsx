import React from "react";
// import Users from "../page"; // imported this from previous page
// import { User } from "lucide-react";

// type Params = {
//     params: {
//         id : string
//     }
// }

// export default async function User_data({params}:Params) { // watch 20 - 25 mins again
    
    
//     const user_id = parseInt(params.id) 
//     const users = await Users()

//    //const user = users.find((user:any)=>user.id===user_id) // functionality: like if we write 1 or 2 id in search it will give us that user
//     //console.log(user_id, typeof(user_id))

//     return (
//         <div className=' px-4'>
//          <h2>{users.props}</h2>
//         <p>{users.key}</p>
       
//         </div>
//       );




// }

export default async function user ({params}:{params:{id:string}}) { // params itself is an object which has property of Id and value is 1 which is self given, this is id we had written in squre brackets in dynamic folder name
 
    const response =  await fetch(`https://dummyjson.com/users?limit=10/${params.id}`) //here used $ sign to convert that params.id whcih in string form to number for Comparisons
    const users = await response.json()
    console.log(users)
  
    return (
      <div>
        <h2>{user.name}</h2>  //see 38 min  
      </div>
    )
  }


