import axios from "axios"
import Link from "next/link"
import { useFetch } from "../hooks/useFetch"



export default async function HomePage() {

    // const Data = await axios.get("https://fa.wikipedia.org/w/api.php", {
    //     params: {
    //         action: "query",
    //         list: "random",
    //         rnlimit: "8",
    //         format: "json",
    //         origin: "*",
    //         rnnamespace: 0
    //     }
    // })



    return (
        <div>
            {/* {Data.data.query.random.map((item: any) => (

                <Link href={`/${item.id}`}>
                    <h2 key={item.id}>{item.title}</h2>
        
                </Link>
            ))} */}
        </div>
    )
}