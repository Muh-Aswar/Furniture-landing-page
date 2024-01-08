const iconMenu = document.getElementById("icon-menu");
const menuList = document.getElementById("menu-list")

iconMenu.addEventListener("click",()=>{
    menuList.classList.toggle("tampil")
});