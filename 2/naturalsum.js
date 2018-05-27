function naturalsum(num)
{
var n=document.getElementById("num").value;
var sum=0;
if(n<=0)
{
   alert("Given number is not a natural number");
}
else
{
for(var i=1;i<=n;i++)
{
sum=sum+i;
}
alert("sum of a N natural number "+sum);
}
}