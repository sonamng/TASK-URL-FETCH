

import React,{useState} from 'react';
function Api() {
const [data,setData]=useState()
   const ApiGet=(()=>{
   fetch("https://jsonplaceholder.typicode.com/posts")
  .then((result)=>{
    result.json().then((resp)=>{
      console.log(resp)
      setData(resp)
    })
  })
})


  return (
    <div className="App">
      <h1>API GET DATA </h1>

      <button onClick={ApiGet}>give me data</button>
      <br/>
      {<pre>{JSON.stringify(data,null,2)}</pre>}
    
    </div>
  );
}

export default Api;
