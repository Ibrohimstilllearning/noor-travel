import { useNavigate } from "react-router-dom"

export default function AboutUs() {
    const navigate = useNavigate();
    return <div className="p-96 flex justify-center items-center">
        <div className=" text-center border-l border-t border-b rounded-tl-2xl rounded-bl-2xl py-2">
             <h1 className="font-libre text-4xl">Coming Soon</h1>
            <h3 className="mt-5 font-jakarta-sans">On progress, if u want to having connection with me please contact me <span>+62 821-3851-6750</span></h3>
        </div>
        <button onClick={() => navigate('/')} className="font-jakarta-sans font-bold text-white bg-primary py-10 px-3 rounded-br-2xl rounded-tr-2xl">Back to Home</button>
    </div>
}