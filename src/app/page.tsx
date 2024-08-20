import {
  Category,
  ClientsSection,
  FeaturedJob,
  Hero,
  LatestJobs,
} from '@/components';
import SignUpBanner from '../components/organism/SignUpBanner/SignUpBanner';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="absolute w-2/3 h-screen top-0 right-0 -z-10 ">
        <Image src="/images/pattern.png" alt="pattern image" fill />
      </div>
      <div className="px-32">
        <Hero />
        <ClientsSection />
        <Category />
        <SignUpBanner />
        <FeaturedJob />
        <LatestJobs />
      </div>
    </>
  );
}
