var myRes = document.getElementById("res");

var oper='none';
var num1=-1;
var num2=-1;
var eq = document.getElementById("equal");
var clear=document.getElementById("clear");

clear.onclick= function()
{
    myRes.value="";
    num1=num2=-1;
    oper='none';
}

function displaynum(num)
{
    if(myRes.value=="")
          myRes.value=num;
    else
    {
         alert("you should choose your operation not a new number !");
         myRes.value=num;
         num1=num;
    }
    if(num1==-1)
        num1=myRes.value;
    else
        num2=myRes.value;
}

function setop(op)
{
    if(oper=='none')
        oper=op;
    else
    {
        alert("You should choose only one operation between two numbers at a time ");
        oper=op;
    }
    if(num1==-1 && myRes.value!="")
        num1=myRes.value;
    myRes.value="";
}
eq.onclick = function calculation()
{
    if(num1==-1 || oper=='none')
        return;
    else if(num2==-1 && myRes.value!="");
        num2=myRes.value;
    
    num1=parseInt(num1);
    num2=parseInt(num2);
     switch (oper)
    {
        case 'add':
           myRes.value=num1+num2;
           break;
        case 'sub':
           myRes.value=num1-num2;
           break;
        case 'mult':
           myRes.value=num1*num2;
           break;
        case 'div':
           myRes.value = num1/num2;
           break;
         case 'mod':
           myRes.value=num1%num2;
           break;
    }
    num1=myRes.value;
    num2=-1;
    oper='none';
}
    