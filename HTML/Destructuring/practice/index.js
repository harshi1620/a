
let button = document.getElementById("button")
 
let a=0
let b=0
let c=0
button.addEventListener("click",function(){
    a+=2
    console.log("value of A is:",a)
    console.log("button clicked")

    let  lastclick =0
    button.addEventListener("click",function(){
        let current = Date.now()
        if (current-lastclick>=1000){
            b+=2;
            console.log("value of b is:",b);
            lastclick=current;
        }
        console.log("button clicked")

    })

    



})