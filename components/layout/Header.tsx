import { Button } from "../common/Button";
import { Briefcase } from 'lucide-react';

const Header = () => {
  return (
    <header>
      <div className="h-12 bg-primary text-white  flex justify-center items-center">
        <div className="flex gap-4 items-center">
          <Briefcase className="w-5 h-5" />
          Overseas trip? Get the latest information on travel guides
          <Button variant={"black_round"} size={"sm_round"}>More Info</Button>
        </div>
      </div>
      <div className="mid-header-section border-b-gray-300 h-22 py-4 px-4  flex justify-between items-center">
        <div className="logo">LOGO</div>
        <div className="logo-center-section flex gap-2">Mid</div>
        <div className="sign-in-section flex gap-4">
          <Button variant={"primary_round"}>Sign In</Button>
          <Button variant={"outline_round"}>Sign Up</Button>
        </div>
      </div>
      {/* <nav className="flex gap-4">
        <a href="#" className="text-blue-500">
          Home
        </a>
        <a href="#" className="text-blue-500">
          About
        </a>
        <a href="#" className="text-blue-500">
          Contact
        </a>
      </nav> */}
    </header>
  );
};

export default Header;