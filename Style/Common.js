const head = document.head;
const body = document.body;

var navBar = document.createElement("nav");
navBar.setAttribute("class", "navbar");
navBar.innerHTML =
`
<a tabindex="0" class="skip-to-main offscreen" href="#main-content">
    <svg class="icon" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="accessible-icon" class="svg-inline--fa fa-accessible-icon fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M423.9 255.8L411 413.1c-3.3 40.7-63.9 35.1-60.6-4.9l10-122.5-41.1 2.3c10.1 20.7 15.8 43.9 15.8 68.5 0 41.2-16.1 78.7-42.3 106.5l-39.3-39.3c57.9-63.7 13.1-167.2-74-167.2-25.9 0-49.5 9.9-67.2 26L73 243.2c22-20.7 50.1-35.1 81.4-40.2l75.3-85.7-42.6-24.8-51.6 46c-30 26.8-70.6-18.5-40.5-45.4l68-60.7c9.8-8.8 24.1-10.2 35.5-3.6 0 0 139.3 80.9 139.5 81.1 16.2 10.1 20.7 36 6.1 52.6L285.7 229l106.1-5.9c18.5-1.1 33.6 14.4 32.1 32.7zm-64.9-154c28.1 0 50.9-22.8 50.9-50.9C409.9 22.8 387.1 0 359 0c-28.1 0-50.9 22.8-50.9 50.9 0 28.1 22.8 50.9 50.9 50.9zM179.6 456.5c-80.6 0-127.4-90.6-82.7-156.1l-39.7-39.7C36.4 287 24 320.3 24 356.4c0 130.7 150.7 201.4 251.4 122.5l-39.7-39.7c-16 10.9-35.3 17.3-56.1 17.3z"></path></svg>
    Skip to Main Content?
</a>
<img src="Style/icons/logo.png" class="logo" alt="Beegirl Logo">
<ul class="navbar-nav">
    <li class ="nav-item">
        <a href = "home" class="nav-link">
        <svg class="icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path></svg>
        Home</a>
    </li>
    <li class ="nav-item">
        <a href = "demos" class="nav-link">
        <svg class="icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="flask" class="svg-inline--fa fa-flask fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M437.2 403.5L320 215V64h8c13.3 0 24-10.7 24-24V24c0-13.3-10.7-24-24-24H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h8v151L10.8 403.5C-18.5 450.6 15.3 512 70.9 512h306.2c55.7 0 89.4-61.5 60.1-108.5zM137.9 320l48.2-77.6c3.7-5.2 5.8-11.6 5.8-18.4V64h64v160c0 6.9 2.2 13.2 5.8 18.4l48.2 77.6h-172z"></path></svg>
        Demos</a>
    </li>
    <li class ="nav-item has-dropdown">
        <div tabindex="0" class="nav-link">
            <svg class="icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sad-cry" class="svg-inline--fa fa-sad-cry fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111 8 0 119 0 256c0 90.1 48.2 168.7 120 212.1V288c0-8.8 7.2-16 16-16s16 7.2 16 16v196.7c29.5 12.4 62 19.3 96 19.3s66.5-6.9 96-19.3V288c0-8.8 7.2-16 16-16s16 7.2 16 16v180.1C447.8 424.7 496 346 496 256 496 119 385 8 248 8zm-65.5 216.5c-14.8-13.2-46.2-13.2-61 0L112 233c-3.8 3.3-9.3 4-13.7 1.6-4.4-2.4-6.9-7.4-6.1-12.4 4-25.2 34.2-42.1 59.9-42.1S208 197 212 222.2c.8 5-1.7 10-6.1 12.4-5.8 3.1-11.2.7-13.7-1.6l-9.7-8.5zM248 416c-26.5 0-48-28.7-48-64s21.5-64 48-64 48 28.7 48 64-21.5 64-48 64zm149.8-181.5c-5.8 3.1-11.2.7-13.7-1.6l-9.5-8.5c-14.8-13.2-46.2-13.2-61 0L304 233c-3.8 3.3-9.3 4-13.7 1.6-4.4-2.4-6.9-7.4-6.1-12.4 4-25.2 34.2-42.1 59.9-42.1S400 197 404 222.2c.6 4.9-1.8 9.9-6.2 12.3z"></path></svg>
            Isaac
            <ul class="dropdown offscreen" data-items="2">
                <li class="dropdown-item">
                    <a href="Isaac/tutorials">
                    <svg class="icon-dropdown" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="graduation-cap" class="svg-inline--fa fa-graduation-cap fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"></path></svg>
                    <div class="dropdown-name">Tutorials</div>
                    </a>
                </li>
                <li class="dropdown-item">
                    <a href="Isaac/Blockly">
                    <svg class="icon-dropdown" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="puzzle-piece" class="svg-inline--fa fa-puzzle-piece fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M192 104.8c0-9.2-5.8-17.3-13.2-22.8C167.2 73.3 160 61.3 160 48c0-26.5 28.7-48 64-48s64 21.5 64 48c0 13.3-7.2 25.3-18.8 34c-7.4 5.5-13.2 13.6-13.2 22.8c0 12.8 10.4 23.2 23.2 23.2H336c26.5 0 48 21.5 48 48v56.8c0 12.8 10.4 23.2 23.2 23.2c9.2 0 17.3-5.8 22.8-13.2c8.7-11.6 20.7-18.8 34-18.8c26.5 0 48 28.7 48 64s-21.5 64-48 64c-13.3 0-25.3-7.2-34-18.8c-5.5-7.4-13.6-13.2-22.8-13.2c-12.8 0-23.2 10.4-23.2 23.2V464c0 26.5-21.5 48-48 48H279.2c-12.8 0-23.2-10.4-23.2-23.2c0-9.2 5.8-17.3 13.2-22.8c11.6-8.7 18.8-20.7 18.8-34c0-26.5-28.7-48-64-48s-64 21.5-64 48c0 13.3 7.2 25.3 18.8 34c7.4 5.5 13.2 13.6 13.2 22.8c0 12.8-10.4 23.2-23.2 23.2H48c-26.5 0-48-21.5-48-48V343.2C0 330.4 10.4 320 23.2 320c9.2 0 17.3 5.8 22.8 13.2C54.7 344.8 66.7 352 80 352c26.5 0 48-28.7 48-64s-21.5-64-48-64c-13.3 0-25.3 7.2-34 18.8C40.5 250.2 32.4 256 23.2 256C10.4 256 0 245.6 0 232.8V176c0-26.5 21.5-48 48-48H168.8c12.8 0 23.2-10.4 23.2-23.2z"/></svg>
                    <div class="dropdown-name">Blockly</div>
                    </a>
                </li>
            </ul>
        </div>
    </li>
    <li class ="nav-item has-dropdown">
        <div tabindex="0" class="nav-link">
            <svg class="icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="adjust" class="svg-inline--fa fa-adjust fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M8 256c0 136.966 111.033 248 248 248s248-111.034 248-248S392.966 8 256 8 8 119.033 8 256zm248 184V72c101.705 0 184 82.311 184 184 0 101.705-82.311 184-184 184z"></path></svg>
            Theme
            <ul class="dropdown offscreen" data-items="2">
                <li class="dropdown-item theme-light">
                    <div id="light">
                    <div class="theme-icon-bg"><svg class="icon-dropdown" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg></div>
                    <div class="dropdown-name">Light (unfinished)</div>
                    </div>
                </li>
                <li class="dropdown-item theme-dark">
                    <div id="dark">
                    <div class="theme-icon-bg"><svg class="icon-dropdown" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg></div>
                    <div class="dropdown-name">Dark</div>
                    </div>
                </li>
            </ul>
        </div>
    </li>
</ul>`
body.firstChild.before(navBar);

