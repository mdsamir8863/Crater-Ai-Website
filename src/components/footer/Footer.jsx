import "./footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
const Footer = () => {
  return (
    <footer className="">
      <div className="footer-wrapper">
        <div className="right-foo">
          <h1 className="logo">Crater </h1>
          <p className=" text-white">
            Crater is an AI-powered Business Manager for Creators & Freelancers.
          </p>
          <p className=" text-white">Privacy Policy Terms & Conditions </p>
        </div>
        <div className="left-foo">
          <div className="d-flex gap-2 mb-2">
            <InstagramIcon className="text-warning fs-1" />
            <FacebookRoundedIcon className="text-warning fs-1" />
            <LinkedInIcon className="text-warning fs-1" />
            <WhatsAppIcon className="text-warning fs-1" />
          </div>
          <p className="fw-bold text-white mb-0">
            Sports Inddex N Tech Private Limited
          </p>
          <address className="text-white">
            14/4, J Block , 3rd Avenue, Anna Nagar East, Chennai, Tamil Nadu,
            600102 contact@thecrater.co
          </address>
        </div>
      </div>
      <p className="text-warning text-center">
        © 2023 Crater - All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
