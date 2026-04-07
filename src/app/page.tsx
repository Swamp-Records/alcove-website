import Navbar from "./_components/navbar";
import '../styles/home_page.css';
import ImageSwapper from "./_components/home_image_swapper";
import Link from "next/link";

export default function Home() {
  return (
      <main className='home-bg'>

        <Navbar></Navbar>

        <ImageSwapper></ImageSwapper>

        <Link href="https://open.spotify.com/album/5i7PmsL8GZFdZmjZya5yfB?si=wr-xDd7fT1uBAhOccZ1TGw" className='button'>"DECEMBER" OUT NOW</Link>

      </main>
  );
}
