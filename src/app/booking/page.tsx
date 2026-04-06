//import "../styles/globals.css";
import Footer from "../_components/footer";
import Navbar from "../_components/navbar";

// metadata for the booking page
export const metadata = {
  title: "Booking",
  description: "Book this local indie band for your next event.",
};

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-[#F6F1C9] px-6 py-12">
      <section className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        {/* Heading */}
        <h1 className="mb-12 font-crostan text-[5rem] leading-none text-[#2B1717] md:text-[7rem]">
          CONTACT US
        </h1>

        {/* Contact info */}
        <div className="mb-12 flex flex-col items-center text-[#2B1717]">
          <p className="mb-3 font-crostan text-lg uppercase tracking-wide md:text-xl">
            FOR ALL BUSINESS INQUIRIES, EMAIL US AT:
          </p>

          <a
            href="mailto:contact.alcovemusic@gmail.com"
            className="mb-8 font-crostan text-3xl uppercase leading-none hover:opacity-80 md:text-5xl"
          >
            CONTACT.ALCOVEMUSIC@GMAIL.COM
          </a>

          <p className="mb-2 font-crostan text-lg uppercase tracking-wide md:text-xl">
            TEXT US AT:
          </p>

          <a
            href="tel:1234567890"
            className="font-crostan text-3xl leading-none hover:opacity-80 md:text-5xl"
          >
            123-456-7890
          </a>
        </div>

        {/* Image */}
        <div className="w-full max-w-[420px] overflow-hidden rounded-[28px] md:max-w-[460px]">
          <img
            src="/contact_picture.png"
            alt="Alcove band photo"
            className="h-auto w-full object-cover"
          />
        </div>
      </section>
    </main>
  );
}

// export default function BookingPage() {
//   return (
//     <>
//       <Navbar />

//       <main className="min-h-screen bg-[#F6F1C9] px-6 py-12">
//         <section className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
//           {/* Heading */}
//           <h1 className="mb-12 font-crostan text-[5rem] leading-none text-[#2B1717] md:text-[7rem]">
//             CONTACT US
//           </h1>

//           {/* Contact info */}
//           <div className="mb-12 flex flex-col items-center text-[#2B1717]">
//             <p className="mb-3 font-crostan text-lg uppercase tracking-wide md:text-xl">
//               FOR ALL BUSINESS INQUIRIES, EMAIL US AT:
//             </p>

//             <a
//               href="mailto:contact.alcovemusic@gmail.com"
//               className="mb-8 font-crostan text-3xl uppercase leading-none hover:opacity-80 md:text-5xl"
//             >
//               CONTACT.ALCOVEMUSIC@GMAIL.COM
//             </a>

//             <p className="mb-2 font-crostan text-lg uppercase tracking-wide md:text-xl">
//               TEXT US AT:
//             </p>

//             <a
//               href="tel:1234567890"
//               className="font-crostan text-3xl leading-none hover:opacity-80 md:text-5xl"
//             >
//               123-456-7890
//             </a>
//           </div>

//           {/* Image */}
//           <div className="w-full max-w-[420px] overflow-hidden rounded-[28px] md:max-w-[460px]">
//             <img
//               src="../public/contact_picture.png"
//               alt="Alcove band photo"
//               className="h-auto w-full object-cover"
//             />
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </>
//   );
// }