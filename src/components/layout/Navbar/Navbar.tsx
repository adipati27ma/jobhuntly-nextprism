import Image from 'next/image';
import React, { FC } from 'react';

import { Button } from '@/components';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <header className="px-32 py-5 flex flex-row items-start justify-between">
      <div className="inline-flex items-center gap-12">
        <div>
          <Image src="/images/logo2.png" alt="logo" width={160} height={36} />
        </div>
        <div>
          <span className="font-medium text-gray-400 mr-4 cursor-pointer text-muted-foreground">
            Find Jobs
          </span>
          <span className="font-medium text-gray-400 cursor-pointer text-muted-foreground">
            Browse Companies
          </span>
        </div>
      </div>
      <div className="inline-flex items-center gap-4 h-8">
        <Button variant="link">Login</Button>
        <Button>Sign Up</Button>
      </div>
    </header>
  );
};

export default Navbar;
