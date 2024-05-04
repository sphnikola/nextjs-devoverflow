import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/assets/images/site-logo.svg";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Theme from "./Theme";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image src={logo} width={23} height={23} alt="devflow" />
        <p className="h2-bold text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev <span className="text-primary-500">OverFlow</span>
        </p>
      </Link>
      GlobalSearch
      <div className="flex-between gap-5 ">
        <Theme />
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        MobileNav
      </div>
    </nav>
  );
};

export default Navbar;
