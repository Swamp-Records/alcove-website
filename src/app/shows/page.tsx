//metadata for the shows page
export const metadata = {
  title: "Shows",
  description: "View upcoming tour dates and shows for Alcove, the indie alternative band.",
};

export default function shows() {
    return(
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <h1>This is the <em>shows</em> page</h1>
        </div>
    );
}