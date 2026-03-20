import Image from 'next/image';
import React, { FC } from 'react';

import { Button } from '@/components';
import Link from 'next/link';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <header className="px-32 py-5 flex flex-row items-start justify-between">
      <div className="inline-flex items-center gap-12">
        <div>
          <Link href="/">
            <Image src="/images/logo2.png" alt="logo" width={160} height={36} />
          </Link>
        </div>
        <div>
          <Link
            href="/find-jobs"
            className="font-medium text-gray-400 mr-4 cursor-pointer text-muted-foreground"
          >
            Find Jobs
          </Link>
          <Link
            href="/find-companies"
            className="font-medium text-gray-400 mr-4 cursor-pointer text-muted-foreground"
          >
            Browse Companies
          </Link>
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
