let count=0;
let value=document.querySelector(".value");
let btns=document.querySelectorAll(".btn");


btns.forEach(function (btn){
    btn.addEventListener("click", function(e){
       let style=e.currentTarget.classList;
       if(style.contains("decrease")){
        count --;
        
       }
       else if(style.contains("increase")){
        count ++
       }
       else{
        count =0;
       }

       value.textContent=count;

     if (count>0) {
        value.style.Color="green";
     }  
     else if(count<0){
         value.style.color="red";
     }
    else{
        value.style.color="#000";
    }
     
       
});
});
