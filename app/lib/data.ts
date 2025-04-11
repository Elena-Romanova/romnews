// Функции для взаимодйствия с базой данных

"use server"
import prisma from "@/app/lib/db";
import { news } from "@prisma/client";
import { unstable_noStore } from "next/cache";

export async function getAllNews() {
    unstable_noStore();
    try {
        console.log('GetAllNews');
        const data = await prisma.news.findMany();
        return data

    } catch (error) {
        console.error("Database error:", error);
        throw new Error("Failed to fetch data");
    }
}

export async function getNewsById(id: number) {
    unstable_noStore();
    try {
        console.log('getNewsById');
        const data = await prisma.news.findUnique(
            {
                where: { id: id }
            }
        )
        return data
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch news data")
    }
}

export async function createNews(news: news) {
    unstable_noStore();
    try {
        console.log("Creating news")
        await prisma.news.create({
            data: news
        })
    } catch (error) {
        console.error("Database error:", error)
        throw new Error("Failed to create news data")
    }
}
