import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data,setData] = useState({}); //empty object as if fetch fails we still have an empty object
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))

    },[currency])
    console.log(data);
    return data;
}

export default useCurrencyInfo;








//https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json