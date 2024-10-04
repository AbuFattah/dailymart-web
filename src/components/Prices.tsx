import React, { FC } from "react";

export interface PricesProps {
  className?: string;
  price?: number;
  contentClass?: string;
}

const Prices: FC<PricesProps> = ({
  className = "",
  price = 33,
  contentClass = "py-1 text-sm font-medium",
}) => {
  return (
    <div className={`${className}`}>
      <div
        className={`flex items-center border-1 border-green-500 rounded-lg ${contentClass}`}
      >
        <span className="text-slate-500 !leading-none">৳ {String(price)}</span>
      </div>
    </div>
  );
};

export default Prices;
