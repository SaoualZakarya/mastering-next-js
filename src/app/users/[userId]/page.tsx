import getUser from "@/app/lib/getUser"
import getUserPosts from "@/app/lib/getUserPosts"
import Link from "next/link"
import { Suspense } from "react"
import { UserPosts } from "./components/UserPosts"
import { Metadata } from "next"
import getAllUsers from "@/app/lib/getAllUsers"

import NotFound from "./components/not-found"

type Params = {
    params:{
        userId: string
    }
}

export async function generateMetadata ({params:{userId}}:Params): Promise<Metadata> {
    const userData:Promise<User> = getUser(userId);
    const user = await userData ;

    if(!user){
        return {
            title:"User Not Found"
        }
    }

    return {
        title:user.name,
        description:`This is the page of ${user.name}`
    }
}

export default async function  UserPage ({params:{userId}}:Params)  {

    const getUserData:Promise <User> = getUser(userId) ;
    const getPostsData:Promise <Post[]> = getUserPosts(userId) ;

    const user = await getUserData ;

    if(!user) return NotFound() ;

  return (
    <>
        <h1 className="text-center text-[22px]"> User {userId}</h1>
        <h2>
            <Link className="link" href={'/users'} >Back to users page </Link>
        </h2>
        <section className="my-4">
            <h2 className="text-[22px]">{user.name}</h2>
            <p className="text-[18px]">{user.email}</p>
            <p className="text-[18px]">{user.phone}</p>
        </section>
        <Suspense fallback={<div>Loading ... </div>}>
            <UserPosts promise={getPostsData} />
        </Suspense>
    </>
  )
}


// Used in content that is not to much changed -SSG- static site generation to 
// reduce the number of requests to make the website more better 
export async function generateStaticParams(){
    const usersData : Promise<User[]> = getAllUsers() ;

    const users = await usersData ; 

    return users.map(user=>{userId:user.id.toString()})
}