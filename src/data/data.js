import FirstCardImg from "../assets/kabah.png"
import SecondCardImg from "../assets/hotel-nabawi.png"
import ThirdCardImg from "../assets/nabawi-night.png"

//Icon
import { FaEye, FaMedal} from "react-icons/fa"
import { RiFlag2Line } from "react-icons/ri"


// Gambar fasilitas
import PlaneImg from "../assets/plane-seat.png"
import HotelImg from "../assets/haramain-hotel.png"
import TrainImg from "../assets/haramain-railway.png"
import SujoodImg from "../assets/sujood.png"
import { MdShield, MdVerified } from "react-icons/md"
import { HiUserGroup } from "react-icons/hi"

export const packagesData = [
    {
        // === DATA UMUM (dipakai di card Home & Package) ===
        id: 1,
        type: "reguler",
        days: "9 Hari",
        badge: "Paling Populer",
        image: FirstCardImg,
        title: "Paket Umrah Reguler 9 Hari",
        description: "Perjalanan standar yang nyaman untuk pengalaman Umrah pertama yang tak terlupakan.",
        price: "28.500.000",
        popular: true,

        // === DATA DETAIL (dipakai di PackageDetail) ===
        schedule: "Oktober - Desember 2024",

        // Fasilitas — untuk section "Fasilitas Perjalanan"
        facilities: [
            {
                image: PlaneImg,
                icon: "MdFlight",
                title: "Penerbangan Langsung",
                description: "Terbang nyaman bersama Saudia Airlines dengan rute langsung (Direct) menuju Madinah/Jeddah tanpa transit."
            },
            {
                image: HotelImg,
                icon: "MdHotel",
                title: "Akomodasi Bintang 4",
                description: "Istirahat tenang di hotel terpilih Makkah & Madinah dengan jarak yang sangat terjangkau ke Masjidil Haram & Nabawi."
            },
            {
                image: null,
                icon: "MdFreeBreakfast",
                title: "Konsumsi 3x Sehari",
                description: "Menu khas Indonesia yang lezat dan higienis disajikan tiga kali sehari untuk menjaga stamina ibadah Anda."
            },
        ],

        // Itinerary — untuk section "Ringkasan Perjalanan"
        itinerary: [
            {
                day: "Madinah (4 Hari)",
                description: "Ziarah ke Raudhah, Makam Rasulullah SAW, serta kunjungan ke situs bersejarah di sekitar kota Madinah Al-Munawwarah."
            },
            {
                day: "Makkah (5 Hari)",
                description: "Fokus pada ibadah Umrah utama dan memperbanyak ibadah di Masjidil Haram dengan bimbingan Mutawwif berpengalaman."
            },
        ],

        // Included — untuk section "Sudah Termasuk Dalam Paket"
        included: [
            { icon: "MdVerified", title: "Visa Umrah", description: "Pengurusan visa oleh tim kami, langkah tanpa kendala." },
            { icon: "MdRestaurant", title: "Full Board Meals", description: "Sarapan, makan siang, dan makan malam setiap hari." },
            { icon: "MdGroup", title: "Mutawwif Bersertifikat", description: "Pembimbing ibadah yang berpengalaman dan komunikatif." },
            { icon: "MdDirectionsBus", title: "Transportasi Bus", description: "Bus eksekutif AC model terbaru sepanjang perjalanan." },
        ],

        // Quote — untuk bagian bawah section included
        quote: "Kami memastikan setiap detik perjalanan Anda terhindar dari kerepotannya, sehingga Anda dapat fokus sepenuhnya pada ibadah.",
    },

    {
        // === DATA UMUM ===
        id: 2,
        type: "premium",
        days: "12 Hari",
        badge: "Premium Signature",
        image: SecondCardImg,
        title: "Umrah VIP 12 Hari",
        description: "Rasakan perjalanan spiritual penuh ketenangan dengan fasilitas bintang 5, bimbingan eksklusif, dan kenyamanan tanpa kompromi.",
        price: "48.000.000",
        popular: false,

        // === DATA DETAIL ===
        priceLabel: "Quad Room / Pax",
        schedule: "Okt - Des 2024",

        // Fasilitas
        facilities: [
            {
                image: PlaneImg,
                icon: "MdFlight",
                title: "Penerbangan Bisnis",
                description: "Saudia Airlines Business Class. Langsung menuju tujuan tanpa transit untuk kenyamanan istirahat Anda."
            },
            {
                image: HotelImg,
                icon: "MdHotel",
                title: "Hotel Bintang 5",
                description: "Menginap di Hotel View Ka'bah (ZamZam Tower) di Makkah dan hotel pelataran utama di Madinah."
            },
            {
                image: TrainImg,
                icon: "MdTrain",
                title: "Haramain Railway",
                description: "Perjalanan cepat dan eksklusif antara Makkah dan Madinah menggunakan kereta cepat kelas eksekutif."
            },
        ],

        // Itinerary
        itinerary: [
            {
                day: "5 Hari Madinah",
                description: "Ziarah Raudhah, Makam Rasulullah, dan napak tilas sejarah Islam di kota Nabi yang damai."
            },
            {
                day: "7 Hari Makkah",
                description: "Pelaksanaan Umrah utama, thawaf sunnah, dan iktikaf di Masjidil Haram dengan akses mudah dari hotel."
            },
        ],

        // Included
        included: [
            { icon: "MdVerified", title: "Visa Umrah", description: "Proses cepat & pasti" },
            { icon: "MdRestaurant", title: "Full Board Meals", description: "Menu nusantara & internasional" },
            { icon: "MdGroup", title: "Mutawwif Eksklusif", description: "Pembimbing bersertifikat" },
            { icon: "MdDirectionsBus", title: "Transportasi VIP", description: "Bus eksklusif selama di tanah suci" },
        ],

        quote: "Membimbing perjalanan suci Anda dengan ketenangan dan kepastian.",
    },

    {
        // === DATA UMUM ===
        id: 3,
        type: "reguler",
        days: "15 Hari",
        badge: "Ramadhan",
        image: ThirdCardImg,
        title: "Paket Ramadhan 15 Hari",
        description: "Raih pahala maksimal dengan beribadah di bulan suci bersama pembimbing berpengalaman.",
        price: "42.000.000",
        popular: false,

        // === DATA DETAIL ===
        schedule: "Maret - April 2025",

        facilities: [
            {
                image: PlaneImg,
                icon: "MdFlight",
                title: "Penerbangan Langsung",
                description: "Penerbangan langsung tanpa transit menuju Madinah."
            },
            {
                image: HotelImg,
                icon: "MdHotel",
                title: "Hotel Bintang 4",
                description: "Hotel nyaman dekat Masjidil Haram untuk ibadah optimal."
            },
            {
                image: null,
                icon: "MdFreeBreakfast",
                title: "Sahur & Iftar Spesial",
                description: "Menu sahur dan iftar khas Nusantara yang lezat setiap hari."
            },
        ],

        itinerary: [
            {
                day: "Madinah (5 Hari)",
                description: "Ziarah dan ibadah di Masjid Nabawi, Raudhah, dan situs bersejarah."
            },
            {
                day: "Makkah (10 Hari)",
                description: "Umrah, iktikaf, dan ibadah intensif di Masjidil Haram sepanjang Ramadhan."
            },
        ],

        included: [
            { icon: "MdVerified", title: "Visa Umrah", description: "Pengurusan visa lengkap." },
            { icon: "MdRestaurant", title: "Sahur & Iftar", description: "Menu spesial Ramadhan setiap hari." },
            { icon: "MdGroup", title: "Mutawwif Bersertifikat", description: "Pembimbing ibadah berpengalaman." },
            { icon: "MdDirectionsBus", title: "Transportasi Bus", description: "Bus nyaman selama perjalanan." },
        ],

        quote: "Ramadhan di Tanah Suci, pengalaman yang mengubah hidup.",
    },
]

