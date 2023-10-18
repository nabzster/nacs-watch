import React from 'react'
import Image from 'next/image'

export default function NotAdopted() {
  return (
<div className="flex flex-col items-center justify-center">
        <div className="flex flex-wrap gap-[3rem] px-3 rounded-md justify-center items-center select-none">
          <Image src="not-adopted/toyota.svg" alt="Toyota" width="100" height="100" />
          <Image src="not-adopted/lexus.svg" alt="Lexus" width="140" height="140" />
          <Image src="not-adopted/suzuki.svg" alt="Suzuki" width="100" height="100" />
          <Image src="not-adopted/chrysler.svg" alt="Chrysler" width="160" height="160" />
          <Image src="not-adopted/alfa-romeo.svg" alt="Alfa Romeo" width="120" height="120" />
          <Image src="not-adopted/dodge.svg" alt="Dodge" width="160" height="160" />
          <Image src="not-adopted/fiat.svg" alt="Fiat" width="120" height="120" />
          <Image src="not-adopted/jeep.svg" alt="Jeep" width="120" height="120" />
          <Image src="not-adopted/maserati.svg" alt="Maserati" width="160" height="160" />
          <Image src="not-adopted/audi.svg" alt="Audi" width="160" height="160" />
          <Image src="not-adopted/volkswagen.svg" alt="Volkswagen" width="120" height="120" />
          <Image src="not-adopted/bentley.svg" alt="Bentley" width="160" height="160" />
          <Image src="not-adopted/bugatti.svg" alt="Bugatti" width="160" height="160" />
          <Image src="not-adopted/lamborghini.svg" alt="Lamborghini" width="120" height="120" />
          <Image src="not-adopted/porsche.svg" alt="Porsche" width="120" height="120" />
          <Image src="not-adopted/lucid.svg" alt="Lucid" width="160" height="160" />
          <Image src="not-adopted/aston-martin.svg" alt="Aston Martin" width="160" height="160" />
          <Image src="not-adopted/ferrari.svg" alt="Ferrari" width="100" height="100" />
          <Image src="not-adopted/mazda.svg" alt="Mazda" width="120" height="120" />
        </div>
      </div>
  )
}
