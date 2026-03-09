import Link from 'next/link';
import React from 'react';

//creates the navbar component that contains links to the home page, about page, epk page, and shows page
export default function Navbar() {
    //this function is styled in the globals.css file and is imported into the layout.tsx file
    return <nav className="nav">

        {/*clicking on the logo will take you to the home page*/}
        <Link href="/" className="logo">ALCOVE</Link>

        {/*the rest of the links will take you to their respective pages*/}
        <div className="nav-links">
            <Link href="/about">About</Link>
            <Link href="/epk">EPK</Link>
            <Link href="/shows">Shows</Link>
        </div>

    </nav>
}