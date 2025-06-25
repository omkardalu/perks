import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen dark:bg-black dark:text-white">
      <h1 className="text-3xl">Welcome to Perks</h1>
      <p className="text-5xl pb-9 pt-5 text-center">All perks in one place</p>
      <Link href="/perks" className="text-xl bg-black dark:bg-white dark:text-black text-white py-2 px-4 rounded-lg">View Perks</Link>
    </div>
  );
}
