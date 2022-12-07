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
function quantity(x)
{
    var i, sum_1 = 0, Quantity = 5; //input for quantity needed
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
document.getElementById("item1").innerHTML= "$"+" "+quantity(250.00);
document.getElementById("item2").innerHTML= "$"+" "+quantity(76);
document.getElementById("item3").innerHTML= "$"+" "+quantity(54);
document.getElementById("item4").innerHTML= "$"+" "+quantity(67);
document.getElementById("total").innerHTML= "TOTAL:"+"$"+" "+total(quantity(250.00),quantity(76),quantity(54),quantity(67));