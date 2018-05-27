function calc()
{
    var n=document.getElementById("given").value;
   i=1;
    while(i<n)
    {
        if(Math.pow(2,i)>n)
        {
           alert(i-1);
        }
        else{
            i++;
        }

    }
}