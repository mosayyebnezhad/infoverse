import axios from "axios"
import Link from "next/link"
import { useFetch } from "../hooks/useFetch"
import GetImage from "@/components/image"



export default async function HomePage() {

    const Data = await axios.get("https://fa.wikipedia.org/w/api.php", {
        params: {
            action: "query",
            list: "random",
            rnlimit: "8",
            format: "json",
            origin: "*",
            rnnamespace: 0
        }
    })



    return (
        <div className="container mx-auto">
            <div className="w-8/12 mx-auto mt-32">
                {Data.data.query.random.map((item: any) => (

                    <Link href={`/${item.id}`}>
                        <h2 key={item.id} className="flex gap-5 items-center bg-[--bgbg] my-3 rounded-lg" >
                            <div className="w-2/5 h-full  min-h-36 overflow-hidden"> 
                                <GetImage pageID={item.id} alt={item.title} />
                            </div>
                            {item.title}

                        </h2>
                    </Link>
                ))}
            </div>
        </div>
    )
}