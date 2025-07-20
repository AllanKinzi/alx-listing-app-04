import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

type Property = {
  id: string;
  name: string;
  description: string;
  location: string;
  price: number;
  imageUrl?: string;
  tags?: string[];
};

interface PropertyDetailProps {
  property: Property;
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  return (
    <div className="p-2 w-full max-w-sm mx-auto">
      {property.imageUrl && (
        <Image
          src={property.imageUrl}
          alt={property.name}
          className="w-full object-cover rounded-lg mb-3"
          width={400}
          height={256}
        />
      )}
      <div className="flex gap-1 mb-2 flex-wrap">
        {property.tags?.map((tag) => (
          <div
            key={tag}
            className="text-xs rounded-full flex items-center justify-center"
          >
            <Button variant={"outline_round"} size={"xs"}>
              {tag}
            </Button>
          </div>
        ))}
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <h1 className="text-lg lg:text-xl truncate pr-2">{property.name}</h1>
          <div className="flex gap-1 items-center shrink-0">
            <Image
              alt="Star"
              width={20}
              height={20}
              src="/assets/icons/Star.svg"
            />
            <span className="text-sm">4.7</span>
          </div>
        </div>
        <p className="text-gray-600 mb-1 text-sm">{property.location}</p>
      </div>
      <div className="flex justify-between items-center gap-2">
        <div className="flex items-center gap-1 lg:gap-2 border rounded-full px-2 lg:px-4 py-1">
          <div className="flex items-center gap-1">
            <Image
              src="/assets/icons/bed.svg"
              alt="bed"
              width={16}
              height={16}
            />
            <p className="text-xs lg:text-sm">1</p>
          </div>
          <div className="flex items-center gap-1">
            <Image
              src="/assets/icons/bathtub.svg"
              alt="bathtub"
              width={16}
              height={16}
            />
            <p className="text-xs lg:text-sm">2</p>
          </div>
          <div className="flex items-center gap-1">
            <Image
              src="/assets/icons/people.svg"
              alt="people"
              width={16}
              height={16}
            />
            <p className="text-xs lg:text-sm">2-4</p>
          </div>
        </div>
        <div className="text-right shrink-0">
          <span className="font-bold text-lg lg:text-2xl">$ 1200</span>
          <span className="text-gray-400 text-sm">/n</span>
        </div>
      </div>
    </div>
  );
}