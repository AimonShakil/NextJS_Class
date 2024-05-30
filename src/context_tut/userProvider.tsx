
//function

import { Interface } from "readline";

function sum (num1 : number, num2 : number){
    return num1 + num2
}

console.log(sum(6,6));

// 

function getUserNamefromEmail (email : string) {
return email.slice(0, email.indexOf("@"))
}

console.log(getUserNamefromEmail("user@GitHub.com"));

const seeaNew = function (email : string) { // anonymous function
    return email.slice(0, email.indexOf("@"))
}
const seeaNew2 =  (email : string) => { // arrow Function function
    return email.slice(0, email.indexOf("@"))
}

type stringOrNumber = string | number; 

type userId = stringOrNumber // type alias

type stringOrNumberArray = (string | number ) 

interface Guitarist {
    name? : string;
    active : boolean;
    album : string | number
}
type Guitarist2 = {
    name? : string;
    active : boolean;
    album : string | number
    type8 : stringOrNumber 
}

//Literal types

let myName : 'Dave';

let userName : 'Dave' | 'John' | 'Amy';

userName = "John"; // out of three

//DRY : Dont repeat yourself

// Arrow Function

const add = ( a : number, b: number ) : number => {
    return a + b
}

// function that does not have a return 

const logMsg = (message : any ) : void => { // void type is funtion which do not return anything
    console.log(message);
    
}

//named Function

let subtract = function (a: number , b: number) : number {
    return a - b
}

//
type mathFunction = (a: number , b : number ) => number // type alias for math function

let multiply : mathFunction = function (c,d) { // we have put a type alrias or definaton created above 
    return c * d
}

logMsg(multiply(2,3))

//
interface mathFunction2 {
    (a: number , b : number ) : number }  // type interface
let multiply2 : mathFunction2 = function (c,d) { // we have put a type alrias or definaton created above 
    return c * d
}

logMsg(multiply2(2,3))


//optional parametres

const addAll = (a: number, b: number, c?: number) : number => {
    if(typeof c !== 'undefined') {
        return a + b + c //  becouse is optional, so we need to put type guard above return

    }
    return a + b
   
}

const sumAll = (a: number, b: number, c?: number) : number => {
    if(typeof c !== 'undefined') {
        return a + b + c //  becouse is optional, so we need to put type guard above return

    }
    return a + b
   
}
 



