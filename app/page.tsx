import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-200">
      <Link href="/news" className="text-black">Go to news page</Link>
    </div>
  );
}
