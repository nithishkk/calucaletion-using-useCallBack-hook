import React ,{useState,useEffect,useCallback} from "react";
import "./style.css";
// let price = 10;
// let VAT = 0.25;
// let total = `Total: ${(price * (1 + VAT)).toFixed(5)}`;

export default function App() {
  const[value,setValue]=useState('')
useEffect(()=>{
  function Add(price,val){
    const total=`Total: ${(price*(1+val).toFixed(2))}`
    setValue(total)
  }
  Add(10,0.25)

  },[])
// const Add=useCallback((price,val)=>{
//   const total=`Total: ${(price*(1+val).toFixed(2))}`
//    //setValue(total)
//    return total
//   // setValue(total)
//   // return total
// },[value])
  return (
    <div>
      {/* <h1>{Add(10,0.26)}</h1> */}
      <h1>Hello StackBlitz!</h1>
      <h1>{value}</h1>
      <p>Start editing to see some magic happen {value} :)</p>
    </div>
  );
}
