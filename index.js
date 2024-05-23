var displays=document.getElementById("display");
var buttons=document.querySelectorAll("button");
var string="";
var arrayButtons=Array.from(buttons);
arrayButtons.forEach(btn=>
{
    btn.addEventListener("click",(e)=>
    {
        var keys=e.target.innerHTML;
        if(keys=="CLR")
        {
            string="";
            
        }
        else if(keys=="DEL")
        {
            string=string.substring(0,string.length-1);
        }
        else if(keys=="=")
        {
            string=eval(string);
        }
        else if(keys=="x")
        {
            string+="*"
        }
        else{
            string+=keys;
        }
        displays.value=string;
    });
});