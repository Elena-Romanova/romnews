import Link from "next/link";

export default function Header() {
    return (
        <div className="bg-green-600 p-4">
            <Link href={"/"}>
                <p className="text-4xl">Flowerau</p>
            </Link>
        </div>
    )
}