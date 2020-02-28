

// console.log("start")

// const add = (a,b,znak) => {
//     if(typeof(a) !== "number" & typeof(b) !== "number"){console.log("Niepoprawne parametry"); return};
//     if(a&b){console.log(eval(`${a} ${znak} ${b}`))};
//     if(!b) {console.log(a)};
//  }


//  console.log("if any input diffrent then number returns alert", add("f"));
//  console.log("if inputs are two numbers returns sum", add(5,3,"*"));
//  console.log("if only one number returns this number", add(3));


const person = {
    name: "Bartek",
    color: "czarny",
};

console.log(`nazywam się ${person.name}, moj kolor to ${person.color}`)

function Counter () {
    this.counter = 1,
    // time = this.time,
    this.interval = function () {window.setInterval(() => {
    this.counter++
    console.log(this.counter)}, 1000)
}
}

// function Counter2 () {
//     this.counter = 1,
//     // time = this.time,
//     this.interval = function () {window.setInterval(function(){
//     this.counter++
//     console.log(this.counter)}, 1000)
// }.apply(this);
// }

// const counter = new Counter()
// const counter2 = new Counter2()

// counter.interval()
// counter2.interval()

function object (...args){const a = {...args}; return a};
console.log(object(1,2,3,4,5,9));
