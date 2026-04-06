// metadata for the booking page
export const metadata = {
  title: "Booking",
  description: "Book this local indie band for your next event.",
};

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-[#F9F4D2] px-6 pt-16 pb-28">
      <section className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">

        {/* CONTACT US */}
        <h1 className="font-godens text-[120px] leading-none text-[#2D2321] mb-32">
          CONTACT US
        </h1>

        {/* EMAIL SECTION */}
        <div className="flex flex-col items-center mb-32">
          <p className="font-godens text-[27px] uppercase tracking-wide mb-8 text-[#2D2321]">
            FOR ALL BUSINESS INQUIRIES, EMAIL US AT:
          </p>

          {/* <a
            href="mailto:contact.alcovemusic@gmail.com"
            className="font-godens text-[60px] uppercase leading-none text-[#2D2321]"
          >
            CONTACT.ALCOVEMUSIC@GMAIL.COM
          </a> */}
          <a
            href="mailto:contact.alcovemusic@gmail.com"
            className="text-[45px] leading-none text-[#2D2321]"
          >
            <span className="font-godens">CONTACT</span>
            <span className="font-bebas">.</span>
            <span className="font-godens">ALCOVEMUSIC</span>
            <span className="font-bebas">@</span>
            <span className="font-godens">GMAIL</span>
            <span className="font-bebas">.</span>
            <span className="font-godens">COM</span>
          </a>
        </div>

        {/* PHONE SECTION */}
        <div className="flex flex-col items-center mb-10">
          <p className="font-godens text-[27px] uppercase tracking-wide mb-8 text-[#2D2321]">
            TEXT US AT:
          </p>
          <a
            href="tel:1234567890"
            className="font-bebas text-[60px] leading-none text-[#2D2321]"
          >
            123-456-7890
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
    </main>
  );
}