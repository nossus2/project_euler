//multiples of 3 and 5
//https://projecteuler.net/problem=1
var arr=[];
for (var i=0; i<1000; i++){
if(i%3==0||i%5==0){arr.push(i);}
//if(i%5==0){arr.push(i);}
}
var total=arr.reduce(function(a,b){return a+b;});
return total;
