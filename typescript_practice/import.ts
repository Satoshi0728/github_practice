import {name} from "./export"
console.log(name);


function double(val: string | number){
    if(typeof val == "number"){
        console.log(val * 2);
    }else{
        console.log(val + " " + val);
    }
}

double(10);
double("hello");