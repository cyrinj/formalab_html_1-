function eff (){
var x="" ;
document.getElementById("z").value=x ; 
document.getElementById("v1").value=x ; 
  document.getElementById("v2").value=x ; 


}
function Plus (){
    
   var x= document.getElementById("v1").value ; 
   var y= document.getElementById("v2").value ;   
    var z=parseInt(x)+parseInt(y) ; 
    document.getElementById("z").value= z;
    
    }
    function moins (){
    
        var x= document.getElementById("v1").value ; 
        var y= document.getElementById("v2").value ;   
         var z=parseInt(x)-parseInt(y) ; 
         document.getElementById("z").value= z;
         
         }



         function multiplication (){
    
            var x= document.getElementById("v1").value ; 
            var y= document.getElementById("v2").value ;   
             var z=parseInt(x)*parseInt(y) ; 
             document.getElementById("z").value= z;
             
             }



             function division (){
    
                var x= document.getElementById("v1").value ; 
                var y= document.getElementById("v2").value ;   
                 var z=parseInt(x)/parseInt(y) ; 
                 document.getElementById("z").value= z;
                 
                 }