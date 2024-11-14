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
        className="h-[130vh] md:h-[150vh]"
        style={{
          backgroundImage: "url(/bgImage.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />

        <div className="md:ml-32 my-40 text-center md:text-start">
          <div className="mr-30 md:ml-20 text-4xl ">
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
        <h1 className="z-10 text-[127px] md:text-[700px] leading-10 mt-[310px] font-[550] text-black w-full">
          Opal
        </h1>
      </div>

      <br />
      <br />
      <Footer />
      <div className="flex justify-between mx-16">
        <div className="flex justify-between border-t-[1px] gap-16 md:mx-10 text-black">
          <div>Opal camera Inc.</div>
          <div>All rights reseved</div>
        </div>
        <Link
          href={"#"}
          className="hidden md:block rounded-full bg-black text-white p-3"
        >
          ↑
        </Link>
      </div>
    </div>
  );
}
