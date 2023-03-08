import { useState, useEffect } from "react";

import { userService } from "services";
import useWindowWidth from "../utils/hooks/use-window-width";
import Image from "next/image";
import Hamburger from "./Hamburger/hambuger";
import Link from "next/link";

const Nav = () => {
  const [user, setUser] = useState(null);

  //eslint-disable-next-line react-hooks/rules-of-hooks
  const width = useWindowWidth();

  //eslint-disable-next-line react-hooks/rules-of-hooks
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  useEffect(() => {
    const subscription = userService.user.subscribe((x) => setUser(x));
    return () => subscription.unsubscribe();
  }, []);

  function logout() {
    userService.logout();
  }

  // only show nav when logged in
  if (!user) return null;

  const routes = [
    // {
    //   url: "/creator",
    //   text: "Creator",
    // },
  ];

  function toggleHamburger() {
    setHamburgerOpen(!hamburgerOpen);
  }

  return (
    <div className="bg-[#110929] h-[80px] z-50 fixed top-0 right-0 left-0 transition-colors delay-100">
      <nav className="container mx-auto px-6 xl:px-0 px-[24px] md:px-[40px] lg:px-[60px] pt-[15px] flex flex-row justify-between items-center">
        <Link href="/" legacyBehavior>
          <Image
            className="py-[19.5px] hidden md:block cursor-pointer"
            src="/ApolloNFT.svg"
            alt="logo"
            width={171}
            height={40}
          />
        </Link>
        <div className="flex flex-row items-center justify-center gap-[40px]">
          <div className="relative">
            <div
              className={`${
                hamburgerOpen && width <= 1024
                  ? "fixed flex flex-col bg-[#110929] top-0 right-0 bottom-0 w-3/5 py-[50px]"
                  : "relative grid-cols-4 hidden lg:flex lg:gap-10"
              }`}
            >
              {routes.map(({ url, text }, index) => {
                return (
                  <div
                    key={`${index}-${text}`}
                    className={`flex flex-col items-center justify-center w-full lg:w-[80px] whitespace-nowrap cursor-pointer`}
                  >
                    <div
                      className="relative link mb-6 lg:mb-0 lg:after:hover:w-full lg:after:hover:left-0 lg:font-bold
                          after:bottom-0 lg:after:-bottom-[28px]"
                    >
                      {text}
                    </div>
                  </div>
                );
              })}

              {userService.userValue.firstName === "admin" &&
                userService.userValue.lastName === "admin" &&
                userService.userValue.username === "admin" && (
                  <div
                    className={`flex flex-col items-center justify-center w-full lg:w-[80px] whitespace-nowrap cursor-pointer`}
                  >
                    <Link href="/users" legacyBehavior>
                      <div
                        className="relative link mb-6 lg:mb-0 lg:after:hover:w-full lg:after:hover:left-0 lg:font-bold
                          after:bottom-0 lg:after:-bottom-[28px]"
                      >
                        Users
                      </div>
                    </Link>
                  </div>
                )}
              <div
                onClick={logout}
                className={`flex flex-col items-center justify-center w-full lg:w-[80px] whitespace-nowrap cursor-pointer`}
              >
                <div
                  className="relative link mb-6 lg:mb-0 lg:after:hover:w-full lg:after:hover:left-0 lg:font-bold
                          after:bottom-0 lg:after:-bottom-[28px]"
                >
                  Logout
                </div>
              </div>
            </div>
          </div>
          <Link href="#footer">
            <div className="hidden lg:grid text-white text-[16px] leading-[19px] w-[149px] h-[51px] rounded-[66px] flex justify-center items-center btn-gradient">
              Contact Us
            </div>
          </Link>
        </div>

        <div
          className={`w-full flex justify-end lg:hidden py-6`}
          onClick={toggleHamburger}
        >
          <Hamburger isOpen={hamburgerOpen} />
        </div>
      </nav>
    </div>
  );
};

export default Nav;
