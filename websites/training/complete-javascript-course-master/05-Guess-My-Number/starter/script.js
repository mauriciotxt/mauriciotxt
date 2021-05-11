const temperatures = [3, -2,-8,-1,"error" ,9 ,13 ,17 ,15 ,14 ,9, 5];

let x = (temperatures) => {
    if (typeOf (temperatures) === "number"){
        return temperatures
    }
}

console.log(x);
console.log("Hi");