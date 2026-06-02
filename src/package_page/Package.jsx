import FirstCardImg from "../assets/kabah.png"
import SecondCardImg from "../assets/hotel-nabawi.png"
import ThirdCardImg from "../assets/nabawi-night.png"
import { MdFlightTakeoff, MdFlight, MdHotel, MdFreeBreakfast, MdCorporateFare, MdCalendarMonth, MdGroup, MdCheckCircleOutline, MdArrowForward, MdStar } from "react-icons/md"

function HeroPackage() {
    return <div className=" mx-auto justify-center flex py-20">
       <div className="text-center ">
             <h1 className="font-libre text-5xl text-primary pb-2">Perjalanan Suci Anda Dimulai di Sini</h1>
            <h3 className="text-md font-jakarta-sans text-gray-600">Temukan paket Umrah yang dirancang dengan cermat untuk memberikan <br /> pengalaman ibadah yang tenang, nyaman, dan berkesan.</h3>
       </div>
    </div>
}

function Cards({ days, image, title, description, features, price, popular }) {
    return (
        <div className="w-72 rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col">

            {/* Gambar + Badge */}
            <div className="relative">
                <img src={image} className="w-full h-48 object-cover" />

                {/* Badge hari */}
                <span className="absolute top-3 left-3 bg-white/70 text-xs font-jakarta font-semibold px-3 py-1 rounded-full text-neutral-700">
                    {days}
                </span>

                {/* Badge terpopuler */}
                {popular && (
                    <span className="absolute top-3 right-3 bg-primary text-white text-xs font-jakarta font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                        <MdStar /> Terpopuler
                    </span>
                )}
            </div>

            {/* Konten */}
            <div className="p-5 flex flex-col gap-3">
                <h3 className="font-libre text-xl text-primary">{title}</h3>
                <p className="text-xs text-neutral-500 font-jakarta-sans">{description}</p>

                {/* Features */}
                <ul className="flex flex-col gap-2 mt-1">
                    {features.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-xs text-neutral-600 font-jakarta">
                            <span className="text-primary">{item.icon}</span>
                            {item.text}
                        </li>
                    ))}
                </ul>

                {/* Divider */}
                <hr className="border-neutral-200 mt-2" />

                {/* Harga + Tombol */}
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-xs text-neutral-400 font-jakarta">Mulai dari</p>
                        <p className="text-lg font-bold text-primary font-libre">Rp {price}</p>
                    </div>
                    <button className="bg-primary text-white font-jakarta text-sm font-semibold px-4 py-2 rounded-full hover:bg-primary/80 transition">
                        Detail
                    </button>
                </div>
            </div>
        </div>
    )
}
    

function CardsPackage() {
    let packages = [
        {
            id: 1,
            days: "9 Hari",
            image: FirstCardImg,
            title: "Paket Reguler",
            description: "Perjalanan standar yang nyaman untuk pengalaman Umrah pertama yang...",
            features: [
                { icon: <MdFlightTakeoff />, text: "Penerbangan Langsung" },
                { icon: <MdHotel />, text: "Hotel Bintang 4 (Makkah & Madinah)" },
                { icon: <MdFreeBreakfast />, text: "Makan 3x Sehari (Menu Indonesia)" },
            ],
            price: "28.500.000",
            popular: false,
        },
        {
            id: 2,
            days: "12 Hari",
            image: SecondCardImg,
            title: "Paket Premium",
            description: "Layanan eksklusif dengan akomodasi terdekat untuk fokus ibadah maksimal.",
            features: [
                { icon: <MdFlight />, text: "Saudia Airlines (Direct)" },
                { icon: <MdCorporateFare />, text: "Hotel Bintang 5 (ZamZam/Pullman)" },
                { icon: <MdFlight />, text: "Transportasi Bus Eksekutif" },
            ],
            price: "35.000.000",
            popular: true,
        },
        {
            id: 3,
            days: "15 Hari",
            image: ThirdCardImg,
            title: "Paket Ramadhan",
            description: "Raih pahala maksimal dengan beribadah di bulan suci bersama pembimbing...",
            features: [
                { icon: <MdCalendarMonth />, text: "Awal/Pertengahan/Akhir Ramadhan" },
                { icon: <MdFreeBreakfast />, text: "Sahur & Iftar Spesial" },
                { icon: <MdGroup />, text: "Kajian Spesial Ramadhan" },
            ],
            price: "42.000.000",
            popular: false,
        },
    ]

    return (
        <div className="flex justify-center gap-6 px-10 pb-20 flex-wrap">
            {packages.map((pkg) => (
                <Cards
                    key={pkg.id}
                    days={pkg.days}
                    image={pkg.image}
                    title={pkg.title}
                    description={pkg.description}
                    features={pkg.features}
                    price={pkg.price}
                    popular={pkg.popular}
                />
            ))}
        </div>
    )
}


export default function Package() {
    return <>
        <HeroPackage />
        <CardsPackage />
    </>
}