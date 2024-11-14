import Navbar from "@/components/Navbar";
import Image from "next/image";
import background from "/public/bgImage.png";
import Link from "next/link";
import Products from "@/components/Product";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <div
        className="h-[100vh] md:h-[150vh]"
        style={{
          backgroundImage: "url(/bgImage.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />

        <div className="md:ml-32 my-40 text-center md:text-start">
          <div className="mr-30 md:ml-2 text-3xl md:text-4xl ">
            The first webcam
            <br />
            Designed for Laptops
            <br />
            <br />
          </div>
          <Link
            href={""}
            className="py-3 text-sm px-3 mt-5 rounded-full bg-yellow-300 md:ml-20 text-black"
          >
            Available now for $149.
          </Link>
        </div>
      </div>
      <Products />
      <div className="flex justify-center items-center">
        <h1 className="z-10 text-[185px] md:text-[800px] leading-10 mt-[200px] md:mt-[310px] font-[550] text-black w-full">
          Opal
        </h1>
      </div>

      <br />
      <br />
      <footer className="mt-72">
        <Footer />
      </footer>
      <div className="flex justify-between mx-16">
        <div className="flex justify-between border-t-[1px] gap-16 md:mx-10 text-black">
          <div>Opal camera Inc.</div>
          <div>All rights reseved</div>
        </div>
        <Link
          href={"#"}
          className="hidden md:block rounded-full bg-gray-400 text-white p-3"
        >
          ↑
        </Link>
      </div>
    </div>
  );
}
