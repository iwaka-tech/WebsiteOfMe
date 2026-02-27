import { BackgroundVideo } from '@/components/BackgroundVideo';
import { Navbar } from '@/components/Navbar';

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen">
      <BackgroundVideo />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
