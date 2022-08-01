const privateCounter = () => {
    let count = 0;
    return {
      increment: () => {
        count++;
      },
      getvalue: () => {
        return count;
      },
    };
  };
  const counter = privateCounter();
  console.log(counter.getvalue());
  counter.increment();
  console.log(counter.getvalue());
  
  
  const privateSecret = () => {
    const secret = "foo";
    return ()=>secret;
  
  };
  const key = privateSecret();
  console.log(key());
  
 const md=(o='m',v=5)=>{
    if(o==='d') return (x)=>x/v
    return (x)=>x*v
 }
 let m=md('m',4)
 console.log(m(100))
 let d=md('d',1)
 console.log(d(100))