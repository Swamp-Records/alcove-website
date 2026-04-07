'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

//creates the navbar component that contains links to the home page, booking page, press kit page, and shows page
export default function Navbar() {
    const pathname = usePathname();

    const isActive = (path: string) => 
        pathname === path ? "nav-link-active" : "nav-link";
        
    //this function is styled in the globals.css file and is imported into the layout.tsx file
    return <nav className="nav-bg">
        {/*style for the 3 horizontal images in the background of the navbar*/}
        <div className='nav-image-row'>
          <img className='title-bkgrd-img' src="/group_photo_home.png" alt="group_photo"/>
          <img className='title-bkgrd-img' src="/group_photo_home.png" alt="group_photo"/>
          <img className='title-bkgrd-img' src="/group_photo_home.png" alt="group_photo"/>
        </div>

        {/*title with description*/}
        <div className='nav-title'>
          <h1 className='big-title'>ALCOVE</h1>
          <h6 className='title-description'>ROCK BAND FROM THE SWAMP LAND</h6>
          
            {/*the actual navbar with links (isActive function is used to determine which link is currently active and style it accordingly)*/}
            <div className="nav">
                {/*the links will take you to their respective pages*/}
                <div className="nav-links">
                    <Link href="/" className={isActive("/")} style={{ left: "0%" }}>HOME</Link>
                    <Link href="/booking" className={isActive("/booking")} style={{ left: "25%" }}>BOOKING</Link>
                    <Link href="/press-kit" className={isActive("/press-kit")} style={{ left: "50%" }}>PRESS KIT</Link>
                    <Link href="/shows" className={isActive("/shows")} style={{ left: "75%" }}>SHOWS</Link>
                    
                </div>
            </div>
        </div>

    </nav>
}