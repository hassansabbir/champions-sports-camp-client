import logoB from "../../../src/assets/logoB.png";
import { FiFacebook, FiMail, FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-stone-950 text-neutral-content">
      <div>
        <img className="w-20 rounded-full" src={logoB} alt="" />
        <p>
          Champions Sports Champ
          <br />
          Maroone Academic College, Maroone-2345, Atlantis
        </p>
      </div>
      <div>
        <span className="footer-title">Contact Us</span>
        <div className="grid grid-flow-col gap-4">
          <a>
            <FiMail className="h-6 w-6" />
          </a>
          <a>
            <FiYoutube className="h-6 w-6" />
          </a>
          <a>
            <FiFacebook className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
