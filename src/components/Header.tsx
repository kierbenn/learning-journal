
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header className="bg-white">
            <div className='flex flex-col sm:flex-row items-center max-w-5xl m-auto p-4 sm:p-6 md:px-8 gap-4'>
            <div className='flex'>
                <img src="images/logo.svg" alt="logo" />
                <h2 className='text-xl font-bold font-[Roboto] ml-2'>My learning journal</h2>
            </div>
                <nav className="sm:ml-auto">
                    <ul className='flex gap-6 text-xs font-medium'>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/about-me">ABOUT ME</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}