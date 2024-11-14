import Link from "next/link";

const Footer = () => {
  return (
    <div className="">
      <div className="flex justify-between mx-12 md:mx-60 mb-8 flex-wrap gap-16">
        <div className="hidden md:flex flex-col mx-15 gap-5 md:border-t-[0.5px] py-5 border-gray-600">
          <p className="text-black font-3xl font-semibold">
            Subscribe to the <br />
            Opal Newsletter
          </p>

          <p className="text-gray-400 font-sm">
            Latest news, musings, announcements
            <br /> and updates direct to your inbox.
          </p>
          <div className="flex">
            {/* <Link
              href={"#"}
              className="px-24 bg-yellow-300 text-3xl font-semibold text-start hover:bg-gray-500 rounded-full"
            >
              →
            </Link> */}
            <Link
              href={"#"}
              className="bg-black w-28 text-3xl font-semibold px-2 text-end hover:text-center hover:bg-yellow-500 py-3 rounded-full bg-gray-400/10"
            >
              →
            </Link>
          </div>
        </div>

        <div className="flex justify-start md:justify-between gap-6 md:gap-10 py-5 border-t-[0.5px] border-gray-600">
          <div>
            <p className="text-gray-400 mb-3 md:text-lg text-sm">Products</p>
            <ul className="text-black text-xs md:text-sm flex flex-col gap-2">
              <li>Tadpole</li>
              <li>Opal C1</li>
              <li>Composer</li>
            </ul>
          </div>
          <div>
            <p className="text-gray-400 text-sm md:text-lg mb-3">Company</p>
            <ul className="text-black text-xs md:text-sm flex flex-col gap-2">
              <li>About</li>
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div>
            <p className="text-gray-400 text-sm md:text-lg mb-3">Resourses</p>
            <ul className="text-black text-xs md:text-sm flex flex-col gap-2">
              <li>Support</li>
              <li>Media Kit</li>
              <li>Downloads</li>
              <li>Newsletter</li>
            </ul>
          </div>
          <div>
            <p className="text-gray-400 text-sm md:text-lg mb-3">Social</p>
            <ul className="text-black text-xs md:text-sm flex flex-col gap-2">
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
