// Seeing the working of the call stack
function multiply(a, b) { 
    return a * b;
}

function square(a) { 
    return multiply(a, a);
}

function rightTriangle(a,b,c) { 
    let value = square(a) + square(b) === square(c);
    return value;
}

rightTriangle(3, 4, 5);