// Path: app/layout.tsx
import './globals.css';
import { Public_Sans, Space_Grotesk } from 'next/font/google';
import type { Metadata } from 'next'; // Import Metadata type

const publicSans = Public_Sans({ subsets: ['latin'] });
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // Specify weights if needed
});

export const metadata: Metadata = {
  title: 'SuiPilot | AI-Powered Sui Blockchain Toolkit', // Updated title
  description: 'Interact with DeFi protocols on Sui through natural language. AI-driven toolkit by SuiPilot.', // Updated description
  icons: {
    shortcut: '/images/pelagos.ico', // Assuming pelagos.ico is your SuiPilot icon
  },
  openGraph: {
    title: 'SuiPilot | AI-Powered Sui Blockchain Toolkit',
    description: 'Interact with DeFi protocols on Sui through natural language. AI-driven toolkit by SuiPilot.',
    images: [
      {
        url: '/images/title-card.png', // Ensure this path is correct and ideally an absolute URL for production
        // width: 1200, // Optional
        // height: 630, // Optional
        alt: 'SuiPilot AI Toolkit for Sui Blockchain',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SuiPilot | AI-Powered Sui Blockchain Toolkit',
    description: 'Interact with DeFi protocols on Sui through natural language. AI-driven toolkit by SuiPilot.',
    images: ['/images/title-card.png'], // Ensure this path is correct
    // creator: '@sparshtwt', // Optional: If you have a specific Twitter handle for the project
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <head> elements are now managed by the metadata object */}
      <body className={`${spaceGrotesk.className} bg-slate-900 text-white`}> {/* Moved bg-slate-900 here */}
        <div className="fixed inset-0 bg-gradient-to-br from-primary-900/20 to-primary-600/10 animate-gradient -z-10"></div> {/* Ensure gradient is behind content */}
        {/* Removed padding and h-[100vh] from here */}
        <div className="relative z-0 min-h-screen flex flex-col"> {/* z-0 if needed, or manage z-index carefully */}
          {children}
        </div>
      </body>
    </html>
  );
}