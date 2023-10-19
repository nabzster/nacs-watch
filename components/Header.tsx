"use client";

import React from "react";
import { links } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="">
      <nav className="flex items-center justify-evenly p-4 my-[2rem]">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Image src="/nacs.svg" alt="NACS Charger" width="100" height="100" />
          <h1 className="text-4xl font-semibold text-gray-900 text-center">North American Charging Standard</h1>
        </div>
      </nav>
    </header>
  );
}
