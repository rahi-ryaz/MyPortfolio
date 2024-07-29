
import logo from "../assets/Logo.png";
import { FaLinkedin, FaGithub, FaPhoneSquare } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
import {CONTACT} from "../assets/Info"

const Navbar = () => {
  return (
    
    <nav className="mx-24 fixed top-0 left-0 right-0 shadow-md z-50  ">
      {/* Logo section */}
      <div className=" flex items-center justify-between mx-4 lg:mx-2 py-4 ">
      <div className="flex items-center">
        <img className="w-20 h-auto" src={logo} alt="logo" />
      </div>

      {/* Links section */}
      <div className="flex items-center space-x-4 text-xl lg:text-2xl">
        {/* LinkedIn */}
        <a
          href={CONTACT.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-700"
        >
          <FaLinkedin />
        </a>
        
        {/* GitHub */}
        <a
          href={CONTACT.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-700"
        >
          <FaGithub />
        </a>
        
        {/* Email */}
        <a
          href="mailto:{CONTACT.email}"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-700"
        >
          <BiMailSend />
        </a>
        
      </div>
      </div>
    </nav>
    
  );
};

export default Navbar;
