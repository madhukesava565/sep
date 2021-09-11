let visa = true;
let universityapproval = false;

//let canada = visa && universityapproval ;
//console.log( canada,'you are flying ');


let cancelled = visa || universityapproval;

cancelled = !cancelled
console.log( cancelled,'you got cancelled')