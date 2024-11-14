"use client";
import Image from "next/image";
import { useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import tadpole from "../../public/tadpole.png";
import opal_c1 from "../../public/opal_c1.png";
import composer from "../../public/composer.png";
import Footer from "./Footer";

const ResponsiveNavbar = () => {
  const [open, setOpen] = useState(false);

  const handleNavbarClick = () => {
    setOpen(!open);
  };

  const products = [
    {
      title: "Tadpole",
      description: "The tiny webcam with a clip",
      price: "Now $149",
      image: tadpole,
    },
    {
      title: "C1",
      description: "The first professional webcam",
      price: "$299",
      image: opal_c1,
    },
    {
      title: "Composer",
      description: "The magic behind the camera",
      price: "",
      image: composer,
    },
  ];
  return (
    <nav className="bg-white text-black md:hidden absolute z-50 w-full">
      <div className="flex justify-between items-center mx-4 py-2">
        <h2 className="font-semibold">Opal</h2>
        <div>
          <button onClick={handleNavbarClick}>
            {open ? <IoMdClose /> : <CgMenuGridR />}
          </button>
        </div>
        <Image width={30} height={30} src="/logo.png" alt="logo" />
      </div>
      {open && (
        <div>
          <ul>
            {products.map((p) => (
              <li
                key={p.title}
                className="flex justify-between mx-2 items-center my-4 border-b"
              >
                <p className="text-2xl">{p.title}</p>
                <Image src={p.image} width={130} alt={p.title} height={130} />
              </li>
            ))}
          </ul>
          <div className="mt-14">
            <Footer />
          </div>
        </div>
      )}
    </nav>
  );
};

export default ResponsiveNavbar;
