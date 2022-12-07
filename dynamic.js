var alert;
document.getElementById(button2)=alert;
alert("error");

function alerts()
{
    alert("SORRY AN ERROR HAS OCCURED!");
}

function total(x , y, z, w)
{
   return x + y + z + w;
}

//this is for quantity adding 
var i, sum_1 = 0, Quantity = 5; //input for quantity needed
function quantity(x)
{
    if (Quantity > 1)
    {
        for (i = 0;i < Quantity;i++)
        {
            sum_1 += x;
        }
        return sum_1;
    }
    else
    {
        return x;
    }
}
//change money symbol and enter prices
document.getElementById("item1")= "$"+" "+quantity(250.00);
document.getElementById("item2")= "$"+" "+quantity();
document.getElementById("item3")= "$"+" "+quantity();
document.getElementById("item4")= "$"+" "+quantity();