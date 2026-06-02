import { 
    MdFlightTakeoff, 
    MdHotel, 
    MdGroup, 
    MdCheckCircleOutline, 
    MdArrowForward 
} from "react-icons/md"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import HeroImg from "./assets/kabah.png"
import HomePacksImg from "./assets/makkah-hotel.png"
import HomePacksImg2 from "./assets/nabawi2.png"



function Hero() {
    return <div className=" relative w-full h-screen">
        <img src={HeroImg} className=" absolute inset-0 w-full h-full object-cover" />
        <div className=" absolute inset-0 bg-linear-to-b from-transparent to-white"/>

        {/* Text Content */}
        <div className=" relative z-10 flex flex-col items-center justify-center h-full text-center">
            <h1 className=" font-libre text-black/70 text-6xl italic"><span className="text-7xl">I</span>badah <span className="text-7xl">N</span>yaman, <span className="text-7xl">H</span>ati <span className="text-7xl">T</span>enang</h1>
            <p className="font-jakarta-sans italic text-md text-gray-600">Mulai perjalanan spiritual Anda bersama Umrah Noble. Kami menghadirkan <br /> pengalaman ibadah yang tenang, tertata, dan penuh kekhidmatan.</p>
            <div className="flex gap-5 mt-4">
                <button className="bg-primary text-neutral font-jakarta-sans py-4 px-4 text-sm rounded-full font-bold cursor-pointer hover:bg-transparent border-2 border-primary hover:text-primary duration-150">Lihat Paket Umrah</button>
                <button className="bg-secondary text-neutral font-jakarta-sans py-4 px-4 text-sm rounded-full font-bold cursor-pointer hover:bg-transparent  hover:text-neutral hover:border-2 border-secondary duration-150">Konsultasi Gratis</button>
            </div>
        </div>
        
    </div>
}

function FeaturedCard({icon, title, description}) {
    
    return (
       <div className="p-6 w-64 rounded-2xl bg-neutral-100 shadow-xl flex flex-col">
                <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center text-xl mb-3">
                    {icon}
                </div>
                <h3 className="text-lg font-libre py-2">{title}</h3>
                <p className="text-sm font-jakarta-sans text-neutral-500">{description}</p>
            </div>
    )
}

function FeaturedSection() {
    let cardDetails = [
        {
            id: 1,
            icon: <MdFlightTakeoff color="#008751"/>, 
            title: "Penerbangan Langsung",
            description: "Meminimalisir kelelahan dengan maskapai premium yang membawa Anda langsung menuju Tanah Suci."
        },
        {
            id: 2,
            icon: <MdHotel color="#008751"/>, 
            title: "Akomodasi Premium",
            description: "Istirahat optimal di hotel bintang 5 yang berjarak sangat dekat dari pelataran Masjidil Haram dan Masjid Nabawi."
        },
        {
            id: 3,
            icon: <MdGroup color="#008751"/>, 
            title: "Pembimbing Berpengalaman",
            description: "Didampingi oleh muthawwif berilmu yang membimbing setiap langkah ibadah sesuai sunnah."
        },
    ]
    return <div className="mx-auto mt-9">
        <h3 className="font-jakarta-sans font-bold text-sm flex justify-center text-secondary py-4">NILAI KAMI</h3>
        <h1 className="font-libre text-2xl flex justify-center">Perjalanan Tanpa beban </h1>
        <div className=" flex grid-cols-3 justify-center py-14 gap-6" >
            {cardDetails.map((cards) => (
                <FeaturedCard
                    key={cards.id}
                    icon={cards.icon}
                    title={cards.title}
                    description={cards.description}
                />
            ))}
        </div>
    </div>
}

function PackageCard({ badge, image, title, description, features, price, id }) {
    const navigate = useNavigate();
  return (
    <div className="w-72 rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col">
      
      {/* Gambar + Badge */}
      <div className="relative">
        <img src={image} className="w-full h-48 object-cover" />
        {badge && (
          <span className="absolute top-3 right-3 bg-neutral/50 text-xs font-jakarta-sans font-semibold px-3 py-1 rounded-full text-amber-950 shadow">
            {badge}
          </span>
        )}
      </div>

      {/* Konten */}
      <div className="p-5 flex flex-col gap-3">
        <h3 className="font-libre text-xl">{title}</h3>
        <p className="text-xs text-neutral-500 font-jakarta-sans">{description}</p>

        {/* Features */}
        <ul className="flex flex-col gap-1">
          {features.map((item, index) => (
            <li key={index} className="flex items-center gap-2 text-xs text-neutral-600 font-jakarta-sans">
              <MdCheckCircleOutline className="text-primary" />
              {item}
            </li>
          ))}
        </ul>

        {/* Harga + Tombol */}
        <div className="flex items-center justify-between mt-3">
          <div>
            <p className="text-xs text-neutral-400 font-jakarta-sans">Mulai dari</p>
            <p className="text-lg font-bold text-primary font-libre">Rp {price}</p>
          </div>
          <button onClick={() => navigate(`/details-package/${id}`)} className="bg-white text-primary border-2 hover:bg-primary hover:text-white transition rounded-full w-10 h-10 flex items-center justify-center">
            <MdArrowForward />
          </button>
        </div>

      </div>
    </div>
  )
}

function PackageShowCase() {
    let cardPacks = [
        {
            id: 1,
            badge: "Rekomendasi",
            image: HomePacksImg,
            title: "Umrah Reguler 9 Hari",
            description: "Fokus ibadah dengan kenyamanan optimal untuk keluarga.",
            features: [
                "Hotel Bintang 5 Makkah & Madinah",
                "Penerbangan Saudia Airlines",
                "Makan 3x Sehari (Menu Nusantara)"
            ],
            price: "32.500.000"
        },
        {
            id : 2,
            badge: "Premium",
            image : HomePacksImg2,
            title : "Umrah VIP 12 Hari",
            description : "Pengalaman ibadah eksklusif dengan fasilitas kelas atas.",
            features : [
                "Hotel View Ka'bah (Zamzam Tower)",
                "Penerbangan Business Class",
                "Kereta Cepat Haramain Makkah-Madinah"
            ],
            price : "48.000.000"
        }
    ];
    return <div className="mx-15 mt-9 ">
        <h3 className="font-jakarta-sans font-bold text-sm mb-4 text-secondary">PILIHAN IBADAH</h3>
        <div className="flex justify-between">
        <h1 className="font-libre text-2xl">Paket Unggulan Kami</h1>
        <Link to="/package" className="font-jakarta-sans flex justify-between items-center gap-2 text-primary font-bold text-sm">Lihat Semua Paket <span><MdArrowForward /></span></Link>
        </div>
        <div className="justify-center flex gap-6 my-7">
            {cardPacks.map((cards) => (
            <PackageCard 
                key={cards.id}
                id={cards.id}
                badge={cards.badge}
                image={cards.image}
                title={cards.title}
                description={cards.description}
                features={cards.features}
                price={cards.price}
            />
        ))}
        </div>
    </div>
}


export default function Home () {
    return <section>
        <Hero />
        <FeaturedSection />
        <PackageShowCase />
    </section>    
}