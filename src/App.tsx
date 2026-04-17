import { useEffect, useState } from "react"

type Posts = {
  id: number,
  title: string,
  body: string
}

export default function App(){
  const [listPost, getPost] = useState<Posts[] | null>(null);
useEffect(()=>{

  async function getApps(){
   const deta = await fetch("https://jsonplaceholder.typicode.com/posts");
  const respons = await deta.json();
  getPost(respons);
  }
  getApps();
},[]);


if(!listPost){
  return(
    <div>
      <h1>Jast a minuts</h1>
    </div>
  )
}
  return (
    <div className="w-full min-h-screen bg-stone-200 grid grid-cols-2 gap-3">
      {listPost.map(x=>(
        <div>
          <h1>{x.title}</h1>
        </div>
      ))}
      <h1 className="text-blue-500">Hi There</h1>
    </div>
  )
}