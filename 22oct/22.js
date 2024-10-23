function fibonacciSum(n) {
    let a = 0, b = 1, next;
    let sum = a + b;  
  
    console.log(a);   
    console.log(b);   
    for (let i = 2; i < n; i++) {
      next = a + b;
      console.log(next);  
      sum += next;       
      a = b;
      b = next;
    }
  
    return sum;
  }
  const result = fibonacciSum(10);
  console.log("Sum of first 10 Fibonacci numbers:", result);
  


  for(i=-1;i>=-10;i--)
{
    console.log(i)
}
console.log("*************")

let array = [1,2,3,4,5,6,7,8,9,10]
console.log(array.slice(-4,-1))
console.log(array.slice(-4))

console.log("****")

// num = +prompt("enter the value;")
// sum =0, sum1 = 0
// for(n of num){
//     if(n-1){
//         c=true
//         for(i=2;i>n-1;i--)
//         if(n%i==0)
//         {
//             sum1 = sum1+number(n)
//             c=false
//             break
//         }
//     }
//     if(c)
//     sum = sum+number(n)
// }
// console.log(sum)
// console.log(sum1)
console.log("********");

num = prompt("enter the value:")
max = Number(num[0]),min=Number(num[0])
for(i=1;i<num.length;i++)
{
    if(num[i]>max)
    max = num[i]
    if(num[i]<min)
    min = num[i]
}
console.log("max value:",max)
console.log("min value:",min)


console.log("*****");

num = prompt("enter the value")
s= ""
for(n of num){
if(n>1){
c=0
for(i=2;i<n;i++)
{
    if(n%i==0)
    {
        c++
break
    }
}
if(c==0)
s=s+n
}
}
max = s[0]
for(i of s)
{
    if(i>max)
    max =i
}
console.log("largest number:",max)
console.log("******");


num = prompt("enter a number")
prod = 1
for(i=1;i<=num;i++)
{
  prod = prod*Number(i)  
}
console.log("factorila of",num+"is" +prod)
console.log("*****");

num = +prompt("enter the value")
s = ""
n1=0,n2=1
i=1
while(i<=num)
{
    s+=n1+" "

    // console.log(n1)
    n3=n1+n2

    n1=n2
    n2=n3
    i++
}
console.log(s)