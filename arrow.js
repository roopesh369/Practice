class Person {
    constructor(xname){
        this.xname=xname
    }
    
    funcArrow(){
        setTimeout(()=>{
            console.log("Arrow  " + this.xname)
        },100)
    }
    funcNormal(){
        setTimeout(function(){
            console.log("Normal  " + this.xname)
        },100)
    }
}
let p = new Person('kkkk')
p.funcArrow()
p.funcNormal()