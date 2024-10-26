
//reverse order of prime number
num = prompt("enter the value:  ")
rev = ""
for(i=0;i<=num;i++)
{
    if(i>1)
    {
        c=0
        for(j=2;j<i;j++)
        {
            if(i%2==0)
            {
                c++
                break
            }
        }
        if(c==0)
// rev+=String(i).split("").reverse().join("")+" "
console.log(String(i).split("").reverse().join(""))
    }
}
// console.log(rev);


num = prompt("enter the value:  ").split(",")
console.log(num);
min = num[0]
for(i of num)
{
    if(i<num)
    min = i
}
console.log(min);

//duplicate number
num = prompt("enter the value:  ")
s = " "
for(i=0;i<num.length;i++)
{
    if(!s.includes(i))
    s=s+i;

}
console.log(s);

num = prompt("enter the value:   ")
sum = 0
unqiue = " "
duplicate = " "
for(i of num)
{
    if(!s.includes(i))
    s=s+i;

}
console.log(s);
for(i of s)
{
    c=0
    for(j of num)
    {
        console.log(i,j);
        
        if(i==j)
        c++
    }
    if(c>1)
    sum = sum=Number(i)
    console.log(i+"->"+c);
    console.log(j+"->"+c)
}
    // console.log();
    
    
//     duplicate = duplicate+i+" "
//     else
//     unqiue = unqiue+i+" "
// } 
// console.log("dup:",duplicate);
// console.log("unq:",unqiue);

// let num = prompt("Enter the value: ");
// // let smallest = num[0];  
// let unique = "";       
// let duplicate = "";  
// num = 0   
// for (let i = 0; i < num.length; i++) {
//     let count = 0;
//     if (num[i] < smallest) {
//         smallest = num[i];
//     }
//     for (let j = 0; j < num.length; j++) {
//         if (num[i] === num[j]) {
//             count++;
//         }
//     }
//     if (count === 1) {
//         unique += num[i] + " ";
//     }
//     if (count > 1 && !duplicate.includes(num[i])) {
//         duplicate += num[i] + " ";
//     }
// }
// console.log("Smallest number:", smallest);
// console.log("Unique numbers:", unique.trim());
// console.log("Duplicate numbers:", duplicate.trim());

