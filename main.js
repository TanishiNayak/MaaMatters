
function ScrolltoTop(){
    window.addEventListener('scroll',function(){
      var element = document.getElementById("ScrolltoTop"); 
      element.classList.toggle("active", window.scrollY > 500)
    })
  }
  
ScrolltoTop()
  
function ScrollBottomtoTop() {
 const button = document.getElementById("ScrolltoTop")
 button.addEventListener('click', ()=>{
   window.scrollTo({top:0,behavior:"smooth"});
 })
}

ScrollBottomtoTop()