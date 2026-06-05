import { GoBold, GoLocation } from "react-icons/go";
import { FaRegEnvelope } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";
export default function Contact () {
    return <>
        <HeroContact />
        <SubmitContact />
    </>
}

function HeroContact () {
    return <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-center font-libre text-5xl text-primary mb-5">Hubungi Kami</h1>
        <p className="text-center font-jakarta-sans text-lg text-gray-600 ">Kami siap membantu mempersiapkan perjalanan ibadah Anda. Jangan ragu <br /> untuk menghubungi kami jika ada pertanyaan mengenai paket atau layanan <br /> kami.</p>
    </div>
}

function SubmitContact () {
    return <div className="grid grid-cols-2 justify-between items-center mx-10 gap-4 my-5 mb-14 ">
        <div className="flex flex-col items-start px-10 justify-center bg-white shadow-xl py-10 rounded-3xl ">
            <h1 className="font-libre text-4xl text-primary mb-10">Kirim Pesan</h1>
                <label htmlFor="" className="font-jakarta-sans font-bold text-gray-600 mb-3
                ">Nama Lengkap</label>
                <input type="text" placeholder="Masukkan Nama Anda" className="font-jakarta-sans border-b-2 border-gray-300 placeholder-gray-300 outline-none  focus:border-primary transition resize-none w-full py-2 mb-4" />


                <label htmlFor="" className="font-jakarta-sans font-bold text-gray-600 mb-3
                ">Email</label>
                <input type="email" placeholder="Masukkan Nama Anda" className="font-jakarta-sans border-b-2 border-gray-300 outline-none placeholder-gray-300  focus:border-primary transition resize-none w-full py-2 mb-4" />


                <label htmlFor="" className="font-jakarta-sans font-bold text-gray-600 mb-3
                ">Pesan</label>
               <textarea name="Pesan" id="" placeholder="Masukkan text..." className="font-jakarta-sans placeholder-gray-300 border-b-2 border-gray-300 outline-none  focus:border-primary transition resize-none w-full py-4 mb-4"></textarea>

               <button className="bg-primary py-3 w-full flex justify-center rounded-3xl items-center font-jakarta-sans font-black text-white">Kirim</button>
        </div>
<div className="flex flex-col items-start px-10 justify-center">
    <h1 className="font-libre text-4xl text-primary mb-10">Kantor Kami</h1>
    
    <ul className="flex flex-col gap-6 mb-10">
        
        {/* Alamat */}
        <li className="flex items-start gap-3">
            <div className="text-amber-800 mt-1">
                <GoLocation />
            </div>
            <div className="flex flex-col gap-1">
                <p className="font-jakarta-sans font-bold">Alamat Utama</p>
                <p className="font-jakarta-sans text-sm text-gray-600">
                    Jl. M.H. Thamrin No. 1, Jakarta Pusat <br />
                    DKI Jakarta, 10310
                </p>
            </div>
        </li>

        {/* Email */}
        <li className="flex items-start gap-3">
            <div className="text-amber-800 mt-1">
                <FaRegEnvelope />
            </div>
            <div className="flex flex-col gap-1">
                <p className="font-jakarta-sans font-bold">Email</p>
                <p className="font-jakarta-sans text-sm text-gray-600">
                    info@umrahnoble.com
                </p>
            </div>
        </li>

        {/* Telepon */}
        <li className="flex items-start gap-3">
            <div className="text-amber-800 mt-1">
                <MdOutlinePhone />
            </div>
            <div className="flex flex-col gap-1">
                <p className="font-jakarta-sans font-bold">Telepon</p>
                <p className="font-jakarta-sans text-sm text-gray-600">
                    +62 21 1234 5678
                </p>
            </div>
        </li>
    </ul>

    <MapSection />
    <button className="w-full bg-green-400 flex items-center justify-center font-jakarta-sans font-bold text-white py-3 mt-6 shadow-2xl rounded-full">Chat via WhatsApp</button>
</div>


        </div>
    
}

function MapSection() {
    return (
        <div className="mt-6 rounded-2xl w-full overflow-hidden shadow-sm">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613!3d-6.1944491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sJl.%20M.H.%20Thamrin%2C%20Jakarta%20Pusat!5e0!3m2!1sen!2sid!4v1234567890"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
            />
        </div>
    )
}