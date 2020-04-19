function validate()
{
    var em=document.getElementById("email").value;
    var p1=document.getElementById("password").value;


    if (em=="") 
    {
        alert("please enter email id");
        
    }
    else if (em.indexOf ("@")<=0)
     {
         alert("invalid email id");
        
    }
    else if (em.charAt(em.length-4)!="." ) 
    {
        alert("invalid email id");
        
    }
    else if (p1=="")
     {
        alert("please enter your password");
        
    }

    else
    {
        alert("SUCCESSFULLY LOGGED IN")
    }

}