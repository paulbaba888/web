let menu=document.querySelector("#menu");
let ul=document.querySelector("ul");
menu.onclick=()=>{
  menu.classList.toggle("fa-times")
  ul.classList.toggle("active")
}
/*const slide=document.queryselector(".tou");
window.addEventListener("scroll", () =>{
  if (window.pageYOffset > 60){
    slide.classList.add("active")
  }
  else{
        slide.classList.remove("active")

  }
})
*/

const scroll = document.querySelector(".tou");
window.addEventListener("scroll", () => {

  if (window.pageYOffset > 100) {
    scroll.classList.add("active");
  }
  else {
    scroll.classList.remove("active");

  }
});
    


window.onscroll=()=>{
    ul.classList.remove("active")
      menu.classList.remove("fa-times")


}
