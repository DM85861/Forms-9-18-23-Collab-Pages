function CheckInput()
{
  
    var BeginName = document.getElementById("BeginName").value;
    
    
    var endName = document.getElementById("endname").value;
    
    
    var allName = BeginName + " " + endName;

    var len = allName.length;
    
    
     var PassCode = document.getElementById("PassNum").value;
     
    
    if (len <3)
    {
        document.getElementById("loginStatus").innerHTML = "Name length did not compute";
    }
    else if ((PassCode>0) && (PassCode <1000))
    {
        document.getElementById("loginStatus").innerHTML = "Computed Login!";
        location.replace("csc102 (found index).html");  
    }
    else 
    {
        document.getElementById("loginStatus").innerHTML = "Not a Computed Login!";;    
    }

}



    

