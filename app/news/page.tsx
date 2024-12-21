import NewsComponent from "@/app/ui/news_component";
import { getAllNews } from "@/app/lib/data";
import Header from "@/app/ui/header";
import NewsCreator from "@/app/ui/create_news";

export default async function Home() {
  const newsData = await getAllNews()

  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-2 p-8 gap-8">
        <div className="h-auto">
          <NewsComponent newsData={newsData} newsPage={false}></NewsComponent>
        </div>
        <NewsCreator></NewsCreator>
      </div>
    </div>
  );
}