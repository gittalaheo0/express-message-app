var avatar = document.querySelector(".avartar_img");
var menuAvartar = document.querySelector(".avartar_menu");

avatar.onclick = function() {
	menuAvartar.style.display = menuAvartar.style.display=="flex" ? "none" : "flex"
}