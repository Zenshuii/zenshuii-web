import { HomeHero } from '@/components/HomeHero';
import { Navbar } from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Navbar />
      <HomeHero />
    </main>
  );
}
