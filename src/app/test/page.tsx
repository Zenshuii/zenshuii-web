import { Navbar } from '@/components/Navbar';

export default function TestAppPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-2xl font-bold text-[#FFB877]">
          Test App Page (Dummy)
        </h1>
      </main>
    </>
  );
}
