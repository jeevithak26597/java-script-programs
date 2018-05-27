 function fact(num)
 {
 var n=document.getElementById("num").value;
 var fact=1;
 if(n<0)
 {
    alert("Given number is negative number"+fact);
 }
 else
 {
 for(var i=1;i<=n;i++)
 {
 var fact=fact*i;
 }
 alert("Factorial of a given number "+fact);
}
}