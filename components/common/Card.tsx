import React from "react";

export default function Card({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-4 shadow-md bg-white rounded-xl">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
