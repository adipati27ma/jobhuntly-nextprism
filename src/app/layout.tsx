import type { Metadata } from 'next';
import { Epilogue } from 'next/font/google';
import './globals.css';

import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';

const epilogue = Epilogue({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
        <main>
          <div className="absolute w-2/3 h-screen top-0 right-0 -z-10 ">
            <Image src="/images/pattern.png" alt="pattern image" fill />
          </div>

          {children}
        </main>
      </body>
    </html>
  );
}
