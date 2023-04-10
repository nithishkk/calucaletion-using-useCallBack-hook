import React ,{useState,useEffect,useCallback} from "react";
import "./style.css";
// let price = 10;
// let VAT = 0.25;
// let total = `Total: ${(price * (1 + VAT)).toFixed(5)}`;

export default function App() {
const Add=useCallback((price,val)=>{
  const total=`Total: ${(price*(1+val).toFixed(2))}`
  return total
},[])
  return (
    <div>
      <h1>{Add(10,0.26)}</h1>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
