import React from "react";
// import Carousel from "react-bootstrap/Carousel";
// import img1 from "../homePage/assets/watchers_hero.jpg";
// import img2 from "../homePage/assets/godzilla_x_kong_the_new_empire_hero2.jpg";
// import img3 from "../homePage/assets/joker_folie_a_deux_hero.jpg";
// import img4 from "../homePage/assets/furiosa_hero_2.jpg";
import img5 from "../homePage/assets/warnebros.jpg";
import "./HeaderHomePage.modal.css";

const HeaderHomePage = () => {
  return (
    <div className="wrapper">
      <div className="full-screen">
        <video autoPlay loop muted preload="auto" className="full-screen_video">
          <source
            type="video/mp4"
            src="https://wbd.com/wp-content/themes/warner-bros-discovery-corporate/video/wbd-hero-animation_24.mp4"
          />
        </video>
      </div>
      <div className="content">
        <div className="content_container">
          <div className="logo">
            <h1 className="Welcome_WB">Welcome to Warner Bros.</h1>
            <span>The World's Biggest Indoor Theme Park</span>
            <p>
              Enter Warner Bros. World™ Abu Dhabi and get transported to awesome
              worlds of action and adventure, whimsy and wackiness straight out
              of your favourite cartoons and movies!
            </p>
            <hr />
          </div>
          <div className="warneBros">
            <div className="infoWor">
              <h2>OUR Company</h2>
              <p>
                Warner Bros. Discovery is a leading global media and
                entertainment company that creates and distributes the world’s
                most differentiated and complete portfolio of content and brands
                across television, film and streaming. Available in more than
                220 countries and territories and 50 languages, Warner Bros.
                Discovery inspires, informs and entertains audiences worldwide
                through its iconic brands and products including: Discovery
                Channel, Max, discovery+, CNN, DC, Eurosport, HBO, HGTV, Food
                Network, OWN, Investigation Discovery, TLC, Magnolia Network,
                TNT, TBS, truTV, Travel Channel, MotorTrend, Animal Planet,
                Science Channel, Warner Bros. Motion Picture Group, Warner Bros.
                Television Group, Warner Bros. Pictures Animation, Warner Bros.
                Games, New Line Cinema, Cartoon Network, Adult Swim, Turner
                Classic Movies, Discovery en Español, Hogar de HGTV and others.
              </p>
            </div>
            <div className="warNB">
              <img src={img5} alt="#" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderHomePage;
