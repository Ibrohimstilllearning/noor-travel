import { Link } from "react-router-dom";
function LinkNav() {
    return <ul className=" flex gap-4 justify-center items-center font-jakarta-sans font-bold text-black/65 ">
                <li>
                    <Link to="/" className="hover:text-primary">Home</Link>
                </li>
                <li>
                    <Link to="/package" className="hover:text-primary">Package</Link>
                </li>
                <li>
                    <a href="/about-us" className="hover:text-primary">About Us</a>
                </li>
                <li>
                    <a href="/contact" className="hover:text-primary">Contact
                    </a>
                </li>
            </ul>
}

function NavButton() {
    return <button className=" text-white py-2 px-3 bg-primary mr-4 font-bold rounded-4xl font-jakarta-sans">
                Daftar Sekarang
         </button>
}

function LogoNav() {
    return <h1 className=" items-center flex font-libre ml-4 font-bold text-xl text-primary">
        Noor Madinah
    </h1>
}


export default function Navbar () {
    return (
        <div className="flex justify-between py-4 gap-4 bg-white shadow">
            <LogoNav />
            <LinkNav />
            <NavButton />
        </div>
    );
}