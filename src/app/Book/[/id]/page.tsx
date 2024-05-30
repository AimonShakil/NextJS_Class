// this is class of API
import { defaultConfig } from 'next/dist/server/config-shared'
import react from 'react'

export default async function page ({params} : any) { // we used props here in react here we destructured and used params 
    const id = params.id;

    const response = await fetch (
        `http://simple-books-api.glitch.me/books/${id}`
    );
    const data = await response.json();
    return (
        <div>

        </div>
    )
}