const head = document.head;
const body = document.body;

var fontItem = document.createElement("link");
var navBar = document.createElement("nav");
fontItem.setAttribute("rel", "stylesheet");
fontItem.setAttribute("href", "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400&display=swap");
navBar.setAttribute("class", "navbar");
navBar.innerHTML = 
`<ul class="navbar-nav">
    <li class ="nav-item"><a href = "../home">Home</a></li>
    <li class ="nav-item"><a href = "../about">About</a></li>
    <li class ="nav-item"><a href = "../tutorials">Tutorials</a></li>
    <li class ="nav-item has-dropdown">
        <a href ="#">Theme</a>
        <ul class="dropdown">
            <li class="dropdown-item theme-light">
                <a id="light" href = "#">light</a>
            </li>
            <li class="dropdown-item theme-dark">
                <a id="dark" href = "#">dark</a>
            </li>
            <li class="dropdown-item theme-pastel">
                <a id="pastel" href = "#">pastel (unfinished)</a>
            </li>
        </ul>
    </li>
    <li class ="nav-item">
        <!--<a href = "../home">Login</a>-->
        <a href ="#">Login</a>
    </li>
</ul>`
head.appendChild(fontItem);
body.firstChild.before(navBar);

const darkButton = document.getElementById("dark");
const lightButton = document.getElementById("light");
const pastelButton = document.getElementById("pastel");

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