
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { BackgroundVideo } from '@/components/BackgroundVideo';
import { Navbar } from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Моят Свят',
  description: 'Личен уебсайт и блог',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased min-h-screen relative bg-background">
        <LayoutWrapper>{children}</LayoutWrapper>
        <Toaster />
      </body>
    </html>
  );
}

// Помощен компонент за условно показване на навигацията и видеото
import { LayoutWrapper } from '@/components/LayoutWrapper';
