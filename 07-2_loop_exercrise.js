// p1 => Find factorial of n using for loop
let n=5;
let fact =1;

for(let i= n; i>1;i--){
    fact*=i;
}
console.log(`Factorial of ${n} is: ${fact}`);

// p2=> Find even number between 1-10

let n1 = 1;
let n2 = 10;
console.log(`even numbers between ${n1} and ${n2} are:`)

for(let i=n1; i<=n2; i++){
    if(i%2==0){
        console.log(i);
    }
}

// p3 => check if the number is prime

let x = 4;
let flag=0;
for(let i=2; i<x; i++){
    if(x%i==0){
        flag+=1;
    }
}
if(flag==0){
    console.log(`${x} is a Prime number`)
}else{
    console.log(`${x} is not a Prime number`)
}


// p3 => Find prime number between 1 & 30

let x1 = 1;
let x2 = 10;

for(let i=2; i<=x2; i++){
    let isPrime=false;
    for(let j=2; j<i; j++){
        if(i%j==0){
            isPrime=true;
        }
    }
    if(isPrime==false){
        console.log(`${i} is a Prime number`)
    }else{
        console.log(`${i} is not a Prime number`)
    }
}

