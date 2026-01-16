"use client";

import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-full";

  return (
    <div>
      {/* overlay */}
      <div
        onClick={closeNav}
        className={`fixed inset-0 ${navOpen} transform transition-all duration-500 z-[100002] bg-black opacity-70`}
      />

      {/* nav links */}
      <div
        className={`text-white ${navOpen} fixed right-0 top-0 flex flex-col justify-center h-full transition-all duration-500 delay-300 w-[80%] sm:w-[60%] z-[100050] bg-cyan-800 space-y-6`}
      >
        {NavLinks.map((link) => (
          <Link key={link.id} href={link.url} onClick={closeNav}>
            <p className="w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
              {link.label}
            </p>
          </Link>
        ))}

        {/* close icon */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default MobileNav;
