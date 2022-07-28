function Count(obj){
    let ans=0;
    for(i=0; i<obj.options.length; i++){
        if(obj.options[i].selected){
            ans++;
        }
    }
    return ans;
}
const btn = document.getElementById('btn');
btn.addEventListener('click', ()=>{
    const carlist= document.getElementById('carlist');
    ans=Count(carlist);
    console.log(ans);
}
)