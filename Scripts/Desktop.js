const computer = document.getElementById("computer");
const desktop = document.getElementById("desktop");
const taskbar = document.getElementById("taskbar");
const appList = {};
let focusedWindow = null;

class Application {
	constructor(appName, iconPath, enabled, width, height, startFunc){
		this.name = appName;
		this.icon = iconPath;
		this.enabled = enabled
		this.startUp = {width:width, height:height, func:startFunc};
		this.desktopIcon = null;

		appList[this.name] = this;
		this.addToDesktop();
	}
	addToDesktop(){
		this.desktopIcon = document.createElement("li")
		if (!this.enabled) this.desktopIcon.classList += "disabled"
		this.desktopIcon.innerHTML = `<img src="`+this.icon+`">`+this.name
		this.desktopIcon.onclick = ()=>{ if (!this.enabled) return; this.openApp() }
		desktop.appendChild(this.desktopIcon);
	}
	openApp(){
		let win = new Window(this.name, this.icon, this.startUp, arguments)
		win.addToTaskbar();
		win.focusApp()
	}
}
class Window {
	constructor(appName, iconPath, startUp, args){
		this.name = appName;
		this.icon = iconPath;
		this.window = null;
		this.taskbarIcon = null;

		this.createWindow(startUp, args);
	}
	createWindow(startUp, args){
		this.window = document.createElement("div");
		this.window.classList = "window "+this.name;
		this.window.style.width = startUp.width;
		this.window.style.height = startUp.height;
		this.window.style.left = document.documentElement.clientWidth/2 - startUp.width/2+"px";
		this.window.style.top = document.documentElement.clientHeight/2 - taskbar.offsetHeight - startUp.height/2+"px";
		
		this.window.onmousedown = (e) => {
			e = e || this.window.event;
			this.focusApp();
		}
		computer.appendChild(this.window);

		this.windowContent = document.createElement("div");
		this.windowContent.classList = "windowContent";
		this.window.appendChild(this.windowContent);

		this.windowClose = document.createElement("div");
		this.windowClose.classList = "windowClose";
		this.windowClose.innerHTML = `
		<svg viewBox="0 0 100 100">
			<path	fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
					d="m 15,50 h 70 v 35 h -35 v -70"/>
		</svg>`;
		this.windowClose.onmousedown = () =>{
			this.close();
		}
		this.window.appendChild(this.windowClose);

		this.windowHeader = document.createElement("div");
		this.windowHeader.classList = "windowHeader";
		this.windowHeader.innerHTML = `<img src="`+this.icon+`"><p>`+this.name+`</p>`;
		this.windowHeader.onmousedown = (e) =>{
			e = e || this.window.event;
			e.preventDefault();
			this.mouseX = e.clientX;
			this.mouseY = e.clientY;

			document.onmousemove = (e) => {
				e = e || this.window.event;
				e.preventDefault();

				let difX = this.mouseX - e.clientX;
				let difY = this.mouseY - e.clientY;
				this.mouseX = e.clientX;
				this.mouseY = e.clientY;

				this.window.style.top = 
				Math.max(
					0, 
					Math.min(
						document.documentElement.clientHeight - taskbar.offsetHeight - this.window.offsetHeight, 
						this.window.offsetTop - difY
					)
				)+"px";

				this.window.style.left = 
				Math.max(
					0, 
					Math.min(
						document.documentElement.clientWidth - this.window.offsetWidth, 
						this.window.offsetLeft - difX
					)
				)+"px";
			}
			document.onmouseup = (e) => {
				document.onmousemove = null;
			}
		}
		this.window.appendChild(this.windowHeader);

		startUp.func.call(this, args);
	}
	close(){
		this.window.onmousedown = null;
		this.window.remove();
		this.taskbarIcon.remove();
		delete this;
	}
	addToTaskbar(){
		this.taskbarIcon = document.createElement("li")
		this.taskbarIcon.innerHTML = `<img src="`+this.icon+`">`
		this.taskbarIcon.onclick = ()=>{ this.focusApp() }
		taskbar.appendChild(this.taskbarIcon);
	}
	focusApp(){
		if (focusedWindow == this) return;
		if (focusedWindow != null) {
			focusedWindow.unfocusApp();
		}
		this.taskbarIcon.classList.add("selected");
		this.window.parentElement.appendChild(this.window);
		focusedWindow = this;
	}
	unfocusApp(){
		if (focusedWindow != this) return;
		this.taskbarIcon.classList.remove("selected");
		focusedWindow = null;
	}
}