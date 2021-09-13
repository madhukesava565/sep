const number = arrayrange(10,4);
console.log(number);


function arrayrange(min,max){

     const output = []      ;
     for(let i = min; i<=max;i++)
     output.push(i);
     return output;

}