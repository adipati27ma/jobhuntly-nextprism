import { Category, ClientsSection, Hero } from '@/components';
import SignUpBanner from '../components/organism/SignUpBanner/SignUpBanner';

export default function Home() {
  return (
    <div className="px-32">
      <Hero />
      <ClientsSection />
      <Category />
      <SignUpBanner />
    </div>
  );
}
