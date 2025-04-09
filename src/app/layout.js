// app/layout.js
import './globals.css';
import { Inter } from 'next/font/google';
import LenisProvider from './components/LenisProvider';
import ClientOnlyCustomCursor from './components/ClientOnlyCustomCursor';
import TracingBeam from './components/TracingBeam';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Hassan Portfolio", // Set the title to "Hassan Portfolio"
  description: "Welcome to Hassan's personal portfolio showcasing his work and projects.",
  icons: {
    icon: '/faviconMe.svg', // Path to your favicon in the app directory
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LenisProvider>
          <ClientOnlyCustomCursor />
          <TracingBeam>{children}</TracingBeam>
        </LenisProvider>
      </body>
    </html>
  );
}
