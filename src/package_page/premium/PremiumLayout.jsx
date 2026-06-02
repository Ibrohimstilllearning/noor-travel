import { useNavigate } from "react-router-dom"
import { MdFlight, MdHotel, MdTrain, MdVerified, MdRestaurant, MdGroup, MdDirectionsBus, MdArrowBack } from "react-icons/md"

const iconMap = {
    MdFlight: <MdFlight />,
    MdHotel: <MdHotel />,
    MdTrain: <MdTrain />,
    MdVerified: <MdVerified />,
    MdRestaurant: <MdRestaurant />,
    MdGroup: <MdGroup />,
    MdDirectionsBus: <MdDirectionsBus />,
}

// =====================
// 1. HERO SECTION
// =====================
function HeroSection({ pkg }) {
    const navigate = useNavigate()

    return (
        <div className="relative w-full h-screen">

            {/* Background gambar */}
            <img src={pkg.image} className="absolute inset-0 w-full h-full object-cover" />

            {/* Overlay gradasi bawah */}
            <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-white" />

            {/* Tombol back */}
            <button
                onClick={() => navigate('/')}
                className="absolute top-6 left-6 z-20 flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white font-jakarta text-sm px-4 py-2 rounded-full">
                <MdArrowBack /> Kembali
            </button>

            {/* Konten tengah */}
            <div className="relative z-10 flex flex-col items-center justify-end h-full text-center pb-32 gap-4">
                
                {/* Badge */}
                <span className="bg-white/20 backdrop-blur-sm text-amber-300 text-xs font-jakarta-sans font-semibold px-4 py-1.5 rounded-full border border-amber-200">
                    {pkg.badge}
                </span>

                {/* Judul */}
                <h1 className="font-libre text-6xl text-white text-shadow-black drop-shadow-lg">
                    {pkg.title}
                </h1>

                {/* Deskripsi */}
                <p className="font-jakarta-sans text-shadow-black text-white/90 text-sm max-w-lg">
                    {pkg.description}
                </p>

                {/* Tombol */}
                <div className="flex gap-4 mt-2">
                    <button className="bg-primary text-white font-jakarta-sans font-semibold px-6 py-3 rounded-full hover:bg-primary/80 transition">
                        Daftar Sekarang
                    </button>
                    <button className="bg-white/20 backdrop-blur-sm text-amber-300 font-jakarta-sans font-semibold px-6 py-3 rounded-full border border-amber-200 hover:bg-white/30 transition">
                        Konsultasi via WhatsApp
                    </button>
                </div>
            </div>
        </div>
    )
}

// =====================
// 2. INFO BAR
// =====================
function InfoBar({ pkg }) {
    return (
        <div className="mx-16 -mt-6 relative z-20">
            <div className="bg-white rounded-2xl shadow-lg flex justify-around p-6 border border-neutral-100">
                <div>
                    <p className="text-xs text-neutral-400 font-jakarta-sans uppercase tracking-widest">Harga Mulai</p>
                    <p className="text-2xl font-bold text-primary font-libre">Rp {pkg.price}</p>
                    {pkg.priceLabel && (
                        <p className="text-xs text-neutral-400 font-jakarta-sans">{pkg.priceLabel}</p>
                    )}
                </div>

                <div className="border-l border-neutral-100 pl-8">
                    <p className="text-xs text-neutral-400 font-jakarta-sans uppercase tracking-widest">Durasi Perjalanan</p>
                    <p className="text-2xl font-libre text-neutral-800">{pkg.days}</p>
                </div>

                <div className="border-l border-neutral-100 pl-8">
                    <p className="text-xs text-neutral-400 font-jakarta-sans uppercase tracking-widest">Keberangkatan</p>
                    <p className="text-2xl font-libre text-neutral-800">{pkg.schedule}</p>
                </div>
            </div>
        </div>
    )
}

// =====================
// 3. FACILITIES SECTION
// =====================
function FacilitiesSection({ pkg }) {
    return (
        <div className="px-16 py-20">

            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="font-libre text-3xl">Fasilitas Premium</h2>
                <p className="font-jakarta-sans text-neutral-500 text-sm mt-2">
                    Dirancang khusus untuk menghadirkan kenyamanan maksimal selama ibadah Anda.
                </p>
            </div>

            {/* Card Grid */}
            <div className="flex gap-6 justify-center">
                {pkg.facilities.map((item, index) => (
                    <div key={index} className="flex-1 max-w-xs rounded-2xl overflow-hidden border border-neutral-100 shadow-xl flex flex-col hover:-translate-y-3 transition-all duration-200 ease-out">
                        
                        {/* Gambar */}
                        {item.image && (
                            <img src={item.image} className="w-full h-44 object-cover" />
                        )}

                        {/* Konten */}
                        <div className="p-5 flex flex-col gap-2">
                            <span className="text-2xl text-primary">
                                {iconMap[item.icon]}
                            </span>
                            <h3 className="font-libre text-lg">{item.title}</h3>
                            <p className="text-sm text-neutral-500 font-jakarta">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

// =====================
// 4. ITINERARY SECTION
// =====================
function ItinerarySection({ pkg }) {
    return (
        <div className="px-16 py-20 bg-neutral-50">
            <h2 className="font-libre text-3xl mb-12">Ringkasan Perjalanan</h2>

            <div className="flex gap-12 items-start">

                {/* Kiri — timeline */}
                <div className="w-1/3 flex flex-col gap-6">
                    {pkg.itinerary.map((item, index) => (
                        <div key={index} className="flex gap-4 items-start">

                            {/* Nomor */}
                            <span className="w-8 h-8 rounded-full border-2 border-primary text-primary flex items-center justify-center text-sm font-bold font-jakarta shrink-0 mt-1">
                                {index + 1}
                            </span>

                            {/* Konten */}
                            <div className="bg-white rounded-2xl p-4 shadow-sm flex-1">
                                <h4 className="font-libre text-lg">{item.day}</h4>
                                <p className="text-sm text-neutral-500 font-jakarta mt-1">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Kanan — gambar + quote */}
                <div className="w-2/3 relative">
                    <img src={pkg.image} className="w-full h-96 object-cover rounded-2xl" />

                    {/* Quote overlay */}
                    <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                        <p className="font-jakarta italic text-neutral-700 text-sm">
                            "{pkg.quote}"
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

// =====================
// 5. INCLUDED SECTION
// =====================
function IncludedSection({ pkg }) {
    return (
        <div className="px-16 py-20 text-center">
            <h2 className="font-libre text-3xl mb-12">Termasuk dalam Paket</h2>

            {/* 4 item */}
            <div className="flex justify-center gap-12 flex-wrap">
                {pkg.included.map((item, index) => (
                    <div key={index} className="flex flex-col items-center gap-2 w-36">
                        <span className="text-3xl text-primary">
                            {iconMap[item.icon]}
                        </span>
                        <h4 className="font-jakarta font-semibold text-sm">{item.title}</h4>
                        <p className="text-xs text-neutral-500 font-jakarta text-center">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

// =====================
// MAIN LAYOUT
// =====================
export default function PremiumLayout({ pkg }) {
    return (
        <>
            <HeroSection pkg={pkg} />
            <InfoBar pkg={pkg} />
            <FacilitiesSection pkg={pkg} />
            <ItinerarySection pkg={pkg} />
            <IncludedSection pkg={pkg} />
        </>
    )
}