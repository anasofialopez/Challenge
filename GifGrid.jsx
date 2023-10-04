import {getGifs} from "../helpers/getGifs";
import { useEffect, useState } from "react"
import {GifItem} from "./GifItem.jsx";

export const GifGrid =({category}) => {
    const [images, setimages] = useState([]);

    const getImages= async () => {
        const images = await getGifs (category)
        setimages (images);
    }

    useEffect(()=> {
        getImages();
    }, [])

    return (
        <>
            <h3> {category} </h3>
            <div className= "card-grid">
            {
                images.map((image, key)=> {
                    return <GifItem key={key}{...image}></GifItem>
                })

            }
            </div>
            
        </>
    )
}
