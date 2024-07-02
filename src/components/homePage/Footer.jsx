// import React from "react";
// import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import "./Footer.css";

// const Footer = () => {
//   return (
//     <footer>
//       <div className="container">
//         <div className="footer-col">
//           <img
//             src="https://static-prod.adweek.com/wp-content/uploads/2019/11/new-warner-bros-logo-content-2019.gif"
//             alt="Warner Bros Logo"
//           />
//           <p>TM & © 2024 Warner Bros. Entertainment Inc. All rights reserved</p>
//         </div>
//         <div className="footer-col">
//           <h3>
//             Company
//             <div className="underline"></div>
//           </h3>
//           <p>
//             <a href="#">Press Releases</a>
//           </p>
//           <p>
//             <a href="#">Careers</a>
//           </p>
//           <p>
//             <a href="#">International</a>
//           </p>
//         </div>
//         <div className="footer-col">
//           <h3>
//             Terms of Use
//             <div className="underline"></div>
//           </h3>
//           <ul>
//             <li>
//               <a href="#">Privacy Policy</a>
//             </li>
//             <li>
//               <a href="#">Sourced Traffic Disclosure</a>
//             </li>
//             <li>
//               <a href="#">Ad Choices</a>
//             </li>
//             <li>
//               <a href="#">Accessibility</a>
//             </li>
//             <li>
//               <a href="#">Cookie Settings</a>
//             </li>
//           </ul>
//         </div>
//         <div className="footer-col">
//           <h3>
//             Follow Us
//             <div className="underline"></div>
//           </h3>
//           <div className="social-icons">
//             <a href="https://www.facebook.com/warnerbrosent/">
//               <FacebookOutlinedIcon />
//             </a>
//             <a href="https://www.instagram.com/warnerbrosentertainment/">
//               <InstagramIcon />
//             </a>
//             <a href="https://www.youtube.com/user/WarnerBrosPictures">
//               <YouTubeIcon />
//             </a>
//             <a href="https://x.com/Warnerbros/?mx=2">
//               <TwitterIcon />
//             </a>
//             <br />
//             <img
//               className="end-logo"
//               src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/34250013-53f3-4764-aa7d-e0054531d76b/dfp6h2c-0f4c1c94-578a-4e56-b51b-46203a588f79.jpg"
//             />
//           </div>
//         </div>
//       </div>
//       <div className="footer-bottom">
//         {/* <img
//           className="logo"
//           src="https://static-prod.adweek.com/wp-content/uploads/2019/11/new-warner-bros-logo-transformation-content-2019.gif"
//           alt="Warner Bros Logo"
//         /> */}
//         <p>© 2024 Warner Bros. Entertainment Inc. All rights reserved</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
//!
import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-col">
          <img
            src="https://static-prod.adweek.com/wp-content/uploads/2019/11/new-warner-bros-logo-content-2019.gif"
            alt="Warner Bros Logo"
            className="footer-logo"
          />
          <p>TM & © 2024 Warner Bros. Entertainment Inc. All rights reserved</p>
        </div>
        <div className="footer-col">
          <h3>
            Company
            <div className="underline"></div>
          </h3>
          <p>
            <a href="#">Press Releases</a>
          </p>
          <p>
            <a href="#">Careers</a>
          </p>
          <p>
            <a href="#">International</a>
          </p>
        </div>
        <div className="footer-col">
          <h3>
            Terms of Use
            <div className="underline"></div>
          </h3>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Sourced Traffic Disclosure</a>
            </li>
            <li>
              <a href="#">Ad Choices</a>
            </li>
            <li>
              <a href="#">Accessibility</a>
            </li>
            <li>
              <a href="#">Cookie Settings</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>
            Follow Us
            <div className="underline"></div>
          </h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/warnerbrosent/">
              <FacebookOutlinedIcon />
            </a>
            <a href="https://www.instagram.com/warnerbrosentertainment/">
              <InstagramIcon />
            </a>
            <a href="https://www.youtube.com/user/WarnerBrosPictures">
              <YouTubeIcon />
            </a>
            <a href="https://x.com/Warnerbros/?mx=2">
              <TwitterIcon />
            </a>
          </div>
          <div className="pixar-logo">
            <img
              src="https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/0755a48b-bbaf-4dff-8e78-9b489106eec6/logo022.jpg?format=750w"
              alt=""
            />
          </div>
          {/* <div className="footer-subscription">
            <p>Get the latest updates and special offers!</p>
            <form className="subscription-form" action="">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email Address"
              />
              <button type="submit">Subscribe</button>
            </form>
          </div> */}
        </div>
      </div>
      {/* <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>© 2024 Warner Bros. Entertainment Inc. All rights reserved</p>
          <div className="footer-bottom-links">
            <a href="#">Legal</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Sourced Traffic Disclosure</a>
            <a href="#">Ad Choices</a>
            <a href="#">Accessibility</a>
            <a href="#">Cookie Settings</a>
          </div>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
