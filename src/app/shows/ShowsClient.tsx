'use client';

import { useEffect, useState } from 'react';
import {
  collection,
  getDocs,
  orderBy,
  query,
  Timestamp,
  limit,
} from 'firebase/firestore';
import { db } from '../../lib/firebase';

type Show = {
  id: string;
  date: string;
  location: string;
  link: string;
  rawDate: Date | null;
};

export default function ShowsClient() {
  const [showData, setShowData] = useState<Show[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchShows() {
      try {
        const q = query(
          collection(db, 'shows'),
          orderBy('date', 'desc'),
          limit(5)
        );

        const snapshot = await getDocs(q);

        const shows: Show[] = snapshot.docs.map((doc) => {
          const data = doc.data() as {
            date?: Timestamp;
            location?: string;
            link?: string;
          };

          const rawDate = data.date ? data.date.toDate() : null;

          const formattedDate = rawDate
            ? rawDate.toLocaleDateString('en-US', {
                month: 'long',
                day: '2-digit',
                year: 'numeric',
              }).toUpperCase()
            : 'DATE TBD';

          return {
            id: doc.id,
            date: formattedDate,
            rawDate,
            location: data.location || 'LOCATION TBD',
            link: data.link || '#',
          };
        });

        // Re-sort the selected 5 shows so they display earliest to latest
        shows.sort((a, b) => {
          if (!a.rawDate && !b.rawDate) return 0;
          if (!a.rawDate) return 1;
          if (!b.rawDate) return -1;
          return a.rawDate.getTime() - b.rawDate.getTime();
        });

        setShowData(shows);
      } catch (error) {
        console.error('Error fetching shows:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchShows();
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#FAF4C4] p-4 pt-12">
      <div className="relative w-full max-w-[95%] overflow-hidden rounded-[3rem] bg-[#FAF4C4] min-h-[750px] shadow-2xl">
        
        {/* band image */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: "url('/shows-band-image.png')",
            filter: 'sepia(10%) contrast(1.05)',
          }}
        />

        <div className="relative z-10 flex flex-col items-center pt-24 pb-12">
          <div className="relative mb-0 flex w-full flex-col items-center overflow-visible">
            <img src="/Star2.png" className="absolute left-[15%] top-30 z-40 h-auto w-50" alt="" />

            <h1 className="font-gondens text-[135px] text-[#FAF4C4] outline-text leading-none tracking-normal">
              SHOWS
            </h1>

            <img
              src="/OnTourNow!.png"
              className="absolute right-[15%] -bottom-38 z-20 h-auto w-60 rotate-[1deg]"
              alt=""
            />
          </div>

          <div className="relative mt-[40px] w-[90%] max-w-[70%]">
            <img src="/postcard.png" className="h-auto w-full drop-shadow-md" alt="" />
            <img src="/Star3.png" className="absolute -right-8 bottom-20 z-50 h-auto w-40" alt="" />

            <div className="absolute inset-0 flex flex-col px-[10%] pt-[16%] pb-[10%] md:px-[14%]">
              <div className="flex h-full w-full flex-col justify-between">
                {loading ? (
                  <p className="font-crostan text-lg text-[#2D2321]">Loading shows...</p>
                ) : showData.length === 0 ? (
                  <p className="font-crostan text-lg text-[#2D2321]">No shows posted yet.</p>
                ) : (
                  showData.map((show) => (
                    <div
                      key={show.id}
                      className="flex items-center justify-between border-b border-black/10 py-2 last:border-0"
                    >
                      <div className="flex flex-col font-crostan">
                        <p className="text-lg leading-none tracking-tighter text-[#2D2321] font-bold md:text-2xl">
                          {show.date}
                        </p>
                        <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#6B6B6B]">
                          {show.location}
                        </p>
                      </div>

                      <a
                        href={show.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whitespace-nowrap rounded-full bg-[#2D2321] px-5 py-1.5 text-[10px] font-bold italic uppercase tracking-widest text-[#FAF4C4] transition-transform hover:bg-black active:scale-95"
                      >
                        TICKETS
                      </a>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .outline-text {
          -webkit-text-stroke: 5px #301C1B;
          paint-order: stroke fill;
          display: inline-block;
        }
      `}</style>
    </main>
  );
}



// 'use client';

// import { useEffect, useState } from 'react';
// import { collection, getDocs, orderBy, query, Timestamp } from 'firebase/firestore';
// import { db } from '../../lib/firebase';

// type Show = {
//   id: string;
//   date: string;
//   location: string;
//   link: string;
// };

// export default function ShowsClient() {
//   const [showData, setShowData] = useState<Show[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchShows() {
//       try {
//         const q = query(collection(db, 'shows'), orderBy('date', 'asc'));
//         const snapshot = await getDocs(q);

//         const shows: Show[] = snapshot.docs.map((doc) => {
//           const data = doc.data() as {
//             date?: Timestamp;
//             location?: string;
//             link?: string;
//           };

//           const formattedDate = data.date
//             ? data.date.toDate().toLocaleDateString('en-US', {
//                 month: 'long',
//                 day: '2-digit',
//                 year: 'numeric',
//               }).toUpperCase()
//             : 'DATE TBD';

//           return {
//             id: doc.id,
//             date: formattedDate,
//             location: data.location?.toUpperCase() || 'LOCATION TBD',
//             link: data.link || '#',
//           };
//         });

//         setShowData(shows);
//       } catch (error) {
//         console.error('Error fetching shows:', error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchShows();
//   }, []);

//   return (
//     <main className="flex min-h-screen items-center justify-center bg-[#F9F4D2] p-4 pt-12">
//       <div className="relative min-h-[750px] w-full max-w-[95%] overflow-hidden rounded-[3rem] bg-[#E8D8B0] shadow-2xl">
//         <div
//           className="absolute inset-0 z-0 bg-cover bg-center"
//           style={{
//             backgroundImage: "url('/shows-band-image.png')",
//             filter: 'sepia(10%) contrast(1.05)',
//           }}
//         />

//         <div className="relative z-10 flex flex-col items-center pt-24 pb-12">
//           <div className="relative mb-0 flex w-full flex-col items-center overflow-visible">
//             <img src="/Star2.png" className="absolute left-[15%] top-30 z-40 h-auto w-50" alt="" />

//             <h1 className="outline-text font-godens text-[120px] leading-none tracking-normal text-[#FAF4C4]">
//               SHOWS
//             </h1>

//             <img
//               src="/OnTourNow!.png"
//               className="absolute right-[15%] -bottom-38 z-20 h-auto w-60 rotate-[1deg]"
//               alt=""
//             />
//           </div>

//           <div className="relative mt-[40px] w-[90%] max-w-[70%]">
//             <img src="/postcard.png" className="h-auto w-full drop-shadow-md" alt="" />
//             <img src="/Star3.png" className="absolute -right-8 bottom-20 z-50 h-auto w-40" alt="" />

//             <div className="absolute inset-0 flex flex-col px-[10%] pt-[16%] pb-[10%] md:px-[14%]">
//               <div className="flex h-full w-full flex-col justify-between">
//                 {loading ? (
//                   <p className="font-crostan text-lg text-[#2D2321]">Loading shows...</p>
//                 ) : showData.length === 0 ? (
//                   <p className="font-crostan text-lg text-[#2D2321]">No shows posted yet.</p>
//                 ) : (
//                   showData.map((show) => (
//                     <div
//                       key={show.id}
//                       className="flex items-center justify-between border-b border-black/10 py-2 last:border-0"
//                     >
//                       <div className="flex flex-col font-crostan">
//                         <p className="text-lg leading-none tracking-tighter text-[#2D2321] font-bold md:text-2xl">
//                           {show.date}
//                         </p>
//                         <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#6B6B6B]">
//                           {show.location}
//                         </p>
//                       </div>

//                       <a
//                         href={show.link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="whitespace-nowrap rounded-full bg-[#2D2321] px-5 py-1.5 text-[10px] font-bold italic uppercase tracking-widest text-[#FAF4C4] transition-transform hover:bg-black active:scale-95"
//                       >
//                         TICKETS
//                       </a>
//                     </div>
//                   ))
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .outline-text {
//           -webkit-text-stroke: 3px #301c1b;
//           paint-order: stroke fill;
//           display: inline-block;
//         }
//       `}</style>
//     </main>
//   );
// }
