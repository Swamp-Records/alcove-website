import { FaInstagram, FaSpotify, FaTiktok, FaEnvelope } from "react-icons/fa";
import { SiApplemusic } from 'react-icons/si';

export default function Footer() {
    return (
        <footer className="w-full border-t py-6 px-8 text-sm">
            <div className="flex justify-between items-center w-full">
                <p> © {new Date().getFullYear()} Alcove. All rights reserved.</p>
            
                <div className="flex gap-6 text-xl">
                    <a href="https://www.instagram.com/alcoveband_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl hover:text-pink-500 transition"
                    >
                        <FaInstagram  />
                    </a>

                    <a href="https://open.spotify.com/artist/42wIjlDNw2UInIgEV5ZWdx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl hover:text-green-500 transition"
                    >
                        <FaSpotify  />
                    </a>
                    
                    <a href="https://www.tiktok.com/@alcoveband_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl hover:text-red-500 transition"
                    >
                        <FaTiktok  />
                    </a>

                    <a href="https://music.apple.com/us/artist/alcove/1863338854"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl hover:text-red-500 transition"
                    >
                        <SiApplemusic  />
                    </a>

                    <a href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl hover:text-blue-500 transition"
                    >
                        <FaEnvelope  />
                    </a>
                </div>
            </div>
        </footer>
    )
}