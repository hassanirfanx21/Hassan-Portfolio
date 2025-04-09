import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span><img
            src="/images/cyan_H.png"
            className="w-[5rem] h-15 md:w-[11rem] md:h-18 lg:w-[11rem] lg:h- object-cover"
            alt="H_pic"
          /></span>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
