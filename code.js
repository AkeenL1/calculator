function add(a,b)
{
    return a+b;
}
function subtract(a,b)
{
    return a-b;
}
function divide(a,b)
{
    if(b==0)
    {
        return "Error divide by 0";
    }
    return a/b;
}
function multiply(a,b)
{
    return a*b;
}

function operate(operator,a,b)
{
    switch (operator) {
        case "add":
            return add(a,b);
            break;
        case "subtract":
            return subtract(a,b);
            break;
        case "multiply":
            return multiply(a,b);
            break;
        case "divide":
            return divide(a,b);
            break;
        default:
            break;
    }

}
let init = false;
const display = document.getElementById("display");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const zero = document.getElementById("zero");

one.addEventListener("click",function(){
    if(init == false)
    {
        display.textContent = "1"
        init = true;
    }
    else
        display.innerHTML += "1";
});
two.addEventListener("click",function(){
    if(init == false)
    {
        display.textContent = "2";
        init = true;
    }
    else
        display.innerHTML += "2"; 
});
three.addEventListener("click",function(){
    if(init == false)
    {
        display.textContent = "3";
        init = true;
    }
    else
        display.innerHTML += "3"; 
});
four.addEventListener("click",function(){
    if(init == false)
    {
        display.textContent = "4";
        init = true;
    }
    else
        display.innerHTML += "4"; 
});
five.addEventListener("click",function(){
    if(init == false)
    {
        display.textContent = "5";
        init = true;
    }
    else
        display.innerHTML += "5"; 
});
six.addEventListener("click",function(){
    if(init == false)
    {
        display.textContent = "6";
        init = true;
    }
    else
        display.innerHTML += "6"; 
});
seven.addEventListener("click",function(){
    if(init == false)
    {
        display.textContent = "7";
        init = true;
    }
    else
        display.innerHTML += "7"; 
});
eight.addEventListener("click",function(){
    if(init == false)
    {
        display.textContent = "8";
        init = true;
    }
    else
        display.innerHTML += "8"; 
});
nine.addEventListener("click",function(){
    if(init == false)
    {
        display.textContent = "9";
        init = true;
    }
    else
        display.innerHTML += "9"; 
});
zero.addEventListener("click",function(){
    
    if(display.innerHTML == "0" || init == false)
    {
        display.textContent = "0";
    }
    else 
        display.innerHTML += "0"; 
});

const equations = [];

const addd = document.getElementById("add");
let num;
addd.addEventListener("click",function()
{
    num = Number(display.innerText);
    if(equations[0]==null || equations[1] == null)
    {
        equations[0] = num;
        equations[1] = "add";
        init = false;
    }
    else
    {
        let ans = operate(equations[1],equations[0],num);
        display.innerHTML = ans;
        equations[0] = ans;
        equations[1] = "add";
        init = false;
    }
    decimal = false;
});

const sub = document.getElementById("subtract")
sub.addEventListener("click",function()
{
    num = Number(display.innerText);
    if(equations[0]==null || equations[1] == null)
    {
        equations[0] = num;
        equations[1] = "subtract";
        init = false;
    }
    else
    {
        let ans = operate(equations[1],equations[0],num);
        display.innerHTML = ans;
        equations[0] = ans;
        equations[1] = "subtract";
        init = false;
    }
    decimal = false;
});

const div = document.getElementById("divide")
div.addEventListener("click",function()
{
    num = Number(display.innerText);
    if(equations[0]==null || equations[1] == null)
    {
        equations[0] = num;
        equations[1] = "divide";
        init = false;
    }
    else
    {
        let ans = operate(equations[1],equations[0],num);
        display.innerHTML = ans;
        equations[0] = ans;
        equations[1] = "divide";
        init = false;
    }
    decimal = false;
});

const mult = document.getElementById("multiply")
mult.addEventListener("click",function()
{
    num = Number(display.innerText);
    if(equations[0]==null || equations[1] == null)
    {
        equations[0] = num;
        equations[1] = "multiply";

        init = false;
    }
    else
    {
        let ans = operate(equations[1],equations[0],num);
        display.innerHTML = ans;
        equations[0] = ans;
        equations[1] = "multiply";
        init = false;
    }
    decimal = false;
});
let neg = false;
const sign = document.getElementById("modularity");
sign.addEventListener("click",function()
{
    num = Number(display.innerText);
    display.innerHTML = multiply(num,-1);
});

const clr = document.getElementById("clear");
clr.addEventListener("click",function()
{
    equations.length = 0;
    display.innerHTML = "0";
    decimal = false;
    init = false;
});

const eql = document.getElementById("equals");
eql.addEventListener("click",function()
{
    if(equations[1] != null && equations[0] != null)
    {
        num = Number(display.innerText);
        let ans = operate(equations[1],equations[0],num);
        display.innerHTML = ans;
        equations[0] = ans;
        equations[1] = null;
        init = false;
        decimal = false;
    }
})

const dot = document.getElementById("dot");
let decimal = false;
dot.addEventListener("click",function()
{
    if(decimal == false)
    {
        if(init == false)
        {
            display.innerHTML = "0.";
            init = true;
        }
        else
        {
            display.innerHTML += ".";
            decimal = true;
        }
        
    }
    
});