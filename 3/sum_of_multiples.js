function multiplesum(num)
{
var n=document.getElementById("num").value;
var sum=0;
if(n<=0)
{
   alert("Given number is not a natural number");
}
else
{
for(var i=1;i<n;i++)
{
    if(i%3==0 || i%5==0)
    {
        sum=sum+i;
    }
}
alert("sum of multiples of N natural number "+sum);
}
}