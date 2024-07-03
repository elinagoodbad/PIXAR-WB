import React from "react";
import img5 from "../homePage/assets/warnebros.jpg";
import img1 from "../homePage/assets/elvis_hero.jpg";
import img2 from "../homePage/assets/furiosa_hero_2.jpg";
import img3 from "../homePage/assets/godzilla_x_kong_the_new_empire_hero2.jpg";
import img4 from "../homePage/assets/joker_folie_a_deux_hero.jpg";

import "./HeaderHomePage.css";
import { Carousel } from "react-bootstrap";

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
      <Carousel style={{ margin: "50px 0px" }}>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img4} alt="Third slide" />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="Black">
        <div className="content">
          <div className="content_container">
            <div className="logo">
              <h1 className="Welcome_WB">Welcome to Warner Bros.</h1>
              <span>The World's Biggest Indoor Theme Park</span>
              <p>
                Enter Warner Bros. World™ Abu Dhabi and get transported to
                awesome worlds of action and adventure, whimsy and wackiness
                straight out of your favourite cartoons and movies!
              </p>
              <hr />
            </div>
            <div className="warneBros">
              <div className="infoWor">
                <h2>OUR Company</h2>
                <p>
                  Warner Bros. Discovery is a leading global media and
                  entertainment company that creates and distributes the world’s
                  most differentiated and complete portfolio of content and
                  brands across television, film and streaming. Available in
                  more than 220 countries and territories and 50 languages,
                  Warner Bros. Discovery inspires, informs and entertains
                  audiences worldwide through its iconic brands and products
                  including: Discovery Channel, Max, discovery+, CNN, DC,
                  Eurosport, HBO, HGTV, Food Network, OWN, Investigation
                  Discovery, TLC, Magnolia Network, TNT, TBS, truTV, Travel
                  Channel, MotorTrend, Animal Planet, Science Channel, Warner
                  Bros. Motion Picture Group, Warner Bros. Television Group,
                  Warner Bros. Pictures Animation, Warner Bros. Games, New Line
                  Cinema, Cartoon Network, Adult Swim, Turner Classic Movies,
                  Discovery en Español, Hogar de HGTV and others.
                </p>
              </div>
              <div className="warNB">
                <img src={img5} alt="#" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderHomePage;
