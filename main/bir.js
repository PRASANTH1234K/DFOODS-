
let drink=document.getElementById("card1");
let briyani=document.getElementById("card2");
let pickel=document.getElementById("card3");
let home=document.getElementById("card4");
let meals=document.getElementById("card5");
let starters=document.getElementById("card6");
let vegstart=document.getElementById("card7");
let last=document.getElementById("card8");



let button1=document.getElementById("bu1");
let button2=document.getElementById("bu2");
let button3=document.getElementById("bu3");
let button4=document.getElementById("bu4");
let button5=document.getElementById("bu5");
let button6=document.getElementById("bu6");
let button7=document.getElementById("bu7");
let button8=document.getElementById("bu8");

briyani.style.display="none";
drink.style.display="block";
pickel.style.display="none";
home.style.display="none";
meals.style.display="none";
starters.style.display="none";
vegstart.style.display="none";
last.style.display="none";

button1.addEventListener('click',function()
{

    drink.style.display="block";
  pickel.style.display="none";
home.style.display="none";
    briyani.style.display="none";
    meals.style.display="none";
starters.style.display="none";
vegstart.style.display="none";
last.style.display="none";

});

button2.addEventListener('click',function()
{
    briyani.style.display="block";
    pickel.style.display="none";
    home.style.display="none";
    drink.style.display="none";
    meals.style.display="none";
starters.style.display="none";
vegstart.style.display="none";
last.style.display="none";
});
button3.addEventListener('click',function()
{   
    pickel.style.display="block";
    briyani.style.display="none";
    drink.style.display="none";
    home.style.display="none";
    meals.style.display="none";
starters.style.display="none";
vegstart.style.display="none";
last.style.display="none";
});
button4.addEventListener('click',function()
{   
    pickel.style.display="none";
    briyani.style.display="none";
    drink.style.display="none";
    home.style.display="block";
    meals.style.display="none";
starters.style.display="none";
vegstart.style.display="none";
last.style.display="none";
});
button5.addEventListener('click',function()
{   
    pickel.style.display="none";
    briyani.style.display="none";
    drink.style.display="none";
    home.style.display="none";
    meals.style.display="block";
starters.style.display="none";
vegstart.style.display="none";
last.style.display="none";
});
button6.addEventListener('click',function()
{   
    pickel.style.display="none";
    briyani.style.display="none";
    drink.style.display="none";
    home.style.display="none";
    meals.style.display="none";
starters.style.display="block";
vegstart.style.display="none";
last.style.display="none";
});
button7.addEventListener('click',function()
{   
    pickel.style.display="none";
    briyani.style.display="none";
    drink.style.display="none";
    home.style.display="none";
    meals.style.display="none";
starters.style.display="none";
vegstart.style.display="block";
last.style.display="none";
});
button8.addEventListener('click',function()
{   
    pickel.style.display="none";
    briyani.style.display="none";
    drink.style.display="none";
    home.style.display="none";
    meals.style.display="none";
starters.style.display="none";
vegstart.style.display="none";
last.style.display="block";
});




