import Image from 'next/image';
import React, { FC } from 'react';

interface ClientsSectionProps {}

const clients = [
  '/images/jobox.png',
  '/images/dsign.png',
  '/images/wave.png',
  '/images/twins.png',
  '/images/bubles.png',
];

const ClientsSection: FC<ClientsSectionProps> = ({}) => {
  return (
    <div className="relative z-10">
      <div className="text-lg text-muted-foreground">
        Companies we helped grow
      </div>
      <div className="mt-8 flex justify-between">
        {clients.map((client, index) => (
          <Image
            key={index}
            src={client}
            alt={client}
            width={139}
            height={35}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientsSection;
