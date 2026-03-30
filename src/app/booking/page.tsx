// metadata for the booking page
export const metadata = {
  title: "Booking",
  description: "Book this local indie band for your next event.",
};


export default function Booking() {
  return (
    <main className="min-h-screen bg-[#F9F4D2] px-6 py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center">
        <h1 className="mb-8 text-center font-crostan text-4xl text-black">
          Book Alcove
        </h1>

        <div className="w-full overflow-hidden rounded-2xl bg-[#F9F4D2] shadow-lg">
          {/*
          <iframe
            src="https://calendly.com/jennasin1120/30min"
            width="100%"
            height="700"
          />
            */}
          <iframe
            src="https://calendly.com/jennasin1120/30min?background_color=F9F4D2&text_color=000000&primary_color=082a5b"
            width="100%"
            height="700"
            className="border-none"
          />

        </div>
      </div>
    </main>
  );
}