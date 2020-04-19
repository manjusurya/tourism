function validate()
{

   
     
      var fn= document.getElementById("fname").value;
      var ln= document.getElementById("lname").value;
      var em= document.getElementById("email").value;
      var p1= document.getElementById("password1").value;
      var p2= document.getElementById("password2").value;
      var db= document.getElementById("dob").value;
      var mo= document.getElementById("mob").value;
     
     

      
    
     
      if (fn=="")
       {
         alert('please enter firstname');
        
      }
     else if (ln=="") 
      {
        alert('please enter last name');
        
      }
     else if (em=="") 
      {
        alert('please enter email id');
      }

         else if(em. indexOf('@')<=0)
      {
        alert('INVALID EMAILID')
      }
      else if (em.charAt(em.length-4)!='.') 
      {
        alert('ivalid emailid')
        
      }



       
     
     else if (p1=="")
       {
         alert('please enter your password');
        
      }
      else if(p1.length<=4)
      {
        alert('password is weak');
      }
      else if(p1.length<=7)
      {
        alert("password is not strong");
      }
      else if (p2=="")
       {
         alert('please confirm your password');
        
      }
      else if (p1!=p2) 
      {
        alert('PASSWORD MISMATCH');
      }
      
     else if (db=="")
       {
         alert('please enter your date of birth');
        
      }
     else if (mo=="")
       {
         alert('please enter your mobile number');

        
      }
     else if(mo.length<=9)
      {
        alert('mobile number should have 10 digits');
      }
      
     else
      {
        alert('successfully signed up');
      }
    
    }
