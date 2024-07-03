import getUser from "@/app/lib/getUser"
import getUserPosts from "@/app/lib/getUserPosts"
import Link from "next/link"
import { Suspense } from "react"
import { UserPosts } from "./components/UserPosts"
import { Metadata } from "next"

type Params = {
    params:{
        userId: string
    }
}

export async function generateMetadata ({params:{userId}}:Params): Promise<Metadata> {
    const userData:Promise<User> = getUser(userId);
    const user = await userData ;

    return {
        title:user.name,
        description:`This is the page of ${user.name}`
    }
}

export default async function  UserPage ({params:{userId}}:Params)  {

    const getUserData:Promise <User> = getUser(userId) ;
    const getPostsData:Promise <Post[]> = getUserPosts(userId) ;

    const user = await getUserData ;

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
                    <p className="text-[18px]">{user.website}</p>
                    <p className="text-[18px]">{user.address.city}</p>
                    <p className="text-[18px]">{user.address.street}</p>
                    <p className="text-[18px]">{user.address.suite}</p>
                    <p className="text-[18px]">{user.address.zipcode}</p> 
                </section>
        <Suspense fallback={<div>Loading ... </div>}>
            <UserPosts promise={getPostsData} />
        </Suspense>
    </>
  )
}
