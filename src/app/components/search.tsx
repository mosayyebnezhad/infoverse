"use client"
import axios from "axios";
import Link from "next/link";
import { Fragment, useRef, useState } from "react";

const SearchBox = () => {

    const input = useRef<any>()


    const [state, setstate] = useState<any[]>()

    const Search = () => {
        const val = input.current.value

        const Run = async () => {
            await axios.get("https://fa.wikipedia.org/w/api.php", {
                params: {
                    action: "query",
                    list: "search",
                    srsearch: val,
                    format: "json",
                    origin: "*"
                },
            })

                .then(s => setstate(s.data.query.search))
                .then(s => console.log(s))
                .catch(s => console.log(s))
        }
        Run()

      


    }
    return (
        <div className="bg-red-300">
            <input type="text" onChange={Search} ref={input} />

            <div>
                <h2>عناوین</h2>

                {state && state.map((s, i) => {
                    return (
                        <Fragment key={i}>
                            <Link href={"./" + s.pageid}>
                                <div key={i}>{s.title}</div>
                            </Link>
                        </Fragment>
                    )
                })}

                <span>---------------</span>
            </div>
        </div>
    )
}

export default SearchBox;