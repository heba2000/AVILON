//NAVBAR
$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

//COLLAPSE #1
var collapseBtn1=document.getElementById("collapse-btn1");
var spn1=document.getElementById("span1");

collapseBtn1.onclick=function(){
if(spn1.innerHTML=='<i class="fas fa-plus float-right fa-xs mt-1" id="plus-icon1"></i>')
    {    
    document.getElementById("plus-icon1").setAttribute("class","fas fa-minus float-right fa-xs mt-1"); 
        collapseBtn1.style.color="#1dc8cd";
    }
    else
    {   
    document.getElementById("plus-icon1").setAttribute("class","fas fa-plus float-right fa-xs mt-1");    
      
         collapseBtn1.style.color="black";   
    }
}
//COLLAPSE #2
var collapseBtn2=document.getElementById("collapse-btn2");
var spn2=document.getElementById("span2");
collapseBtn2.onclick=function(){
if(spn2.innerHTML=='<i class="fas fa-plus float-right fa-xs mt-1" id="plus-icon2"></i>')
    {    
    document.getElementById("plus-icon2").setAttribute("class","fas fa-minus float-right fa-xs mt-1"); 
    collapseBtn2.style.color="#1dc8cd";
    }
    else
    {   
    document.getElementById("plus-icon2").setAttribute("class","fas fa-plus float-right fa-xs mt-1");    
    collapseBtn2.style.color="black";   
    }
}
//COLLAPSE #3
var collapseBtn3=document.getElementById("collapse-btn3");
var spn3=document.getElementById("span3");
collapseBtn3.onclick=function(){
if(spn3.innerHTML=='<i class="fas fa-plus float-right fa-xs mt-1" id="plus-icon3"></i>')
    {    
    document.getElementById("plus-icon3").setAttribute("class","fas fa-minus float-right fa-xs mt-1"); 
    collapseBtn3.style.color="#1dc8cd";
    }
    else
    {   
    document.getElementById("plus-icon3").setAttribute("class","fas fa-plus float-right fa-xs mt-1");    
    collapseBtn3.style.color="black";   
    }
}



