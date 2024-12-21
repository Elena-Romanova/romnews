"use client"
import { FormEvent, useState } from "react";
import { createNews } from "@/app/lib/data";
import { news } from "@prisma/client";

export default function NewsCreator() {
    const [title, setTitle] = useState("")
    const [excerpt, setExcerpt] = useState("")
    const [text, setText] = useState("")
    const [date, setDate] = useState("")
    const [image, setImage] = useState("")

    function CreateNews(event: FormEvent) {
        event.preventDefault()
        const collected_news_data: news = {
            title: title,
            excerpt: excerpt,
            text: text,
            date: new Date(date),
            image: image
        }
        createNews(collected_news_data)
        setTitle("")
        setExcerpt("")
        setText("")
        setDate("")
        setImage("")
    }

    return(
        <form onSubmit={CreateNews} className="mx-3 p-4 w-full border-2 border-green-900 rounded-lg grid gap-4">
            <input onChange={(e) => {setTitle(e.target.value)}} value={title} required placeholder="Название" className="h-fit text-black pl-2"></input>
            <input onChange={(e) => {setExcerpt(e.target.value)}} value={excerpt} required placeholder="Выжимка" className="h-fit text-black pl-2"></input>
            <input onChange={(e) => {setImage(e.target.value)}} value={image} placeholder="Ссылка на изображение (опционально)" className="h-fit text-black pl-2"></input>
            <textarea onChange={(e) => {setText(e.target.value)}} value={text} placeholder="Содержимое статьи" required className="h-96 text-black pl-2"></textarea>
            <div className="grid grid-cols-2 gap-4 justify-items-center">
                <input onChange={(e) => {setDate(e.target.value)}} value={date} className="text-black w-fit px-3" type="Date"></input>
                <button type="submit" className="bg-green-600 rounded-md w-fit px-3">
                    Создать новость
                </button>
            </div>
        </form>
    )
}