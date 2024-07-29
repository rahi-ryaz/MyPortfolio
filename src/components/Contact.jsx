// import React from 'react';
import { CONTACT } from '../assets/Info'; 

const Contact = () => {
  return (
    <section className="border-b border-neutral-900 p-24 ">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-[#01D293] text-center mb-10">Get in Touch</h1>
        <div className="text-center">
          <p className="text-lg text-gray-700 mb-4">{CONTACT.address}</p>
          <a 
            href={`mailto:${CONTACT.email}`} 
            className=" text-lg text-blue-500 hover:text-blue-700 underline"
          >
            {CONTACT.email}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
