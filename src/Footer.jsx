export default function Footer() {
    return <footer className="h-full bg-gray-100">
        <div className="flex justify-between items-center mx-20 py-20">
            <div>
                <h1 className="font-libre text-5xl py-5 text-primary">Noor Travel</h1>
                <p className="font-jakarta-sans text-xs">© 2024 Umrah Noble Travel. Guided by Serenity, Clarity, and Faith.</p>
            </div>
            <div className="">
                <ul>
                    <li><a href="#" className="font-jakarta-sans font-bold text-gray-600">Privacy Policy</a></li>
                    <li><a href="#" className="font-jakarta-sans font-bold text-gray-600">Terms of Service</a></li>
                    <li><a href="#" className="font-jakarta-sans font-bold text-gray-600">Legal Certification</a></li>
                </ul>
            </div>
        </div>
    </footer>
}