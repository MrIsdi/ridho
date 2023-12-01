import { useState } from "react"
import BackGround from "../components/BackGround"
import PlazaMipa from "../components/PlazaMipa"
import { useParams } from "react-router-dom"
import profilFery from "../assets/profilFery.png"
import musik from "../assets/musik.mp3"

export default function Fery(){
    const { name } = useParams()
    const [up, setUp] = useState("top-0")
    const [disp, setDisp] = useState("hidden")
    const handleOpen = () =>{
        setUp("top-[-150%]")
        setDisp("block")
        new Audio(musik).play()
    }
    return(
        <>
            <div className={`absolute ${up} w-full h-screen transition-all duration-500 ease-in-out z-10`}>
                <BackGround />
                <div className="absolute w-full z-10">
                    <h1 className="text-white text-center mt-8 md:text-8xl text-6xl font-['Rouge_Script']">Welcome to</h1>
                    <h1 className="text-white text-center mt-4 mb-6 md:text-8xl text-4xl font-['Rouge_Script']">Muhammad Ridho Isdi, S. Si</h1>
                    <hr className="md:mx-52 mx-4 mb-7 border-[2px]" />
                    <h2 className="text-white text-center md:text-5xl text-2xl font-['Poppins'] font-light md:tracking-[35.7px] tracking-[15px] md:mb-0 mb-4">GRADUATION</h2>
                    <h2 className="text-white text-center md:text-4xl text-xl font-['Poppins'] font-light tracking-[9px] md:mb-12 mb-20">CLASS OF 2023</h2>
                    <p className="border-[2px] border-white rounded-[10px] bg-[rgba(255,255,255,0.10)] shadow-[0_4px_4px_0_rgba(0,0,0,.25)] text-white md:text-4xl text-2xl w-fit m-auto px-8 py-3 font-['Poppins']">{name}</p>
                    <button className="w-fit px-16 py-4 rounded-[18px] bg-[#d9d9d9] shadow-[4px_7px_7px_0_rgba(0,0,0,.25)] md:text-3xl text-xl mx-auto block md:mt-12 mt-20" onClick={handleOpen}>Open</button>
                </div>
            </div>
            <div className={`w-full relative transition-all duration-500 ease-in-out z-0 h-screen ${disp}`}>
                <BackGround />
                <div className="flex absolute w-full z-10 md:flex-row flex-col">
                    <div className="basis-1/2">
                        <div className="bg-white shadow-[10px_8px_7px_0_rgba(0,0,0,.25)] w-3/4 mx-auto px-8 py-6 mt-4 mb-4">
                            <p className="font-['Lily_Script_One'] text-base">
                                <span className="text-xl font-bold mb-4 block">Thank You</span>
                                <span className="mb-4 block">
                                Thank you to everyone who has supported me. I'm sorry that during the lecture I offended all my colleagues. May we all be given smoothness and ease of all affairs.
                                </span>
                                Hopefully what you dream of can be realized!
                            </p>
                        </div>
                        <div className="bg-white shadow-[10px_8px_7px_0_rgba(0,0,0,.25)] w-3/4 m-auto md:px-8 px-4 py-6 font-['Poppins'] font-light">
                            <p className="text-center">Saturday, 02 December 2023</p> 
                            <p className="text-center">Plaza MIPA, Universitas Andalas</p>
                            <p className="text-center">01:30 PM</p>
                        </div>
                        <div className="w-3/4 m-auto py-4 flex justify-center">
                            <PlazaMipa />
                        </div>
                    </div>
                    <div className="basis-1/2">
                        <div className="mt-4 md:pt-16 pt-8 bg-white w-3/4 m-auto md:h-[610px] h-[400px]">
                            <div className="md:w-[380px] w-[230px] aspect-square bg-[#888888] m-auto mb-8 relative after:contents-[''] after:border-2 after:border-black after:absolute after:w-full after:aspect-[3/3.5] md:after:-top-5 after:-top-3 md:after:-right-5 after:-right-3 after:rounded-[24px]">
                                <img src={profilFery} alt="" />
                            </div>
                            <p className="md:text-xl text-base font-[Poppins] font-light tracking-[4px] text-center mb-2">UNIVERSITAS ANDALAS</p>
                            <p className="md:text-xl text-base font-[Poppins] font-light tracking-[4px] text-center">BACHELOR OF SCIENCES</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}