import { MdFlight, MdHotel, MdFreeBreakfast } from "react-icons/md"

const iconMap = {
    MdFlight: <MdFlight />,
    MdHotel: <MdHotel />,
    MdFreeBreakfast: <MdFreeBreakfast />,
}

export default function RegulerLayout({ pkg }) {
    return <>
        <HeroSection pkg={pkg} />
        <FacilitiesSection pkg={pkg}/>
        <ItinerarySection pkg={pkg}/>
        <IncludedSection pkg={pkg}/>
        <CTASection pkg={pkg}/>
    </>
}

function HeroSection({ pkg }) {
    return (
        <div className="relative w-full h-screen flex">

            {/* Kiri — konten teks */}
            <div className="w-1/2 flex flex-col justify-center px-16 gap-5 z-10">

                {/* Badge + Durasi */}
                <div className="flex items-center gap-3">
                    {pkg.popular && (
                        <span className="bg-primary text-white text-xs font-jakarta-sans font-semibold px-3 py-1 rounded-full">
                            Paling Populer
                        </span>
                    )}
                    <span className="flex items-center gap-1 text-sm text-neutral-500 font-jakarta-sans">
                        {pkg.days}
                    </span>
                </div>

                {/* Judul */}
                <h1 className="font-libre text-5xl text-neutral-800 leading-tight">
                    {pkg.title}
                </h1>

                {/* Harga + Keberangkatan */}
                <div className="flex gap-10">
                    <div>
                        <p className="text-xs text-neutral-400 font-jakarta-sans uppercase tracking-wide">Mulai Dari</p>
                        <p className="text-3xl font-bold text-primary font-libre">Rp {pkg.price}</p>
                    </div>
                    <div>
                        <p className="text-xs text-neutral-400 font-jakarta-sans uppercase tracking-wide">Keberangkatan</p>
                        <p className="text-lg font-jakarta-sans font-semibold text-neutral-700">{pkg.schedule}</p>
                    </div>
                </div>

                {/* Tombol */}
                <button className="bg-primary text-white font-jakarta-sans font-semibold px-6 py-3 rounded-full w-fit hover:bg-transparent hover:border-2 border-primary hover:text-primary transition">
                    Amankan Kursi Anda
                </button>
            </div>

            {/* Kanan — gambar */}
            <div className="w-1/2 relative">
                <img src={pkg.image} className="w-full h-full object-cover" />
                {/* Gradient kiri agar menyatu dengan teks */}
                <div className="absolute inset-0 bg-linear-to-r from-white via-white/30 to-transparent" />
            </div>

        </div>
    )
}



function FacilitiesSection({ pkg }) {
    return (
        <div className="px-16 py-20">

            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="font-libre text-3xl">Fasilitas Perjalanan</h2>
                <div className="w-12 h-0.5 bg-primary mx-auto mt-3" />
            </div>

            {/* Card Grid */}
            <div className="flex gap-6 justify-center">
                {pkg.facilities.map((item, index) => (
                    <div key={index} className="flex-1 max-w-xs p-6 rounded-2xl border border-neutral-100 shadow-xl hover:shadow-primary hover:shadow-lg hover:-translate-y-4 transition ease-out flex flex-col gap-3">
                        
                        {/* Icon */}
                        <span className="text-2xl text-primary">
                            {iconMap[item.icon]}
                        </span>

                        <h3 className="font-libre text-lg">{item.title}</h3>
                        <p className="text-sm text-neutral-500 font-jakarta-sans">{item.description}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

function ItinerarySection({ pkg }) {
    return (
        <div className="flex px-16 py-20 gap-12 items-center bg-neutral-50">

            {/* Kiri — gambar */}
            <div className="w-1/2">
                <img src={pkg.image} className="w-full h-96 object-cover rounded-2xl" />
            </div>

            {/* Kanan — timeline */}
            <div className="w-1/2 flex flex-col gap-4">
                <p className="text-xs text-primary font-jakarta font-semibold uppercase tracking-widest">
                    Ringkasan Perjalanan
                </p>
                <h2 className="font-libre text-3xl text-neutral-800">
                    {pkg.days} Menuju Ketenangan Hati
                </h2>

                <div className="flex flex-col gap-4 mt-4">
                    {pkg.itinerary.map((item, index) => (
                        <div key={index} className="flex gap-4 items-start">
                            
                            {/* Nomor */}
                            <span className="w-8 h-8 rounded-full border-2 border-primary text-primary flex items-center justify-center text-sm font-bold font-jakarta shrink-0">
                                {index + 1}
                            </span>

                            {/* Konten */}
                            <div>
                                <h4 className="font-libre text-lg">{item.day}</h4>
                                <p className="text-sm text-neutral-500 font-jakarta-sans mt-1">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

import { MdVerified, MdRestaurant, MdGroup, MdDirectionsBus } from "react-icons/md"

const includedIconMap = {
    MdVerified: <MdVerified />,
    MdRestaurant: <MdRestaurant />,
    MdGroup: <MdGroup />,
    MdDirectionsBus: <MdDirectionsBus />,
}

function IncludedSection({ pkg }) {
    return (
        <div className="px-16 py-20 text-center">
            <h2 className="font-libre text-3xl mb-12">Sudah Termasuk Dalam Paket</h2>

            {/* 4 item */}
            <div className="flex justify-center gap-10 flex-wrap">
                {pkg.included.map((item, index) => (
                    <div key={index} className="flex flex-col items-center gap-2 w-36">
                        <span className="text-3xl text-primary">
                            {includedIconMap[item.icon]}
                        </span>
                        <h4 className="font-jakarta-sans font-semibold text-sm">{item.title}</h4>
                        <p className="text-xs text-neutral-500 font-jakarta-sans text-center">{item.description}</p>
                    </div>
                ))}
            </div>

            {/* Quote */}
            <div className="mt-12 max-w-xl mx-auto border shadow-md border-neutral-200 rounded-2xl p-6">
                <p className="font-jakarta-sans italic text-neutral-600 text-sm">
                    "{pkg.quote}"
                </p>
            </div>
        </div>
    )
}

function CTASection() {
    return (
        <div className="bg-neutral-100 px-16 py-20 text-center">
            <h2 className="font-libre text-3xl mb-3">Siap Memulai Perjalanan Suci?</h2>
            <p className="font-jakarta-sans text-neutral-500 text-sm mb-8">
                Kuota terbatas untuk setiap keberangkatan. Hubungi konsultan umrah kami untuk konsultasi gratis dan reservasi hari ini.
            </p>
            <div className="flex gap-4 justify-center">
                <button className="bg-primary text-white font-jakarta-sans font-semibold px-6 py-3 rounded-full hover:bg-primary/80 transition">
                    Hubungi via WhatsApp
                </button>
                <button className="border border-neutral-400 text-neutral-600 font-jakarta font-semibold px-6 py-3 rounded-full hover:bg-neutral-200 transition">
                    Unduh Brosur PDF
                </button>
            </div>
        </div>
    )
}