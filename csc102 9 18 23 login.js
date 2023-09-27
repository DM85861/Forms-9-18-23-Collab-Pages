function CheckInput()
{
  
    var BeginName = document.getElementById("BeginName").value;
    alert(BeginName);
    
    var endName = document.getElementById("endname").value;
    alert(endName);
    
    var allName = BeginName + " " + endName;

    var len = allName.length;
    alert (len)
    
     var PassCode = document.getElementById("PassNum").value;
     alert(PassCode);
    
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



    

