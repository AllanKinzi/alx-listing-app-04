import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" text-white ">
      <div className="bg-[#34967C] h-8"></div>
      <div className="bg-black px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  py-8 mx-auto">
          <div className="pr-24 w-[640px] flex flex-col gap-8 ">
            <Image
              src="/images/logo_white.svg"
              width={60}
              height={30}
              alt="logo"
            />

            <p className="text-sm">
              ALX is a platform where travelers can discover and book unique,
              comfortable, and affordable lodging options worldwide. From cozy
              city apartments and tranquil countryside retreats to exotic
              beachside villas, ALX connects you with the perfect place to stay
              for any trip.
            </p>
          </div>

          <div className="flex justify-between">
            <div>
              <h3 className="font-semibold mb-2">Explore</h3>
              <ul className="space-y-1 text-sm">
                <li>Apartments in Dubai</li>
                <li>Hotels in New York</li>
                <li>Villa in Spain</li>
                <li>Mansion in Indonesia</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Company</h3>
              <ul className="space-y-1 text-sm">
                <li>About us</li>
                <li>Blog</li>
                <li>Career</li>
                <li>Customers</li>
                <li>Brand</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Help</h3>
              <ul className="space-y-1 text-sm">
                <li>Support</li>
                <li>Cancel booking</li>
                <li>Refunds Process</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 py-4 flex justify-between items-center text-xs">
          <div className="flex items-center">
            Some hotel requires you to cancel more than 24 hours before
            check-in. Details here
          </div>
          <div className="flex items-center align-center">
            <span className="px-2">Terms of Service</span> | <span  className="px-2">Policy service</span> |{" "}
            <span  className="px-2">Cookies Policy</span> | <span  className="px-2">Partners</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
