import Image from "next/image";
import Link from "next/link";
import tadpole from "../../public/tadpole.png";
import opal_c1 from "../../public/opal_c1.png";
import composer from "../../public/composer.png";

const Products = () => {
  const products = [
    {
      title: "Tadpole",
      description: "The tiny webcam with a clip",
      price: "Now $149",
      image: tadpole,
    },
    {
      title: "Opal C1",
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
    <div className="md:border-b">
      <div className="flex justify-center md:justify-between items-center mx-28 flex-wrap mt-36 md:mt-0">
        {products.map((p) => (
          <div className="flex pt-14" key={p.title}>
            <div className="bg-white flex gap-3 flex-col items-center">
              <p className="text-3xl font-semibold text-black">{p.title}</p>
              <p className="text-gray-400">{p.description}</p>
              {p.price && (
                <Link
                  href={"#"}
                  className="text-black rounded-full bg-yellow-400 px-6 py-2"
                >
                  {p.price}
                </Link>
              )}

              <Image
                width={400}
                height={400}
                className="mix-blend-multiply"
                alt="tadpole"
                src={p.image}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
