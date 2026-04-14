import Navbar from "../_components/navbar";
import ShowsClient from './ShowsClient';

//metadata for the shows page
export const metadata = {
  title: "Shows",
  description: "View upcoming tour dates and shows for Alcove, the indie alternative band.",
};

export default function ShowsPage() {
  return (
    <main>
      <Navbar></Navbar>
      <ShowsClient />
    </main>
  );
}

