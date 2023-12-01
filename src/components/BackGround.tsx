import { useEffect, useState } from "react"
import bgFery from "../assets/bgFery.png"
import bgFeryM from "../assets/bgFeryM.png"

export default function BackGround(){
    const [img, setImg] = useState(bgFery)
    useEffect(()=>{
        setInterval(()=>{
            if(window.innerWidth < 768){
                setImg(bgFeryM)
            }else{
                setImg(bgFery)
            }
        }, 1000)
    }, [])
    return(
        <>
            <div className="flex w-full absolute z-0 md:flex-row flex-col md:h-full h-screen">
                <img src={img} alt="" className="w-full object-cover" />
            </div>
        </>
    )
}