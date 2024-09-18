import axios from "axios"
import Link from "next/link"

export default async function HomePage() {
    const Data = await axios.get("https://fa.wikipedia.org/w/api.php", {
        params: {
            action: "query",
            list: "random",
            rnlimit: "8",
            format: "json",
            origin: "*",
            rnnamespace: 0
        },
        headers: {
            'Cache-Control': 'no-store'
        }
    })
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