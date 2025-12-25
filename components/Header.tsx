import Image from "next/image"
import Link from "next/link"
import ThemeSwitcher from "./ThemeSwitcher"

function Header() {
  return (
    <header className="header">
        <nav>
            <div className="logo">
                <Link href="/">
                    <Image src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*_bJ2z2NRfTncHAv5UjUxwA.jpeg" alt="" width={30} height={30} />
                </Link></div>
             <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/posts">Posts</Link>
            <Link href="/about">About</Link>
        </div>
         <ThemeSwitcher />
        </nav>
    </header>
  )
}

export default Header
