import Image from "next/image";
import AlertHeader from "./AlertHeader";
import Link from "next/link";
import Logo from "../../public/logo.png";
import ResponsiveNavbar from "./ResponsiveNavbar";

const Navbar = () => {
  return (
    <>
      <AlertHeader />
      <ResponsiveNavbar />
      <div className="mx-12 hidden my-6 md:flex justify-between flex-wrap">
        <div className="flex gap-20 flex-wrap">
          <p className="text-3xl -mt-2">Opal</p>
          <div>
            <h3 className="font-semibold text-sm">Products</h3>
            <ul className="text-gray-500 text-xs space-y-3 mt-3">
              <li className="hover:text-white transition duration-300">
                Tadpole
              </li>
              <li className="hover:text-white transition duration-300">C1</li>
              <li className="hover:text-white transition duration-300">
                Composer
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sm">Company</h3>
            <ul className="text-gray-500 text-xs space-y-3 mt-3">
              <li className="hover:text-white transition duration-300">
                About
              </li>
              <li className="hover:text-white transition duration-300">
                Terms
              </li>
              <li className="hover:text-white transition duration-300">
                Privacy
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sm">Resourses</h3>
            <ul className="text-gray-500 text-xs space-y-3 mt-3">
              <li className="hover:text-white transition duration-300">
                Support
              </li>
              <li className="hover:text-white transition duration-300">
                Media Kit
              </li>
              <li className="hover:text-white transition duration-300">
                Downloads
              </li>
              <li className="hover:text-white transition duration-300">
                Newsletter
              </li>
            </ul>
          </div>
        </div>
        <div className="-ml-16 flex flex-col justify-start">
          <Image
            width={60}
            alt="logo"
            height={60}
            src={Logo}
            className="-ml-4 mb-6"
          />
          <div className="hidden md:flex justify-between flex-wrap items-center mb-6 min-w-96 -mt-10">
            {/* <label  htmlFor="">
              Newsletters
            </label> */}
            <input
              className="text-2xl text-gray-400 bg-none bg-opacity-0 bg-transparent focus:border-b outline-none "
              type="text"
              placeholder="Newsletters"
            />

            <Link
              href={"#"}
              className="w-28 text-3xl font-semibold px-2 text-end hover:text-center hover:bg-blue-500/50 py-3 rounded-full bg-gray-400/10"
            >
              →
            </Link>
          </div>
          <div>
            <p className="hidden md:block text-xs text-gray-400 italic ">
              By signing up, I agree with the data protection policy of Opal.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
