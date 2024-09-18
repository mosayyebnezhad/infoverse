import axios from "axios";

export const useFetch = async () => {


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


    return Data;


}