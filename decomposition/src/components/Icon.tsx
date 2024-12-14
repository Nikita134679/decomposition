import React from "react";

interface IconProps {
  symbol: string;
}

const Icon: React.FC<IconProps> = ({ symbol }) => <span>{symbol}</span>;

export default Icon;
