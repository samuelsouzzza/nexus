'use client';
import './globals.css';
import { Nav } from '../components/Nav/Nav';
import { AppProgressBar } from 'next-nprogress-bar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-br'>
      <body>
        <AppProgressBar
          height='4px'
          color='var(--primary)'
          options={{ showSpinner: false }}
          shallowRouting
        />
        <Nav />
        {children}
      </body>
    </html>
  );
}
