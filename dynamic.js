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


//this is for quantity adding  currently only works for alerts
function quantity(x)
{
    let i;
    var sum_1 = 0, sum_2 = 0, sum_3 = 0, sum_4 = 0;
    if(x == 250)
    {
        //var treeQuantity = 0;
        var treeQuantity = document.getElementById("Q1").value;
        if (treeQuantity > 1)
        {
            for (i = 0;i < treeQuantity;i++)
            {
                sum_1 += x;
            }
            document.getElementById("item1").innerHTML="$"+" "+ sum_1;
            return sum_1;
        }
        else if(treeQuantity == 0)
        {
            document.getElementById("item1").innerHTML= "$"+" "+0;
        }
        else
        {
            document.getElementById("item1").innerHTML= "$"+" "+x;
        }
    }
    else if(x == 7)
    {
        var shovelQuantity = document.getElementById("Q2").value;
        if (shovelQuantity > 1)
        {
            for (i = 0;i < shovelQuantity;i++)
            {
                sum_2 += x;
            }
            document.getElementById("item2").innerHTML= "$"+" "+sum_2;  
            return sum_2;
        }
        else if(shovelQuantity == 0)
        {
            document.getElementById("item2").innerHTML= "$"+" "+0;
        }
        else
        {
            document.getElementById("item2").innerHTML= "$"+" "+x;
        }
    }
    else if(x == 850)
    {
        var PS5Quantity = document.getElementById("Q3").value;
        if (PS5Quantity > 1)
        {
            for (i = 0;i < PS5Quantity;i++)
            {
                sum_3 += x;
            }
            document.getElementById("item3").innerHTML= "$"+" "+sum_3;
            return sum_3;
        }
        else if(PS5Quantity == 0)
        {
            document.getElementById("item3").innerHTML= "$"+" "+0;
        }
        else
        {
            document.getElementById("item3").innerHTML= "$"+" "+x;
        }
    }
    else if(x == 34)
    {
        var jumperQuantity = document.getElementById("Q4").value;
        if (jumperQuantity > 1)
        {
            for (i = 0;i < jumperQuantity;i++)
            {
                sum_4 += x;
            }
            document.getElementById("item4").innerHTML= "$"+" "+sum_4;
            return sum_4;
        }
        else if(jumperQuantity == 0)
        {
            document.getElementById("item4").innerHTML= "$"+" "+0;
        }
        else
        {
            document.getElementById("item4").innerHTML= "$"+" "+x;
        }
    }
    //document.getElementById("total").innerHTML= "$"+" "+parseInt(sum_1+sum_2+sum_3+sum_4);
}
document.getElementById("des1").innerHTML= "7ft Decorated Tree Red & Gold Christmas Tree.";//Add product desription here
document.getElementById("des2").innerHTML= "The Halfords Snow Shovel, with a height of 82cm.";
document.getElementById("des3").innerHTML= "Pink Sequin Embellished Christmas Puddings Jumper";
document.getElementById("des4").innerHTML= "";

document.getElementById("total").innerHTML="$"+" "+parseInt(quantity(250)+quantity(7)+quantity(850)+quantity(34));
function total(x,y,z,w)
{
    var x = document.getElementById("Q1").value;
    document.getElementById("total").innerHTML= parseInt(quantity(250)+quantity(7)+quantity(850)+quantity(34))

}

{
    if(x == 1)
    {
        document.getElementById("item1").style="display:block";
    }
}
//change money symbol and enter prices
//document.getElementById("total").innerHTML= "TOTAL:"+"$"+" "+total(quantity(250.00),quantity(7.00),quantity(54),quantity(67));


/*document.getElementById("item1").innerHTML= "$"+" "+quantity(250.00);
document.getElementById("item2").innerHTML= "$"+" "+quantity(7.00);
document.getElementById("item3").innerHTML= "$"+" "+quantity(54);
document.getElementById("item4").innerHTML= "$"+" "+quantity(67);*/





