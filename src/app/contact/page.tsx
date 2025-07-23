import { Navbar } from '@/components/Navbar';

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full">
      <Navbar />
      <section className="relative flex min-h-screen flex-col items-center justify-center bg-[#1C1C1C] px-4 text-center">
        <h1 className="text-2xl font-bold text-[#FFB877]">Contact Page</h1>
        <p className="mt-4 text-[#F5F5F5]">
          This is the Contact page of our application.
        </p>
      </section>
    </main>
  );
}
