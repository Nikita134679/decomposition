import React from "react";
import Icon from "./Icon";
import Link from "./Link";

interface NewsItemProps {
  icon: string;
  text: string;
  link: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ icon, text, link }) => (
  <div>
    <Icon symbol={icon} />
    <span>{text}</span>
    <Link href={link} text="Читать дальше" />
  </div>
);

export default NewsItem;
