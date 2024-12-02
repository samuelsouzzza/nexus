import type { Metadata } from 'next';
import './globals.css';
import { Nav } from '../components/Nav/Nav';

export const metadata: Metadata = {
  title: 'Nexus | Ligando ideias',
  description: 'Nexus | Ligando ideias',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-br'>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
