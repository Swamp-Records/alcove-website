export default function PostcardSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#082a5b] py-24">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/about/postcard-bg.png"
          alt="Alcove background"
          className="h-full w-full object-cover opacity-90"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-4">
        {/* Photo card */}
        <div className="relative z-20 w-full max-w-[560px]">
          <img
            src="/about/postcard-photo.png"
            alt="Alcove band photo"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Postcard card */}
        <div className="relative z-10 mt-6 w-full max-w-[560px]">
          <img
            src="/about/postcard-card.png"
            alt="Postcard about Alcove"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}