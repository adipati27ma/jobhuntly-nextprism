import type { Metadata } from 'next';
import { Epilogue } from 'next/font/google';
import './globals.css';

import { Navbar, Footer } from '@/components/layout';

const epilogue = Epilogue({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'JobHuntly',
  description:
    'Find your dream job with JobHuntly - the ultimate job search platform. Explore thousands of job listings, connect with top employers, and take your career to the next level. Start your job search today!',
};

// docs: just some testing documentations
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={epilogue.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
