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
document.getElementById("total").innerHTML= "TOTAL:"+"$"+" "+total(quantity(250.00),quantity(76),quantity(54),quantity(67));
function switch1(tree)
{
    switch (tree)
    {
        case tree:
           return 250;
        break;
        case 'jumper':
            document.getElementById("des2")
            document.getElementById("item2").innerHTML= "$"+" "+quantity(76);
        break;
        case 'shovel':
            document.getElementById("des3").innerHTML= "$";
            document.getElementById("item3").innerHTML= "$"+" "+quantity(54);
        break;
        case 'PS5':
            document.getElementById("des4").innerHTML= "";
            document.getElementById("item4").innerHTML= "$"+" "+quantity(67);
        break;
    }
}


function if1(y)
{
    if (y == 1)
    {
       return "item1";
    }
    else if (y ==2)
    {
        document.getElementById("des2").innerHTML= "$";
        document.getElementById("item2").innerHTML= "$"+" "+quantity(76);
    }
}

document.getElementById("des1").innerHTML= "$";//Add product desription here
document.getElementById("item1").innerHTML= "$"+" "+quantity(250);
document.getElementById("des2").innerHTML= "$";
document.getElementById("item2").innerHTML= "$"+" "+quantity(76);
document.getElementById("des3").innerHTML= "$";
document.getElementById("item3").innerHTML= "$"+" "+quantity(54);
document.getElementById("des4").innerHTML= "";
document.getElementById("item4").innerHTML= "$"+" "+quantity(67);
