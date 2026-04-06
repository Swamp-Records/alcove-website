'use client';

const showData = [
  { date: "APRIL 01, 2026", location: "926 BAR", link: "https://www.eventbrite.com/..." },
  { date: "APRIL 02, 2026", location: "NEW WORLD TAMPA", link: "https://www.eventbrite.com/..." },
  { date: "APRIL 03, 2026", location: "HEARTWOOD SOUNDSTAGE", link: "https://www.eventbrite.com/..." },
  { date: "APRIL 04, 2026", location: "BLUE JAY LISTENING ROOM", link: "https://www.eventbrite.com/..." },
  { date: "APRIL 05, 2026", location: "LOCATION DETAILS", link: "https://www.eventbrite.com/..." },
];

export default function ShowsClient() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F9F4D2] p-4 pt-12">
      <div className="relative w-full max-w-[95%] overflow-hidden rounded-[3rem] bg-[#E8D8B0] min-h-[750px] shadow-2xl">
        
        {/* band image */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: "url('/shows-band-image.png')",
            filter: 'sepia(10%) contrast(1.05)',
          }}
        />
        <div className="relative z-10 flex flex-col items-center pt-24 pb-12">
          
          {/* header section */}
          <div className="relative flex flex-col items-center mb-0 w-full overflow-visible">
            <img src="/Star2.png" className="absolute left-[15%] top-30 w-50 h-auto z-40" alt="" />
            
            <h1 className="font-godens text-[120px] text-[#FAF4C4] outline-text leading-none tracking-normal">
              SHOWS
            </h1>

            <img src="/OnTourNow!.png" className="absolute right-[15%] -bottom-38 w-60 h-auto rotate-[1deg] z-20" alt="" />
          </div>

          {/* postcard */}
          <div className="relative w-[90%] max-w-[70%] mt-[40px]">
            <img src="/postcard.png" className="w-full h-auto drop-shadow-md" alt="" />
            <img src="/Star3.png" className="absolute -right-8 bottom-20 w-40 h-auto z-50" alt="" />
            <div className="absolute inset-0 flex flex-col pt-[16%] pb-[10%] px-[10%] md:px-[14%]">
              <div className="flex flex-col justify-between h-full w-full">
                {showData.map((show, index) => (
                  <div 
                    key={index} 
                    className="flex justify-between items-center py-2 border-b border-black/10 last:border-0"
                  >
                    <div className="flex flex-col font-crostan">
                      <p className="font-bold text-lg md:text-2xl tracking-tighter text-[#2D2321] leading-none">
                        {show.date}
                      </p>
                      <p className="text-[10px] tracking-[0.15em] text-[#6B6B6B] font-bold uppercase mt-1">
                        {show.location}
                      </p>
                    </div>
                    <a 
                      href={show.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-[#2D2321] text-[#FAF4C4] px-5 py-1.5 rounded-full text-[10px] font-bold tracking-widest hover:bg-black transition-transform active:scale-95 italic uppercase whitespace-nowrap"
                    >
                      TICKETS
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .outline-text {
          -webkit-text-stroke: 3px #301C1B;
          paint-order: stroke fill;
          display: inline-block;
        }
      `}</style>
    </main>
  );
}