import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Input, Separator } from '@/components';

interface FooterProps {}
type socialMediaLinksType = {
  src: string;
  link: string;
};

const aboutLinks = [
  'Companies',
  'Pricing',
  'Terms',
  'Advice',
  'Privacy Policy',
];
const resourcesLinks = ['Help Docs', 'Guide', 'Updates', 'Contact Us'];
const socialMediaLinks: socialMediaLinksType[] = [
  { src: '/images/soc-Facebook.png', link: 'https://www.facebook.com' },
  { src: '/images/soc-Instagram.png', link: 'https://www.instagram.com' },
  { src: '/images/soc-Twitter.png', link: 'https://www.twitter.com' },
  { src: '/images/soc-LinkedIn.png', link: 'https://www.linkedin.com' },
  { src: '/images/soc-Dribbble.png', link: 'https://www.dribbble.com' },
];

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="bg-slate-900 px-32 text-foreground pt-16 pb-11">
      <div className="flex flex-row items-start justify-between">
        <div>
          <Image src="/images/logo.png" alt="logo" width={160} height={36} />
          <div className="text-muted mt-8 max-w-[380px]">
            Great platform for the job seeker that passionate about startups.
            Find your dream job easier.
          </div>
        </div>

        {/* docs: about link */}
        <div>
          <div className="text-lg text-primary-foreground font-semibold mb-5">
            About
          </div>

          <div className="space-y-4">
            {aboutLinks.map((link: string, index: number) => (
              <Link href="/" className="block text-muted" key={index}>
                {link}
              </Link>
            ))}
          </div>
        </div>

        {/* docs: resources link */}
        <div>
          <div className="text-lg text-primary-foreground font-semibold mb-5">
            Resources
          </div>

          <div className="space-y-4">
            {resourcesLinks.map((link: string, index: number) => (
              <Link href="/" className="block text-muted" key={index}>
                {link}
              </Link>
            ))}
          </div>
        </div>

        {/* docs: get job notif section */}
        <div className="max-w-[300px]">
          <div className="text-lg text-primary-foreground font-semibold mb-5">
            Get job notifications
          </div>
          <div className="text-muted">
            The latest job news, articles, sent to your inbox weekly
          </div>
          <div className="mt-10 inline-flex items-center gap-3">
            <Input placeholder="Email Address" className="py-5" />
            <Button className="py-5">Subscribe</Button>
          </div>
        </div>
      </div>

      {/* docs: copyrights */}
      <Separator className="mt-20 mb-11 bg-gray-300" />
      <div className="flex flex-row items-center justify-between">
        <div className="text-slate-600">
          2024 @ JobHuntly. All rights reserved.
        </div>
        <div className="space-x-3 flex">
          {socialMediaLinks.map((item: socialMediaLinksType, index: number) => (
            <a href={item.link} key={index} target="_blank">
              <Image
                src={item.src}
                alt="social media"
                key={index}
                width={32}
                height={32}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
