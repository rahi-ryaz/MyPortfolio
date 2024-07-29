import logo from "../assets/Logo.png";
import { FaLinkedin, FaGithub, FaPhoneSquare } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
import { CONTACT } from "../assets/Info";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 shadow-md z-50">
     
      <div className="container mx-auto flex flex-wrap items-center justify-between py-4 px-6">

        <div className="flex items-center flex-shrink-0">
          <img className="w-20 h-auto" src={logo} alt="logo" />
        </div>

     
        <div className="block lg:hidden">
          <button className="text-gray-800 hover:text-red-700 focus:outline-none">
           
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

       
        <div className="hidden lg:flex items-center space-x-4 text-xl lg:text-2xl">
         
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-700"
          >
            <FaLinkedin />
          </a>
          
       
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-700"
          >
            <FaGithub />
          </a>
          
          
          <a
            href={`mailto:${CONTACT.email}`}
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
