// import createPost from "@/server/actions/create-post"
// import getPost from "@/server/actions/get-post"
// import Image from "next/image";

import createPosts from "@/app/server/actions/create-post";
import getPosts from "@/app/server/actions/get-posts"

export default async function Home() {
  const {error, success} = await getPosts();
  if(error){
    throw new Error(error)
  }
  if(success)
  return (
    <main>
      {success.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>

        </div>
      ))}
      <form action="{createPost}">
        <input type="text" className=" bg bg-black"  name="title" placeholder="Title" />
        <input type="text" placeholder="Content" />
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}
