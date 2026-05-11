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
        <h1 className="mb-16 font-gondens text-[64px] leading-none text-[#2D2321] sm:text-[96px] md:mb-32 md:text-[120px]">
          CONTACT US
        </h1>

        {/* EMAIL SECTION */}
        <div className="mb-16 flex flex-col items-center md:mb-32">
          <p className="mb-5 font-gondens text-[16px] uppercase tracking-wide text-[#2D2321] sm:text-[20px] md:mb-8 md:text-[27px]">
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
            className="max-w-full wrap-break-word text-[22px] leading-tight text-[#2D2321] sm:text-[32px] md:text-[45px] md:leading-none"
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
        <div className="mb-10 flex flex-col items-center">
          <p className="mb-5 font-gondens text-[16px] uppercase tracking-wide text-[#2D2321] sm:text-[20px] md:mb-8 md:text-[27px]">
            TEXT US AT:
          </p>
          <a
            href="tel:5706562939"
            className="font-bebas text-[40px] leading-none text-[#2D2321] sm:text-[52px] md:text-[60px]"
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