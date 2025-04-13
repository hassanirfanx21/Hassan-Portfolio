import './globals.css';
import LenisProvider from './components/LenisProvider';
import ClientOnlyCustomCursor from './components/ClientOnlyCustomCursor';
import TracingBeam from './components/TracingBeam';

export const metadata = {
  title: "Hassan Portfolio",
  description: "Welcome to Hassan's personal portfolio showcasing his work and projects.",
  icons: {
    icon: '/faviconMe.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Alegreya font embed */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="alegreya-font">
        <LenisProvider>
          <ClientOnlyCustomCursor />
          <TracingBeam>{children}</TracingBeam>
        </LenisProvider>
      </body>
    </html>
  );
}
