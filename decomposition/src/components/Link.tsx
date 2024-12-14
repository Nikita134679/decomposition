import React from "react";

interface LinkProps {
  href: string;
  text: string;
}

const Link: React.FC<LinkProps> = ({ href, text }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {text}
  </a>
);

export default Link;
