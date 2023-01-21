import React, {memo} from 'react';
import CurrencyFormat from "react-currency-format";

interface PricingProps extends Pick<HTMLDivElement, "className"> {
    amount: number;
    discount?: number;
}

const Pricing = ({amount, discount, className}: PricingProps) => {
    return (
        <div className={`flex gap-3 items-end ${className}`}>
            <strong className={"text-primary-400 text-5xl -mb-1"}>
                <CurrencyFormat value={amount} displayType={'text'} thousandSeparator={true} prefix={`$`}/>
            </strong>
            <span className={"line-through text-gray-500 text-md"}>
                <CurrencyFormat value={discount} displayType={'text'} thousandSeparator={true} prefix={`$`}/>
            </span>
        </div>
    );
}

export default memo(Pricing);