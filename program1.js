
let a = 25,b=8;
console.log("sum of",a,"and",b,":",a+b);
console.log("difference of",a,"and",b,":",a-b)
console.log("product of ",a,"and",b,":",a*b);
console.log("quotient of",a,"and",b,":",a/b)
console.log("reminder of",a,"and",b,":",a%b);

let prices = [45,120,30,250,80];

console.log("original price list :",prices);

prices.push(99);
console.log("After inserting 99",prices);

let pos = prices.indexOf(30);
if (pos!==-1)
prices.splice(pos,1) // delete at that position once 
console.log("After deleting 30:",prices);

console.log("search 250 found at index:",prices.indexOf(250));
prices.sort((x,y)=>x-y); //
console.log("sorted (ascending):",prices);
// supermarket billing with bulk discount
let cart = [
    {item:"Rice",price:60,qty:2},
    {item:"Oil",price:110,qty:12},
    {item:'sugar',price:42,qty:5}
];

let subtotal = 0, bulk = false
for(let c of cart)
{
    subtotal += c.price*c.qty;
    if(c.qty >=10) bulk= true;
}
let discount = bulk? subtotal *0.10:0;
let total = subtotal - discount;

console.log("subtotal :",subtotal.toFixed(2));
console.log("bulk discount(10%)",discount.toFixed(2));
console.log("final payable amount",total.toFixed(2));

alert("Final payable amount: " + total.toFixed(2));
