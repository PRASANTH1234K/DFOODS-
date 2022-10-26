window.addEventListener('load', function(){
  AOS.init();
})


let tor=document.getElementById("togg");
let toee=document.getElementById("hhh");

function res()
{
    var x = document.getElementById("hhh");
    if (x.style.display === "none") {
      x.style.display = "flex";
      x.style.flexDirection="column"
    } else {
      x.style.display = "none";
  }


}
function toggleCheck() {
    if(document.getElementById("cart").checked === true){
      document.getElementById("cartzz").style.display = "none";
    } else {
      document.getElementById("cartzz").style.display = "block";
    }
  }
  let closecart=document.getElementById("closecart");
  closecart.addEventListener("click",function()
  {
    document.getElementById("cartzz").style.display = "none";

  }
  )

let increa=document.getElementById("spa");
  var additemid=0;
  function addTocart(item)
  {
    additemid+=1;
    increa.textContent=additemid;
    console.log(increa);
    var trow=document.createElement("tr");
  


    var selecteditem = document.createElement("td");
    selecteditem.classList.add("tdele");
    selecteditem.setAttribute("id",additemid);
    var imga=document.createElement("img");
    imga.classList.add("cartimage","tdele");
    imga.setAttribute('src',item.children[0].currentSrc);

    var title=document.createElement("td");
    title.classList.add("tdele");
    title.innerText=item.children[1].innerText;
    var rate=document.createElement("td");
    rate.classList.add("tdele");
    rate.innerText=item.children[2].innerText;
    var ite=document.createElement("td");
    ite.textContent=1;
    ite.classList.add("tdele");

    var buy=document.createElement("td");
    buy.classList.add("tdele");
    var bu2=document.createElement("button");
    bu2.classList.add("buycart1","fa","fa-shopping-cart");
    buy.append(bu2);
    var bu1=document.createElement("button");
    bu1.classList.add("buycart2","far" ,"fa-trash-alt");
    buy.append(bu1);

  //   var bu1=document.createElement("button");
  //   bu1.classList.add("btn","btn-danger","tdele");
    
  //  var ielem=document.createElement("i");
  //  ielem.classList.add("far" ,"fa-trash-alt");
  //  bu1.append(ielem);

  //   buy.append(bu2);
  //   buy.append(bu1);
    


    

    // let deleteIcon = document.createElement("td");
    

    
    
    
    
   
    
   



    var carttab=document.getElementById("carttable");
    var cartitems=document.getElementById("tit");
    trow.append(imga);
    trow.append(title);
    trow.append(rate);
    trow.append(ite);
    trow.append(buy)
    
   
    // /trow.append(deleteIcon);
    
    carttab.append(trow);

    bu1.onclick = function () {
      carttab.removeChild(trow);
    };
  


  }