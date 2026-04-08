import Navbar from "../_components/navbar";

//metadata for the booking page
export const metadata = {
  title: "Booking",
  description: "Book this local indie band for your next event.",
};

export default function Booking() {
  return (
    <main>
      <Navbar></Navbar>
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <h1>This is the <em>Booking</em> page</h1>
      </div>
    </main>
  );
}