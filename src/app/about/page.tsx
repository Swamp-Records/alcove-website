import PostcardSection from "../_components/PostcardSection";


//metadata for the about page
export const metadata = {
  title: "About",
  description: "Learn about Alcove, the indie alternative band.",
};

export default function about() {
    return(
        // <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        //     <h1>This is the <em>about</em> page</h1>
        // </div>
        <main>
            <PostcardSection />
        </main>
    );
}
