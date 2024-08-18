import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/aniruddh-krovvidi-659725245/" },
  { icon: <FaGithub />, path: "https://github.com/aniruddh-krovvidi" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/krovvidi_aniruddh/" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} legacyBehavior>
          <a className={iconStyles} target="_blank" rel="noopener noreferrer">
            {item.icon}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Social;
