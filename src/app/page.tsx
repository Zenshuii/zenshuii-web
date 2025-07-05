export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-poppins)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-poppins)] font-semibold">
          Hello World!
        </code>
      </main>
    </div>
  );
}
