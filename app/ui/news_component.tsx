import { news } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function NewsComponent({ newsData, newsPage }: { newsData: news[], newsPage: boolean }) {
    return (
        <div className={newsPage ? "mx-8 mt-8" : "grid grid-cols-2 gap-4 bg-gray-200 h-fit"}>
            {newsData.map((elem) => (
                <div key={elem.id} className="my-1 h-full border-2 border-green-900 p-2 rounded-lg shadow-md">
                    <Link href={`/news/${elem.id}`} className={"group"}>
                        <p className={newsPage ? "text-3xl text-black text-center" : "text-xl text-black underline"}>
                            {elem.title}
                        </p>
                    </Link>
                    <p className={newsPage ? "text-lg text-black text-center" : "text-black"}>{elem.excerpt}</p>
                    {newsPage && (
                        <div>
                            {elem.image && (
                                <div>
                                    <Image src={elem.image} alt="News's image" width={400} height={300}></Image>
                                </div>
                            )}
                            <p className="text-black">{elem.text}</p>
                            <div className="text-black place-self-end">
                                Date: {elem.date.toDateString()}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}