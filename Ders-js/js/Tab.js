let btn=document.querySelectorAll(".btn-tag");
for(var bt of btn){
  bt.addEventListener("click",function(){
    let ind=this.getAttribute("data-index")
    document.querySelector(".inner.active").classList.remove(".active")
    document.querySelector(".inner[data-position='"+ind+"']")
})  
}
// let inner=document.querySelector(".inner")

