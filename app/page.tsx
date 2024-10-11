import Image from "next/image";

export default async function Home() {
    const data = await fetch("https://jsonplaceholder.tyicode/todo")
    const todo = await data.json()
    console.log(todo)
  return (
    <main>
      <h1>{todo.title}</h1>
      <Image 
      src="/vercel.svg"
      alt="Vercel Logo"
      width={72}
      height={16}
      />
    </main>
  )
}
