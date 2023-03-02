const themes = ["Default", "Oaty", "LightMode"];

setTheme(localStorage.getItem("colTheme") || "Default");

function setTheme(theme){
	if (!themes.includes(theme)) return false;
	document.body.className = theme;
	localStorage.setItem("colTheme", theme);
	return true;
}