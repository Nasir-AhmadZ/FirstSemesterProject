function alerts()
{
    alert("SORRY AN ERROR HAS OCCURED!");
}
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  }
  
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }

function total(x , y, z, w)
{
   return x + y + z + w;
}
//this is for quantity adding  currently only works for alerts
function quantity(x)
{
    var i, sum_1 = 0;
    if(x == 250)
    {
        var treeQuantity = document.getElementById("Q1").value;
        if (treeQuantity > 1)
        {
            for (i = 0;i < treeQuantity;i++)
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
    else if(x == 7)
    {
        var shovelQuantity = document.getElementById("Q2").value;
        if (shovelQuantity > 1)
        {
            for (i = 0;i < shovelQuantity;i++)
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
    else if(x == 54)
    {
        var PS5Quantity = document.getElementById.value("Q3");
        if (PS5Quantity > 1)
        {
            for (i = 0;i < PS5Quantity;i++)
            {
                sum_1 += x;
            }
            document.getElementById("item2")=sum_1;
        }
        else
        {
            document.getElementById("item2")= x;
        }
    }
    else if(x == 67)
    {
        var jumperQuantity = document.getElementById.value("Q4");
        if (jumperQuantity > 1)
        {
            for (i = 0;i < jumperQuantity;i++)
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
}

//change money symbol and enter prices
//document.getElementById("total").innerHTML= "TOTAL:"+"$"+" "+total(quantity(250.00),quantity(7.00),quantity(54),quantity(67));
/*document.getElementById("des1").innerHTML= "$";//Add product desription here
document.getElementById("item1").innerHTML= "$"+" "+quantity(250.00);
document.getElementById("des2").innerHTML= "$";
document.getElementById("des3").innerHTML= "$";
document.getElementById("item3").innerHTML= "$"+" "+quantity(54);
document.getElementById("des4").innerHTML= "";
document.getElementById("item4").innerHTML= "$"+" "+quantity(67);*/


