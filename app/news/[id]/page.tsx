import { getNewsById } from "@/app/lib/data"
import Header from "@/app/ui/header";
import NewsComponent from "@/app/ui/news_component";

export default async function NewsPage({ params }: { params: { id: string } }) {
    const { id } = await params
    const newsData = await getNewsById(Number(id));
    const newsArray = newsData ? [newsData] : [];
    return (
        <div>
            <Header></Header>
            <NewsComponent newsData={newsArray} newsPage={true}></NewsComponent>
        </div>
    )
}