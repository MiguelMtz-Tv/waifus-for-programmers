import { useState, useEffect } from "react";

function Content({lang}){
    const [imgs, setImgs] = useState([]);

    const WAIFUS_ENDPOINT = 'https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/contents/'

    useEffect(() => {
        fetch(WAIFUS_ENDPOINT+lang)
        .then(res => res.json())
        .then(data => setImgs(data))
    }, [lang])

    return(
    <div className="p-4 sm:ml-64">
        <div className="flex justify-center flex-wrap p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700 mt-14">
            {
                imgs.map((img) => {
                    return(
                        <div className="mx-14 mt-14">
                            <img src={img.download_url} className="rounded-sm w-64"/>
                        </div>
                    )
                })
            }
        </div>
    </div>
    )
}

export default Content;