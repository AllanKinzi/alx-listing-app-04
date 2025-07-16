import Image from "next/image";
import { Briefcase } from 'lucide-react';
import { Button } from "../ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="h-12 bg-primary text-white  flex justify-center items-center">
        <div className="flex gap-4 items-center">
          <Briefcase className="w-5 h-5" />
          Overseas trip? Get the latest information on travel guides
          <Button variant={"black_round"} size={"sm_round"}>
            More Info
          </Button>
        </div>
      </div>
      <div className="mid-header-section border-b-gray-300 h-22 py-4 px-6  flex justify-between items-center">
        <div className="logo">
          <Image src="/images/logo.png" alt="logo" width={60} height={30} />
        </div>
        <div className="logo-center-section flex gap-2 border justify-center items-center h-[58px] rounded-[60px]">
          <div className="flex gap-2 items-center ml-[30px] mr-[88px]">
            <div className="flex gap-1 flex-col ">
              <p> Location </p>
              <p className="text-[#BEBEBE] cursor-pointer">
                {" "}
                Search for destination{" "}
              </p>
            </div>
          </div>

          <div className="flex gap-2 items-center  mr-6">
            <div className="w-px h-8 bg-gray-300 mr-3"></div>
            <div className="flex gap-1 flex-col">
              <p> Check In </p>
              <p className="text-[#BEBEBE] cursor-pointer"> Add date </p>
            </div>
          </div>

          <div className="flex gap-2 items-center mr-6">
            <div className="w-px h-8 bg-gray-300 mr-3"></div>
            <div className="flex gap-1 flex-col">
              <p> Check Out </p>
              <p className="text-[#BEBEBE] cursor-pointer"> Add date </p>
            </div>
          </div>

          <div className="flex gap-2 items-center mr-6">
            <div className="w-px h-8 bg-gray-300 mr-3"></div>
            <div className="flex gap-1 flex-col mr-3">
              <p> People </p>
              <p className="text-[#BEBEBE] cursor-pointer"> Add guest </p>
            </div>
          </div>

          <div className="flex items-center justify-center w-[42px] h-[42px] mr-3 rounded-[50px] bg-[#FFA800] cursor-pointer">
            <Image
              src="/Icons/Magnifer.png"
              alt="magnifier"
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className="sign-in-section flex gap-4">
          <Button variant={"primary_round"}>Sign In</Button>
          <Button variant={"outline_round"}>Sign Up</Button>
        </div>
      </div>
      <div>
        <div className="flex gap-8 h-[88px] border items-center px-6 min-w-max overflow-x-auto scrollbar-hide">
          <CategorySelector
            title="Pool"
            icon="pool.svg"
            href="/categories/pool"
          />
          <CategorySelector
            title="Pool"
            icon="pool.svg"
            href="/categories/pool"
          />
          <CategorySelector
            title="Pool"
            icon="pool.svg"
            href="/categories/pool"
          />
          <CategorySelector
            title="Pool"
            icon="pool.svg"
            href="/categories/pool"
          />
          <CategorySelector
            title="Pool"
            icon="pool.svg"
            href="/categories/pool"
          />
          <CategorySelector
            title="Pool"
            icon="pool.svg"
            href="/categories/pool"
          />
          <CategorySelector
            title="Pool"
            icon="pool.svg"
            href="/categories/pool"
          />
          <CategorySelector
            title="Pool"
            icon="pool.svg"
            href="/categories/pool"
          />
          <CategorySelector
            title="Pool"
            icon="pool.svg"
            href="/categories/pool"
          />
          <CategorySelector
            title="Pool"
            icon="pool.svg"
            href="/categories/pool"
          />
          <CategorySelector
            title="Pool"
            icon="pool.svg"
            href="/categories/pool"
          />
          <CategorySelector
            title="Pool"
            icon="pool.svg"
            href="/categories/pool"
          />
           <CategorySelector
            title="Pool"
            icon="pool.svg"
            href="/categories/pool"
          />
          <CategorySelector
            title="Pool"
            icon="pool.svg"
            href="/categories/pool"
          />
          <CategorySelector
            title="Pool"
            icon="pool.svg"
            href="/categories/pool"
          />
          <CategorySelector
            title="Pool"
            icon="pool.svg"
            href="/categories/pool"
          />
          <CategorySelector
            title="Pool"
            icon="pool.svg"
            href="/categories/pool"
          />
          <CategorySelector
            title="Pool"
            icon="pool.svg"
            href="/categories/pool"
          />
          <CategorySelector
            title="Pool"
            icon="pool.svg"
            href="/categories/pool"
            />
             <CategorySelector
            title="Pool"
            icon="pool.svg"
            href="/categories/pool"
          />
          <CategorySelector
            title="Pool"
            icon="pool.svg"
            href="/categories/pool"
          />
          <CategorySelector
            title="Pool"
            icon="pool.svg"
            href="/categories/pool"
          />
          <CategorySelector
            title="Pool"
            icon="pool.svg"
            href="/categories/pool"
          />
          <CategorySelector
            title="Pool"
            icon="pool.svg"
            href="/categories/pool"
          />
          <CategorySelector
            title="Pool"
            icon="pool.svg"
            href="/categories/pool"
          />
          <CategorySelector
            title="Table"
            icon="pool.svg"
            href="/categories/pool"
            />
      </div>
      </div>

    </header>
  );
};

export default Header;

interface CategorySelectorProps {
  title: string;
  icon: string;
  href: string;
}

const CategorySelector = ({ title, icon, href }: CategorySelectorProps) => {
  return (
    <Link href={href} className="flex flex-col gap-1 items-center">
      <Image
        src={`/Icons/${icon}`}
        alt={title.toLowerCase()}
        width={20}
        height={20}
      />
      <p className="text-[#BEBEBE] cursor-pointer hover:text-gray-400 transition-colors">
        {title}
      </p>
    </Link>
  );
};


