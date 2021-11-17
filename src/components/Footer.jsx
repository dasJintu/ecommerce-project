import facebook from "../images/icon-facebook.svg";
import instagram from "../images/icon-instagram.svg";
import pinterest from "../images/icon-pinterest.svg";
import twitter from "../images/icon-twitter.svg";

const navigation = ["MEN", "WOMEN", "ACCESSORIES", "ELECTRONICS"];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div
        className="
          container
          flex flex-col
          md:flex-row
          justify-between
          items-center
          gap-6
        "
      >
        <div className="space-y-6">
          <h1 className="font-bold text-lg">THE SHOP</h1>
          <ul className="flex flex-col md:flex-row justify-start items-center gap-6">
            {navigation.map((menuItem) => (
              <li key={menuItem}>
                <a
                  className="text-gray-500 transition hover:text-gray-200"
                  href=""
                >
                  {menuItem}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-6">
          <div className="flex justify-center md:justify-end items-center gap-6">
            <img src={facebook} alt="facebook icon" />
            <img src={instagram} alt="instagram icon" />
            <img src={pinterest} alt="pinterest icon" />
            <img src={twitter} alt="twitter icon" />
          </div>
          <p className="text-center md:text-right text-gray-500">
            © 2021 The Shop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
