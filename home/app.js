const darkButton = document.getElementById("dark");
const lightButton = document.getElementById("light");
const pastelButton = document.getElementById("pastel");
const body = document.body;

const theme = localStorage.getItem("theme");
const pastel = localStorage.getItem("pastelEnabled");
console.log(theme, pastel);
if (theme){
    body.classList.add(theme);
    if (pastel) { body.classList.add("pastel"); }
}

darkButton.onclick = () => {
    body.classList.replace("light", "dark");
    localStorage.setItem("theme", "dark");
};
lightButton.onclick = () => {
    body.classList.replace("dark", "light");
    localStorage.setItem("theme", "light");
    
};
pastelButton.onclick = () => {
    if (body.classList.contains("pastel")) {
        body.classList.remove("pastel");
        localStorage.removeItem("pastelEnabled");
    }else{
        body.classList.add("pastel");
        localStorage.setItem("pastelEnabled", true);
    }
};