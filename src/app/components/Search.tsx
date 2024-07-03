'use client'

import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"

export const Search = () => {

    const [search,setSearch] = useState('')

    const router = useRouter() ;

    const handleSubmit = async (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        router.push(`/${search}/`)
        setSearch('');
    }

  return (
    <form 
        className=" flex justify-center h-10 sm:h-12 "
        onSubmit={handleSubmit}
    >
        <input
            type="text"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            className="bg-white text-black p-2 w-40 sm:w-80 text-xl rounded-xl"
            placeholder="search"
        />
        <button className="p-2 text-sm sm:text-xl rounded-xl bg-slate-300 ml-2 font-bold">
            🚀
        </button>
    </form>
  )
}
