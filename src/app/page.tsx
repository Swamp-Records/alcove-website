import Navbar from "./_components/navbar";

export default function Home() {
  return (
      <main className="home-bg">

        <div className="image-row">
          <img className="title-bkgrd-img" src="/group_photo_home.png" alt="group_photo"/>
          <img className="title-bkgrd-img" src="/group_photo_home.png" alt="group_photo"/>
          <img className="title-bkgrd-img" src="/group_photo_home.png" alt="group_photo"/>
        </div>

        <div className="home-title">
          <h1 className="big-title">ALCOVE</h1>
          <h6 className="title-description">ROCK BAND FROM THE SWAMP LAND</h6>
          <Navbar></Navbar>
        </div>

        <div className="home-content">
          <img src="/left_arrow_home.png" alt="left_arrow"/>
          <div className="arrow-box">
            <img className="postcard-img" src="/postcard1_home.png" alt="postcard"/>
          </div>
          <img src="/right_arrow_home.png" alt="right_arrow"/>
        </div>
        <div className="button">
          <button>"DECEMBER" OUT NOW</button>
        </div>

      </main>
  );
}
