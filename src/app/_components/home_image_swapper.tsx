"use client";

import { useState } from "react";

export default function ImageSwapper() {
    const [images, setImages] = useState ([
        {id: 1, src: "/postcard1_home.png", alt: "postcard1"},
        {id: 2, src: "/postcard2_home.png", alt: "postcard2"},
    ]);

    //used when right arrow is clicked (brings the first image to the end of the array))
    const nextImage = () => {
        setImages((prev) => {
            const [first, ...rest] = prev; 
            return [...rest, first]
        }); 
    };

    //used when left arrow is clicked (brings the last image to the front of the array)
    const prevImage = () => {
        setImages((prev) => {
            const last = prev[prev.length - 1]; 
            const rest = prev.slice(0,-1); 
            return [last, ...rest]; 
        }); 
    };

    return (
        <div className='home-content'>
        {/* left arrow button */}
          <button onClick={prevImage} className='arrow-btn'><img src="/left_arrow_home.png" alt="left_arrow"/></button>

            {/* middle box plus images (the images are stacked on top of each other and the z-index is used to show only one image at a time) */}
          <div className='arrow-box'>
            {images.map((img, index) => (
                <img
                    key={img.id}
                    className={`postcard-img ${img.id === 2 ? 'postcard-img--wide' : 'postcard-img--standard'}`}
                    src={img.src}
                    alt={img.alt}
                    style={{
                        zIndex: index === 0 ? 4 : 1,
                    }}
                />
            ))}

            {/* the stars */}
            <img style={{zIndex: 3, position: "absolute", top: "74%", left: "-22%" }} src="/Star 2.png" alt="blue star 1"/>
            <img style={{zIndex: 3, position: "absolute", top: "-5%", left: "90%" }} src="/Star 3.png" alt="blue star 2"/>

            {/* the yellow overlay used to give the back image a yellow tint / make it look softer */}
            <div style={{zIndex: 2, width: "126%", height: "110%", backgroundColor: "#FAF4C4", opacity: 0.3, position: "absolute", top: "50%", left: "50%",transform: "translate(-50%, -47%)" }}></div>
          </div>

            {/* right arrow button */}
          <button onClick={nextImage} className='arrow-btn'><img src="/right_arrow_home.png" alt="right_arrow"/></button>
        </div>
    );

}