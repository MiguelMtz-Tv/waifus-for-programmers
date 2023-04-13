import { useState, useEffect } from "react";

function Content({lang}){
    const [imgs, setImgs] = useState([]);
    /* const [dataLang, setLang] = useState('Javascript'); */
    const WAIFUS_ENDPOINT = 'https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/contents/'
    
    /* const fetchImages = () => {
        fetch(WAIFUS_ENDPOINT+dataLang)
        .then(res => res.json())
        .then(data => setImgs(data))
    } */

    useEffect(() => {
        fetch(WAIFUS_ENDPOINT+lang)
        .then(res => res.json())
        .then(data => setImgs(data))
    }, [lang])

    return(
    <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700 mt-14">
        {/* <button onClick={show}>show me</button> */}
            {
                imgs.map((img) => {
                    return(
                        <img src={img.download_url}/>
                    )
                })
            }
        </div>
    </div>
    )
}

export default Content;