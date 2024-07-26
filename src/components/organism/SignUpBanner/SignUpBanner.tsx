import React, { FC } from 'react';

import Image from 'next/image';
import { Button } from '@/components';

interface SignUpBannerProps {}

const SignUpBanner: FC<SignUpBannerProps> = ({}) => {
  return (
    <div className="mt-32 mb-10 bg-primary text-primary-foreground px-16 pt-16 flex justify-between items-start">
      <div>
        <div className="text-5xl font-semibold">
          Start posting <br /> jobs today!
        </div>
        <div className="my-6">Start posting job for only $10</div>
        <Button size="lg" variant="secondary" className="text-primary">
          Sign Up for Free
        </Button>
      </div>
      <div>
        <Image
          src="/images/dashboard.png"
          alt="signup-banner"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
};

export default SignUpBanner;
