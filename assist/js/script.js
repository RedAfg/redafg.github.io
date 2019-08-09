function a(){
       var a1=document.getElementById("fc1").value;
       a1 *=5;
       var a2=document.getElementById("fc2").value;
       a2 *=5;  
       var a3=document.getElementById("fc3").value;
       a3 *=4;
       var a4=document.getElementById("fc4").value;
       a4 *=4;
       var a5=document.getElementById("fc5").value;
       a5 *=2;
       var a6=document.getElementById("fc6").value;
       a6 *=1;
       var sum=a1+a2+a3+a4+a5+a6;
       sum /=21;

    document.getElementById("id").value=sum+" %";

}


// $(document).ready(function(){
//     $(".btn").click(function(){
//         var a1=$(".fc1").value();
//         var a2=$(".fc2").value();
//         var a3=$(".fc3").value();
//         var a4=$(".fc4").value();
//         var a5=$(".fc5").value();
//         var a6=$(".fc6").value();
//         var sum=((a1*5)+(a2*5)+(a3*4)+(a4*4)+(a5*2)+(a6))/21;
//         sum+=" %";
//         $(".t").text(sum);
        
//     });
// });