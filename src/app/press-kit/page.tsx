import Navbar from "../_components/navbar";

//metadata for the Press Kit page
export const metadata = {
  title: "Press Kit",
  description: "Explore the official press kit for Alcove, the indie alternative band.",
};

export default function pressKit() {
    return(
        <main>
        <Navbar></Navbar>
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <h1>This is the <em>Press Kit</em> page</h1>
        </div>
        </main>
    );
}