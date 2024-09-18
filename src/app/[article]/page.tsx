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
        <div >
            <h1>{title}</h1>
            <span>-------</span><br />
            {/* {summary} */}
            <GetImage pageID={params.article} />
            <span dangerouslySetInnerHTML={{ __html: summary }} />




            {/* {`${JSON.stringify(render)}`} */}
        </div>
    )
}


export default Article;