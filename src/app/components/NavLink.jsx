import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <div className="group relative inline-block">
      <Link
        href={href}
        className="relative z-10 block py-2 px-4 text-[#ADB7BE] sm:text-xl rounded-full hover:text-white transition-colors duration-300"
      >
        {title}
      </Link>

      {/* Subtle Glow Effect */}
      <span
        className="absolute inset-0 rounded-full scale-100 opacity-0 group-hover:opacity-30 group-hover:scale-105 
        transition-all duration-300 blur-sm bg-cyan-700 shadow-[0_0_8px_3px_rgba(34,211,238,0.25)]"
        aria-hidden="true"
      ></span>
    </div>
  );
};

export default NavLink;
