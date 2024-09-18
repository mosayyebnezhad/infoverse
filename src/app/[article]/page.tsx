import GetImage from "@/components/image";
import axios from "axios";
import Image from "next/image";
const Article = async ({ params }: { params: { article: number } }) => {





    const Data = await axios.get("https://fa.wikipedia.org/w/api.php", {
        params: {



            action: "query",
            prop: "extracts",
            format: "json",
            exintro: "",
            pageids: params.article,
            origin: "*",

        }
    })







    const title = await Data?.data.query?.pages[params.article].title;
    const summary = await Data.data.query?.pages[params.article].extract;


    // console.log(IMgsrc)
    // const render = wikioutpoter(Uotp)

    return (
        <div

            className="container mx-auto mb-48"
        >

            <div className="w-10/12 mx-auto" >
                <h1 className="bg-[--bgbg] opacity-65 rounded-lg h-auto py-5 my-8 flex justify-center items-center font-extrabold text-3xl">{title}</h1>

                <div className="flex justify-center items-center mb-7">
                <GetImage alt={title} pageID={params.article} />
                </div>
                <span 
                className="leading-10 "
                dangerouslySetInnerHTML={{ __html: summary }} />

            </div>
        </div>
    )
}


export default Article;