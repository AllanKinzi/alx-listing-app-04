import { Button } from "@/components/common/Button";
import Layout from "@/components/layout/Layout";
import PropertyDetail from "@/components/property/PropertyDetail";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section >
        <div
          className="px-8 w-full h-[480px] bg-cover bg-center bg-no-repeat rounded-lg"
          style={{
            backgroundImage: "url('/assets/images/hero.svg')",
          }}
        ></div>
      </section>

      {/* FILTER SECTION */}
      <section>
        <div className="flex justify-between items-center py-5">
          <div className="flex gap-2 items-center">
            <Button variant={"outline_round"}>All</Button>
            <Button variant={"outline_round"}>Top Villa</Button>
            <Button variant={"outline_round"}>Free Reschedule</Button>
            <Button variant={"outline_round"}>Book Now, Pay Later</Button>
            <Button variant={"outline_round"}>Self CheckIn</Button>
            <Button variant={"outline_round"}>Instant Book</Button>
          </div>

          <div className="flex gap-2 items-center">
            <Button variant={"outline_round"}>Filter</Button>
            <Button variant={"outline_round"}>Sort By: Highest Price</Button>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <PropertyDetail property={{
            id: "1",
            name: "Villa Arrecife Beach House",
            location: "New York, NY",
            price: 100,
            description:"Test CARD",
            imageUrl: "/assets/images/property1.png",
            tags: ["Beach", "Private", "Luxury", "Swimming Pool", "Private Pool"],
          }} />  
          <PropertyDetail property={{
            id: "1",
            name: "Villa Arrecife Beach House",
            location: "New York, NY",
            price: 100,
            description:"Test CARD",
            imageUrl: "/assets/images/property1.png",
            tags: ["Beach", "Private", "Luxury", "Swimming Pool", "Private Pool"],
          }} />  
          <PropertyDetail property={{
            id: "1",
            name: "Villa Arrecife Beach House",
            location: "New York, NY",
            price: 100,
            description:"Test CARD",
            imageUrl: "/assets/images/property1.png",
            tags: ["Beach", "Private", "Luxury", "Swimming Pool", "Private Pool"],
          }} />  
          <PropertyDetail property={{
            id: "1",
            name: "Villa Arrecife Beach House",
            location: "New York, NY",
            price: 100,
            description:"Test CARD",
            imageUrl: "/assets/images/property1.png",
            tags: ["Beach", "Private", "Luxury", "Swimming Pool", "Private Pool"],
          }} />  
          <PropertyDetail property={{
            id: "1",
            name: "Villa Arrecife Beach House",
            location: "New York, NY",
            price: 100,
            description:"Test CARD",
            imageUrl: "/assets/images/property1.png",
            tags: ["Beach", "Private", "Luxury", "Swimming Pool", "Private Pool"],
          }} />  
      </section>
      <Button variant={"default"} className="bg-c-primary text-white">
        Get Started
      </Button>
    </>
  );
}
