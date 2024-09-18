"use client"

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";


interface Iprop {
    pageID: number
}
interface IImage {
    height: number,
    width: number,
    source: string
}



const GetImage = (prop: Iprop) => {
    const { pageID } = prop

    const [ftImage, setFtImage] = useState<IImage>()
    const [Error, SetError] = useState<string>("")

    useEffect(() => {
        const Run = async () => {
            const Img = await axios.get("https://fa.wikipedia.org/w/api.php", {
                params: {



                    action: "query",
                    prop: "pageimages",
                    format: "json",
                    exintro: "",
                    pageids: pageID,
                    origin: "*",
                    pithumbsize: 480

                }
            })
                .then(s => {
                    setFtImage(s.data.query.pages[pageID].thumbnail)
                })
                .catch(s => {
                    SetError(s)
                })
        }
        Run()


        // const IMgsrc = await Img.data.query?.pages[params.article].thumbnail.source;
        // const size = {
        //     with: await Img.data.query?.pages[params.article].thumbnail.width,
        //     height: await Img.data.query?.pages[params.article].thumbnail.height
        // }


    }, [])
    return (

        <>

            {ftImage ?

                <Image src={ftImage.source} alt={"alt"} width={ftImage.width} height={ftImage.height} />
                :

                <Skeleton className="w-[480px] h-60" />

            }
        </>
        // <p>image is here</p>
    )
}

export default GetImage;