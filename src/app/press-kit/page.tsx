import { FaInstagram, FaSpotify, FaYoutube, FaEnvelope, FaTiktok} from "react-icons/fa";
import { SiApplemusic } from 'react-icons/si';

import Navbar from "../_components/navbar";

//metadata for the Press Kit page
export const metadata = {
  title: "Press Kit",
  description: "Explore the official press kit for Alcove, the indie alternative band.",
};

export default function EPKPage() {
  return (
    <main className="min-h-screen bg-[#FAF4C4] text-[#301C1B] px-6 md:px-16 py-12 font-crostan">
      {/* ABOUT SECTION */}
      <section className="flex flex-col md:flex-row items-start gap-10 mb-20">
        
        {/* LEFT: BAND IMAGE */}
        <div className="w-full md:w-1/2 flex flex-col items-center gap-6">
          <img
            src="/band-photo-epk.png"
            alt="Alcove Band Photo"
            className="w-full max-w-md rounded-lg"
          />
            <div className="flex gap-6 text-2xl">
              <a href="https://www.instagram.com/alcoveband_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-pink-500 transition"
              >
                  <FaInstagram  />
              </a>
              <a href="https://www.tiktok.com/@alcoveband_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-red-500 transition"
              >
                <FaTiktok  />
              </a>
              {/* <a href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-red-500 transition"
              >
                  <FaYoutube />
              </a> */}
              <a href="https://open.spotify.com/artist/42wIjlDNw2UInIgEV5ZWdx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-green-500 transition"
              >
                  <FaSpotify  />
              </a>
              

              <a href="https://music.apple.com/us/artist/alcove/1863338854"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-red-500 transition"
              >
                <SiApplemusic  />
              </a>
          </div>
        </div>
        
        
        {/* RIGHT: LOGO + TEXT */}
        <div className="w-full md:w-1/2 flex flex-col justify-start items-end gap-6">
          <img
            src="/alcove-logo-brown.png"
            className="h-25 md:h-25 w-auto object-contain"
          />

          <p className="text-lg font-crostan text-right">
            Born from good times and friendships, Alcove is a staple band in the Gainesville indie rock scene. 
            Previously known as Sigs Inside, this band is made up of four guys who love to rock - Evan Fleischer, 
            Kai Beres, Reese Watkins, and Max Addiego. Alcove brings the sound of truly classic indie rock whose 
            music forces you to live in the moment and remember what it means to love live music. This rock band 
            writes songs for late nights and crowded rooms, bringing every audience to life.
          </p>

        </div>
      </section>

      {/* MUSIC SECTION */}
      <section className="mb-20 text-center">
        <h1 className="text-4xl md:text-6xl font-godens mb-6">
          MUSIC
        </h1>
        <div className="relative flex justify-center items-center py-10">
          
          {/* Spotify Embed */}
          <iframe 
          data-testid="embed-iframe" 
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/artist/42wIjlDNw2UInIgEV5ZWdx?utm_source=generator" 
          width="100%" 
          height="352"  
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          allowFullScreen
          loading="lazy">
          </iframe>

          {/* CASSETTE IMAGE */}
          <img
            src="/cassette.png"
            className="absolute bottom-[-90px] right-[-45px] w-50 md:w-50 transform rotate-12"/>
        </div>
      </section>

      {/* PRESS SECTION */}
      <section className="text-center">
        <h1 className="text-4xl md:text-6xl font-godens mb-10">
          PRESS COVERAGE
        </h1>

        <div className="flex flex-col md:flex-row gap-6">
            <a
              href="https://www.alligator.org/article/2026/01/uf-student-band-alcove"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src="/alligator.png"
                alt="Alligator article"
                className="w-full h-full object-cover"
              />
            </a>
            <a
              href="https://www.instagram.com/p/DUjDE0eCQcU/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src="/indienight.png"
                alt="Indi Night post"
                className="w-full h-full object-cover"
              />
            </a>
            <a
              href="https://www.facebook.com/share/p/17dZ6xC9yy/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src="/ocho_w_alcove.png"
                alt="Facebook post"
                className="w-full h-full object-cover"
              />
            </a>
        </div>
      </section>
    </main>
  );
}