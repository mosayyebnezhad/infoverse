"use client"
import GetImage from "@/components/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { Component, XIcon } from "lucide-react";
import Link from "next/link";
import { Fragment, useRef, useState } from "react";


const SearchBox = () => {

    const input = useRef<any>()


    const [str, setStr] = useState<boolean>()

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

                .catch(s => console.log(s))
        }


        if (String(val).length > 0) {
            setStr(true)
            console.log(val)
            Run()
        } else {
            setStr(false)

        }




    }


    const closeAll = () => {
        setStr(false)
        input.current.value = ""
        setstate([])
    }
    return (
        <div className="">


            <div className="container mx-auto">
                <div className="w-10/12 mx-auto relative">
                    <div>
                        <Input type="text" onChange={Search} ref={input} className="h-10 mx-auto" placeholder="جست و جو ..." />


                        {str
                            && <Button
                                onClick={closeAll}
                                variant={"secondary"}
                                className="
                            absolute top-[5px] left-[5px]
                            rounded-full w-[30px] h-[30px] text-lg font-light flex items-center justify-center">

                                x
                            </Button>}

                    </div>


                    {str
                        &&
                        <div className="w-full absolute z-20 bg-black">
                            <h2 className="mx-auto h-11 my-3 rounded-3xl bg-[--title] flex justify-center items-center">
                                عناوین
                            </h2>

                            <div>
                                {state && state.map((s, i) => {
                                    return (
                                        <Fragment key={i}>
                                            <Link href={"./" + s.pageid}>
                                                <div className="h-36 rounded-2xl bg-[--bgbg] mb-3 flex justify-center  items-center">

                                                    <div className="w-10/12 flex items-center gap-5">
                                                       
                                                        <Component/>
                                                        {s.title}
                                                    </div>


                                                </div>
                                            </Link>
                                        </Fragment>
                                    )
                                })}
                            </div>
                        </div>
                    }


                </div>
            </div>
        </div>
    )
}

export default SearchBox;