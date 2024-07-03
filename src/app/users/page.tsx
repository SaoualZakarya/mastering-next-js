import { Metadata } from "next"
import getAllUsers from "@/app/lib/getAllUsers"
import Link from "next/link";

export const metadata:Metadata = {
    title:'Users'
}

export default async function UsersPage(){

    const usersData : Promise<User[]> = getAllUsers() ;

    const users = await usersData ;

  return (
    <section>
        <h1>
            <Link className="link" href={'/'} >Back to home page </Link>
        </h1>
        <br/>
        <div>
            {
                users.map((user) => (
                    <div className="pb-8" key={user.id}>
                        <h2 className="text-[22px]">{user.name}</h2>
                        <p className="text-[18px]">{user.email}</p>
                        <Link className="link" href={`/users/${user.id}`} > GO to user page</Link>
                    </div>
                ))
            }
        </div>
    </section> 
    )
}
