import Link from "next/link";
import React from "react";

export default async function Users() {
  const response = await fetch(`https://dummyjson.com/users?limit=10`)
  const {users} = await response.json()
    console.log({users})
 

  return (
    <div>
      {
        users.map((user:any) => (
            <Link key={user.id} href={`/users/${user.id}`} ><h2 >{user.firstname}</h2></Link>
        )
      )})
    </div>
  );
}



