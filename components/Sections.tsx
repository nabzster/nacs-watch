import React from "react";
import Image from "next/image";

export default function Sections() {
  return (
    <section className="flex flex-col items-center justify-center gap-[3rem]">
      <h1 className="text-3xl text-gray-800 border-2 border-neutral-400 rounded-2xl bg-green-300 py-2 px-4 shadow-md">
        Adopted
      </h1>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-wrap gap-[3rem] px-3 rounded-md justify-center items-center">
          <Image src="/tesla.svg" alt="Tesla" width="100" height="100" />
          <Image src="/lincoln.svg" alt="Lincoln" width="120" height="120" />
          <Image src="/ford.svg" alt="Ford" width="100" height="100" />
          <Image src="/chevrolet.svg" alt="Chevrolet" width="100" height="100"  />
          <Image src="/buick.svg" alt="Buick" width="100" height="100"  />
          <Image src="/gmc.svg" alt="GMC" width="100" height="100"  />
          <Image src="/cadillac.svg" alt="Cadillac" width="100" height="100"  />
          <Image src="/volvo.svg" alt="Volvo" width="120" height="120"  />
          <Image src="/polestar.svg" alt="Polestar" width="100" height="100"  />
          <Image src="/mercedes.svg" alt="Mercedes-Benz" width="120" height="120"  />
          <Image src="/jaguar.svg" alt="Jaguar" width="100" height="100"  />
          <Image src="/landrover.svg" alt="Land Rover" width="100" height="100"  />
          <Image src="/rivian.svg" alt="Rivian" width="100" height="100"  />
          <Image src="/nissan.svg" alt="Nissan" width="100" height="100"  />
          <Image src="/infiniti.svg" alt="Infiniti" width="100" height="100"  />
          <Image src="/lotus.svg" alt="Lotus" width="100" height="100"  />
          <Image src="/mitsubishi.svg" alt="Mitsubishi" width="100" height="100"  />
          <Image src="/hyundai.svg" alt="Hyundai" width="100" height="100"  />
          <Image src="/kia.svg" alt="Kia" width="100" height="100"  />
          <Image src="/genesis.svg" alt="Genesis" width="160" height="160"  />
          <Image src="/honda.svg" alt="Honda" width="120" height="120"  />
          <Image src="/acura.svg" alt="Acura" width="100" height="100"  />
          <Image src="/bmw.svg" alt="BMW" width="100" height="100"  />
          <Image src="/rolls-royce.svg" alt="Rolls-Royce" width="100" height="100"  />
          <Image src="/mini.svg" alt="Mini" width="140" height="140"  />
          <Image src="/aptera.svg" alt="Aptera" width="160" height="160"  />
          <Image src="/fisker.svg" alt="Fisker" width="100" height="100"  />
          <Image src="/vinfast.svg" alt="Vinfast" width="100" height="100"  />
        </div>
      </div>

      <h1 className="text-3xl text-gray-400 border-2 border-neutral-600 rounded-2xl bg-red-600 py-2 px-4 shadow-md">
        Not Adopted
      </h1>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-wrap gap-[3rem] px-3 rounded-md justify-center items-center">
          <Image src="/toyota.svg" alt="Toyota" width="100" height="100" />
          <Image src="/lexus.svg" alt="Lexus" width="140" height="140" />
          <Image src="/suzuki.svg" alt="Suzuki" width="100" height="100" />
          <Image src="/chrysler.svg" alt="Chrysler" width="160" height="160" />
          <Image src="/alfa-romeo.svg" alt="Alfa Romeo" width="120" height="120" />
          <Image src="/dodge.svg" alt="Dodge" width="160" height="160" />
          <Image src="/fiat.svg" alt="Fiat" width="120" height="120" />
          <Image src="/jeep.svg" alt="Jeep" width="120" height="120" />
          <Image src="/maserati.svg" alt="Maserati" width="160" height="160" />
          <Image src="/audi.svg" alt="Audi" width="160" height="160" />
          <Image src="/volkswagen.svg" alt="Volkswagen" width="120" height="120" />
          <Image src="/bentley.svg" alt="Bentley" width="160" height="160" />
          <Image src="/bugatti.svg" alt="Bugatti" width="160" height="160" />
          <Image src="/lamborghini.svg" alt="Lamborghini" width="120" height="120" />
          <Image src="/porsche.svg" alt="Porsche" width="120" height="120" />
          <Image src="/lucid.svg" alt="Lucid" width="160" height="160" />
          <Image src="/aston-martin.svg" alt="Aston Martin" width="160" height="160" />
          <Image src="/ferrari.svg" alt="Ferrari" width="100" height="100" />
          <Image src="/mazda.svg" alt="Mazda" width="120" height="120" />
        </div>
      </div>
    </section>
  );
}
