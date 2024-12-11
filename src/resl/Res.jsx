import { useState } from "react"

export const Res=()=>{
    const [count,setCount]=useState(0)
    console.log(count);
    

const oes=()=>{
 setCount(el=>el+1)
}

const asd=()=>{
    if(count>0){
      setCount(el=>el-1)  
    }
}


    return (
        <div>
<button onClick={oes} >+</button>
<h1>{count}</h1>
<button onClick={asd}>-</button>
        </div>
    )
}





