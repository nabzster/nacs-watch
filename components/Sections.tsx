import React from "react";
import Image from "next/image";
import Adopted from "./Adopted";
import NotAdopted from "./NotAdopted";

export default function Sections() {
  return (
    <section className="flex flex-col items-center justify-center gap-[3rem]">
        <h1 className="text-2xl font-semibold text-gray-800 bg-green-600 rounded-2xl py-2 px-6 shadow-md">
          Adopted
        </h1>

        <Adopted />

      <h1 className="text-2xl font-semibold text-black border-2 border-neutral-600 rounded-2xl bg-red-600 py-2 px-6 shadow-md">
        Not Adopted
      </h1>

      <NotAdopted />
    </section>
  );
}
