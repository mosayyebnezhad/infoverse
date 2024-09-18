import axios from "axios"
import Link from "next/link"
import { useFetch } from "../hooks/useFetch"


export const revalidate = 10
export default async function HomePage() {

    const Data = await useFetch()




    return (
        <div>
            {Data.data.query.random.map((item: any) => (

                <Link href={`/${item.id}`}>
                    <h2 key={item.id}>{item.title}</h2>
                </Link>
            ))}
        </div>
    )
}