import React from "react";
import NewsItem from "./NewsItem";

const newsData = [
  { icon: "📰", text: "Новость 1", link: "/news/1" },
  { icon: "🌍", text: "Новость 2", link: "/news/2" },
  { icon: "⚡", text: "Новость 3", link: "/news/3" },
];

const NewsList: React.FC = () => (
  <div>
    {newsData.map((news, index) => (
      <NewsItem key={index} icon={news.icon} text={news.text} link={news.link} />
    ))}
  </div>
);

export default NewsList;
