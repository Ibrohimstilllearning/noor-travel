//import { useNavigate } from "react-router-dom"
import { aboutData } from "./data/data"
import { FaCheckCircle } from "react-icons/fa";

export default function AboutUs() {
    const about = aboutData[0];
    // const navigate = useNavigate();
    // return <div className="p-96 flex justify-center items-center">
    //     <div className=" text-center border-l border-t border-b rounded-tl-2xl rounded-bl-2xl py-2">
    //          <h1 className="font-libre text-4xl">Coming Soon</h1>
    //         <h3 className="mt-5 font-jakarta-sans">On progress, if u want to having connection with me please contact me <span>+62 821-3851-6750</span></h3>
    //     </div>
    //     <button onClick={() => navigate('/')} className="font-jakarta-sans font-bold text-white bg-primary py-10 px-3 rounded-br-2xl rounded-tr-2xl">Back to Home</button>
    // </div>

    return <div>
        <AboutHero data = {about} />
        <VisiMisi data = {about} />
        <Izin data = {about} />
    </div>
}

function AboutHero ({data}) {
    return <div className="flex items-center gap-12 px-20 py-16">
        <div className="flex-1">
              <span className="rounded-full px-3 py-1 border-amber-100 border-2 font-bold font-jakarta-sans text-amber-900 text-sm">{data.badge}</span>
            <h1 className="mt-6 text-5xl font-libre">{data.heroTitle}</h1>
            <p className="mt-6 font-jakarta-sans text-sm">{data.heroDescription}</p>
        </div>
        <div className="flex-1">
            <img className="rounded-2xl shadow-xl" src={data.heroImage} alt="" />
        </div>
    </div>
}

function VisiMisi({data}) {
    return (
        <div className="py-14 my-10 bg-gray-100">
            <h1 className="font-libre text-2xl flex justify-center mb-10">Visi & Misi</h1>
            
            <div className="flex items-start px-20 gap-10">
                {data.card.map((item) => {
                    const Icon = item.icon
                    return (
                        <div className="flex-1 bg-white rounded-2xl py-6 px-6 shadow-xl" key={item.id}>
                            <div className="text-2xl text-primary mb-3 rounded-full flex justify-center items-center w-10 h-10 bg-primary/25">
                                <Icon />
                            </div>
                            <h3 className="font-libre text-lg mb-4">{item.title}</h3>
                            
                            {item.type === "text" && (
                                <p className="font-jakarta-sans text-sm text-neutral-600">{item.description}</p>
                            )}
                            
                            {item.type === "list" && (
                                <ul className="flex flex-col gap-5">
                                    {item.list.map((point, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm font-jakarta-sans text-neutral-600">
                                            <FaCheckCircle className="text-green-600 shrink-0 mt-0.5" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

function Izin({data}) {
    return <div className="my-20 flex flex-col justify-center items-center">
        <h1 className=" flex-1 font-libre text-2xl mb-4 ">{data.certifications.title}</h1>
        <p className="font-jakarta-sans text-sm text-center whitespace-pre-line text-gray-600 mb-10">{data.certifications.description}</p>
        <div className=" grid grid-cols-3 gap-4 ">
                {data.certifications.items.map((item) => {
                    const Icon = item.icon
                    return ( 
                    <div key={item.id} className="bg-gray-100 py-10 px-10 flex flex-col items-center shadow-xl">
                        <div className="text-primary text-2xl">
                            <Icon />
                        </div>

                        <div>
                            <h3 className="font-jakarta-sans font-bold text-gray-700 mt-3 text-center">{item.label}</h3>
                            {item.sublabel && (
                                <p className="text-center text-sm font-bold font-jakarta-sans text-gray-700"> {item.sublabel} </p>
                            )}
                        </div>
                    </div> 
                )
                })}
        </div>
    </div>
}