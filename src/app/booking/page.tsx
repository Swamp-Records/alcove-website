// metadata for the booking page
import Navbar from "../_components/navbar";

//metadata for the booking page
export const metadata = {
  title: "Booking",
  description: "Book this local indie band for your next event.",
};

export default function BookingPage() {
  return (
    <>
      <Navbar/>
    <main className="min-h-screen bg-[#FAF4C4] px-6 pt-36 pb-28">
    
      <section className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">

        {/* CONTACT US */}
        <h1 className="font-gondens text-[120px] leading-none text-[#2D2321] mb-32">
          CONTACT US
        </h1>

        {/* EMAIL SECTION */}
        <div className="flex flex-col items-center mb-32">
          <p className="font-gondens text-[27px] uppercase tracking-wide mb-8 text-[#2D2321]">
            FOR ALL BUSINESS INQUIRIES, EMAIL US AT:
          </p>

          {/* <a
            href="mailto:contact.alcovemusic@gmail.com"
            className="font-gondens text-[60px] uppercase leading-none text-[#2D2321]"
          >
            CONTACT.ALCOVEMUSIC@GMAIL.COM
          </a> */}
          <a
            href="mailto:contact.alcovemusic@gmail.com"
            className="text-[45px] leading-none text-[#2D2321]"
          >
            <span className="font-gondens">CONTACT</span>
            <span className="font-bebas">.</span>
            <span className="font-gondens">ALCOVEMUSIC</span>
            <span className="font-bebas">@</span>
            <span className="font-gondens">GMAIL</span>
            <span className="font-bebas">.</span>
            <span className="font-gondens">COM</span>
          </a>
        </div>

        {/* PHONE SECTION */}
        <div className="flex flex-col items-center mb-10">
          <p className="font-gondens text-[27px] uppercase tracking-wide mb-8 text-[#2D2321]">
            TEXT US AT:
          </p>
          <a
            href="tel:5706562939"
            className="font-bebas text-[60px] leading-none text-[#2D2321]"
          >
            570-656-2939
          </a>
        </div>

        {/* IMAGE */}
        <div className="w-full max-w-[675px] overflow-hidden rounded-[28px]">
          <img
            src="/contact_picture.png"
            alt="Alcove band photo"
            className="h-auto w-full object-cover"
          />
        </div>

      </section>
    {/* <main>
      <Navbar></Navbar>
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <h1>This is the <em>Booking</em> page</h1>
      </div>
    </main> */}
  </main>
  </>
  );
}