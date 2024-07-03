type Props = {
    promise:Promise<Post[]>
}


export const UserPosts =async ({promise}:Props) => {

    const posts = await promise ;

  return (
    <section>
        <h2 className="text-[22px]">Posts</h2>
        <ul>
            {posts.map((p,i) => (
                <li className="py-2" key={p.id}>
                    <h3>{i} ) {p.title}</h3>
                    <p>{p.body}</p>
                </li>
            ))}
        </ul>
    </section>
  )
}
