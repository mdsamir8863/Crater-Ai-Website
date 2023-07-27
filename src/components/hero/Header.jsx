import { useEffect, useRef } from "react";
import { init } from "ityped";
import "./header.css";
// import TextTransition, { presets } from "react-text-transition";
// import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
// const TEXTS = [
//   "Freelancer",
//   "challengers",
//   "Rebels",
//   "Leaders",
//   "Makers",
//   "Go-getters",
//   "Creators",
// ];
const Header = () => {
  // const [index, setIndex] = React.useState(0);
  const textRef = useRef();
  // useEffect(() => {
  //   const intervalId = setInterval(
  //     () => setIndex((index) => index + 1),
  //     1000 // every 2 seconds
  //   );
  //   return () => clearTimeout(intervalId);
  // }, []);
  {
    /* <TextTransition springConfig={presets.stiff}>
            {TEXTS[index % TEXTS.length]}
          </TextTransition> */
  }

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      typeSpeed: 100,
      backDelay: 2000,
      backSpeed: 100,
      cursorChar: " ",
      strings: [
        "Freelancer",
        "challengers",
        "Rebels",
        "Leaders",
        "Makers",
        "Go-getters",
        "Creators",
      ],
    });
  }, []);
  return (
    <header className=" container mt-3">
      <div className="blur position-absolute "></div>
      <div className="blurRight position-absolute "></div>
      <h1 className="logo ">Crater </h1>
      <section className="hero-section d-flex mt-3">
        <div className="left-hero w-50 pe-3">
          <h1 className="fw-bold fs-1 text-warning mb-3">
            AI-powered Business Manager for
            <span className="ms-2 colorText" ref={textRef}></span>
          </h1>
          <p className="fs-4 text-white">
            Focus on doing what you love, instead of having to open 10 different
            social media platforms, negotiate brand deals, chase invoices,manage
            payments, or file taxes.
          </p>
          <p className="fs-4 text-white">
            It is like having your own
            <span className="text-uppercase text-warning ms-2">
              BUSINESS MANAGER !
            </span>
          </p>
          <button className="hero-btn btn btn-warning shadow border border-warning border-3  border-dark  rounded-5 mt-3">
            Get Early Access
          </button>
        </div>
        <div className="right-hero w-50 me-3">
          <img
            className="w-100"
            src="https://www.thecrater.co/static/media/upperimage.d019417cdcd7ec2ad1a8.png"
            alt=""
          />
        </div>
      </section>
      <div className="container d-flex flex-column gap-4 mt-4 mb-4 social-container text-center mt-5">
        <h2 className="text-white">
          Get all your Platform Data. All in one place.
        </h2>
        <div className="container social-wrapper d-flex flex-wrap align-items-center text-center justify-content-center gap-5">
          <div className="d-flex align-items-center gap-2 text-white">
            <img
              className="iconImg rounded"
              src="https://s3.ap-south-1.amazonaws.com/www.cratermedia/website/youtube.png"
              alt="youtube"
            />
            <h4>Youtube</h4>
          </div>
          <div className="d-flex align-items-center gap-2 text-white">
            <img
              className="iconImg rounded"
              src="https://s3.ap-south-1.amazonaws.com/www.cratermedia/website/insta_color.svg"
              alt="Instagram"
            />
            <h4>Instagram</h4>
          </div>
          <div className="d-flex align-items-center gap-2 text-white">
            <img
              className="iconImg rounded"
              src="https://s3.ap-south-1.amazonaws.com/www.cratermedia/website/twitch_color.png"
              alt="Twitch"
            />
            <h4>Twitch</h4>
          </div>
          <div className="d-flex align-items-center gap-2 text-white">
            <img
              className="iconImg rounded"
              src="https://s3.ap-south-1.amazonaws.com/www.cratermedia/website/linkedln_color.png"
              alt="Linkedin"
            />
            <h4>Linkedin</h4>
          </div>
          <div className="text-white">
            <h4>+more</h4>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