//main-content navigator
//var navigation = document.createElement("a");
//navigation.setAttribute("tabindex", "0");
//navigation.setAttribute("class", "offscreen skip-to-main");
//navigation.setAttribute("href", window.location.href.concat("#main-content"));
//navigation.innerHTML = 
//`<svg class="icon" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="accessible-icon" class="svg-inline--fa fa-accessible-icon fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M423.9 255.8L411 413.1c-3.3 40.7-63.9 35.1-60.6-4.9l10-122.5-41.1 2.3c10.1 20.7 15.8 43.9 15.8 68.5 0 41.2-16.1 78.7-42.3 106.5l-39.3-39.3c57.9-63.7 13.1-167.2-74-167.2-25.9 0-49.5 9.9-67.2 26L73 243.2c22-20.7 50.1-35.1 81.4-40.2l75.3-85.7-42.6-24.8-51.6 46c-30 26.8-70.6-18.5-40.5-45.4l68-60.7c9.8-8.8 24.1-10.2 35.5-3.6 0 0 139.3 80.9 139.5 81.1 16.2 10.1 20.7 36 6.1 52.6L285.7 229l106.1-5.9c18.5-1.1 33.6 14.4 32.1 32.7zm-64.9-154c28.1 0 50.9-22.8 50.9-50.9C409.9 22.8 387.1 0 359 0c-28.1 0-50.9 22.8-50.9 50.9 0 28.1 22.8 50.9 50.9 50.9zM179.6 456.5c-80.6 0-127.4-90.6-82.7-156.1l-39.7-39.7C36.4 287 24 320.3 24 356.4c0 130.7 150.7 201.4 251.4 122.5l-39.7-39.7c-16 10.9-35.3 17.3-56.1 17.3z"></path></svg>
//Skip to Main Content?`
//body.firstChild.before(navigation);

//Theme Buttons
const darkButton = document.getElementById("dark");
const lightButton = document.getElementById("light");
//const pastelButton = document.getElementById("pastel");

let theme = "light";
let pastel = false;
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches)
{
    theme = "dark";
}
theme = localStorage.getItem("theme") || "dark";

body.classList.add(theme);
localStorage.setItem("theme", theme);

darkButton.onclick = () => {
    body.classList.replace("light", "dark");
    localStorage.setItem("theme", "dark");
};
lightButton.onclick = () => {
    body.classList.replace("dark", "light");
    localStorage.setItem("theme", "light");
};/*
pastelButton.onclick = () => {
    if (body.classList.contains("pastel")) {
        body.classList.remove("pastel");
    } else {
        body.classList.add("pastel");
    }
};*/