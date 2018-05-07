


let a = 4;
let b = 5;
let c = 6;
const updateTwoVars = (x,y) => {
    x=7;
    y=3
    c = x * y; 
}

updateTwoVars(a,b);
//here a and b was passed, value is copied
//logging here, a and b val remain unchanged, c changes- it wasnt passed as a parameter of the function
console.log(a,b,c)


