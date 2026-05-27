let a=["Hiii", "helooo", 3, 4, 5]
let [A, B, C, D,F] = a
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(A,B,C,D,F)




let obj = {name: "sneha", age: 22, city: "pune"}
console.log(obj.name)

var H=obj.name
console.log(H)

// itterators and generators

for(i in a){
    console.log(a[i])
}

// current value and done state

let num = [1,2,3,'a']
let k=num [Symbol.iterator]()
console.log(k.next())
console.log(k.next())
console.log(k.next())
console.log(k.next())
console.log(k.next())

// Generators()

function hai1(){
    console.log("Hello")
    return "Done"
    console.log("bye")

}
console.log(hai1())

function hai2(){
    return "Done"
    console.log("Hello")

}
console.log(hai2())

function* hai(){

    yield "Hello";
    yield "bye";
    yield "Done";
}

let n = hai()
console.log(n.next())
console.log(n.next())
console.log(n.next())
console.log(n.next())
