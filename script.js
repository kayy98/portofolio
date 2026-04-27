let btnbar = document.getElementById("btn-bar");
let btnbarx = document.getElementById("btn-barx");
let isimenu1=document.getElementById("isimenu1");
let navmobile = document.getElementById("navmobile");
btnbar.addEventListener("click", () => {
  navmobile.classList.add("success");
});
btnbarx.addEventListener("click", () => {
  navmobile.classList.remove("success");
})
isimenu1.addEventListener("click", ()=>{
  navmobile.classList.remove("success");
})