export const aboutData = [
    {
        //Hero
        badge: "Sejarah Kami",
        heroTitle: "Membimbing Perjalanan Suci dengan Kejernihan Hati",
        heroDescription: "Berawal dari kerinduan mendalam akan Baitullah, Umrah Noble didirikan untuk menjadi sahabat terpercaya bagi para jamaah. Kami percaya bahwa setiap langkah di tanah suci harus bebas dari kekhawatiran logistik, memungkinkan Anda fokus pada ibadah.",
        heroImage: SujoodImg,

        //Visi & Misi
        card : [
            {
                id: 1,
                title: "Visi",
                type: "text",
                description: "Menjadi biro perjalanan umrah paling terpercaya di Indonesia yang menghadirkan pengalaman spiritual yang elegan, nyaman, dan transformatif bagi setiap jamaah.",
                icon: FaEye
            }, {
                id: 2,
                title: "Misi",
                type: "list",
                list: [
                    "Menyediakan pelayanan prima dengan standar hospitality terbaik.",
                    "Membimbing ibadah sesuai sunnah dengan pembimbing bersertifikat.",
                    "Menjamin transparansi biaya dan kepastian jadwal keberangkatan."
                ],
                icon: RiFlag2Line
            }
        ],

        certifications : {
            title: "Izin Resmi & Sertifikasi",
            description: "Kami beroperasi secara legal dan terdaftar resmi, memberikan Anda \nketenangan pikiran sebelum memulai perjalanan suci.",
            items : [
                {
                    id: 1,
                    label: "Kemenag RI",
                    sublabel: "PPIU No. 123/2023",
                    icon: MdVerified,
                },
                {
                    id: 2,
                    label: "Anggota HIMPUH",
                    sublabel: "",
                    icon: HiUserGroup,
                },
                {
                    id: 3,
                    label: "Terakreditasi A",
                    sublabel: "KAN",
                    icon: MdShield,
                },
            ]
        }
    }
];

