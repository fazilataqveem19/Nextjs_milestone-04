"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import logoDark from "/public/logoDark.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const { data: session, status } = useSession();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  // Handle loading state
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <header className="w-full h-20 border-b-[1px] border-b-black font-titleFont sticky top-0 bg-white z-50 px-4">
      <div className="max-w-7xl h-full mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <div className="cursor-pointer">
            <Image width={80} height={80} src={logoDark} alt="logoDark" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:inline-flex">
          <ul className="inline-flex gap-8 uppercase text-sm font-semibold">
            <li className="headerLi">Home</li>
            <li className="headerLi">Posts</li>
            <li className="headerLi">Pages</li>
            <li className="headerLi">Features</li>
            <li className="headerLi">Contact</li>
          </ul>
        </div>

        {/* Profile & Sign In/Out */}
        <div className="flex items-center gap-8 text-lg ml-4">
          <div className="flex items-center gap-2">
            <Image
              className="w-8 h-8 rounded-full"
              src={session?.user?.image ? session.user.image : "/profile.jpg"}
              alt="Profile"
              width={32} // Use appropriate width
              height={32} // Use appropriate height
            />
            <p className="text-sm font-medium">
              {session?.user?.name ? session.user.name : "Hello Stranger"}
            </p>
          </div>

          {/* Sign In/Out Buttons */}
          {session ? (
            <button
              onClick={() => signOut()}
              className="uppercase text-sm border-[1px] border-black hover:border-purple-700 px-4 py-1 font-semibold hover:text-white rounded-md hover:bg-purple-700 transition-all duration-300 active:bg-purple-800 cursor-pointer"
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={() => signIn()}
              className="uppercase text-sm border-[1px] border-black hover:border-purple-700 px-4 py-1 font-semibold hover:text-white rounded-md hover:bg-purple-700 transition-all duration-300 active:bg-purple-800 cursor-pointer"
            >
              Sign In
            </button>
          )}

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4">
          <ul className="flex flex-col gap-4 uppercase text-sm font-semibold bg-white shadow-lg p-4 rounded-md">
            <li className="headerLi">Home</li>
            <li className="headerLi">Posts</li>
            <li className="headerLi">Pages</li>
            <li className="headerLi">Features</li>
            <li className="headerLi">Contact</li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
