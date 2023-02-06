//#region Console
const myConsole = document.getElementById("console");
const input = `<input id="consoleInput" spellcheck="false"/>`;
let consoleInput;
let directory = "/home/guest";
let commandHistory = [];
if (localStorage.getItem("commandHistory")) commandHistory = JSON.parse(localStorage.getItem("commandHistory"));
const commandHistLen = 20;
let commandHistDep = 0;
let storeComm = "";
function pushHistory(command){
	commandHistory.push(command);
	//console.log(commandHistory);
	if(commandHistory.length > commandHistLen) 
		commandHistory = commandHistory.slice(commandHistory.length-commandHistLen, commandHistory.length);
	//console.log(commandHistory);
	localStorage.setItem("commandHistory", JSON.stringify(commandHistory));
}

//#region Constants
const rootDirectory = "/";
const homeDirectory = "/home/guest";
function getShortDir(){
	if (directory == rootDirectory) return "/";
	if (directory == homeDirectory) return "~";
	const arr = directory.split("/");
	return arr[arr.length-1];
}
const bash = "bash";
const neofetchInfo = `
<img src="Resources/icon.png"/>
<pre>
 <span class="colour04">Hannah</span>@<span class="colour04">beegirl.gay</span>
 ------------------
 <span class="colour11">OS</span>: EndeavourOS Linux x86_64
 <span class="colour11">Name</span>: Hannah Hadfield
 <span class="colour11">LGBTQI+</span>: <img class="icon" src="Resources/GynoR.png"/>Gynoromantic, <img class="icon" src="Resources/PanS.png"/>Pansexual,   <img class="icon" src="Resources/PolyA.png"/>Polyamorous,
          <img class="icon" src="Resources/TransG.png"/>Transgender,  <img class="icon" src="Resources/PlushG.png"/>Plushgender, <img class="icon" src="Resources/BeeG.png"/>Beegender
 <span class="colour11">Pronouns</span>: It/Its, They/Them, She/Her
 <span class="colour11">Hobbies</span>: C# Programming, Bad Ukulele, 
 <span class="colour11">Placeholder</span>: 
 <span class="colour11">Placeholder</span>: 
 <span class="colour11">Idols</span>: Maia Arson Crimew, 

 <span class="palette"><span class="colour01">███</span><span class="colour03">███</span><span class="colour05">███</span><span class="colour07">███</span><span class="colour09">███</span><span class="colour11">███</span><span class="colour13">███</span><span class="colour15">███</span></span>
 <span class="palette"><span class="colour02">███</span><span class="colour04">███</span><span class="colour06">███</span><span class="colour08">███</span><span class="colour10">███</span><span class="colour12">███</span><span class="colour14">███</span><span class="colour16">███</span></span>
</pre>`;
function cowSay(text){
	if (text == "") text = `...`;
	let splitText = [""];
	let temp = 0;
	text.split(" ").forEach(element => {
		if ((splitText[temp].length +1+ element.length) > 30){
			temp++;
			splitText[temp] = element;
		}
		else {
			splitText[temp] += (splitText[temp] == "" ? "" : " ") + element;
		}
	});
	let width = Math.max(...(splitText.map(el => el.length)));
	let cowText = `<pre> `+" ".repeat(Math.max(0, 8-width))+"_".repeat(width);
	if (splitText.length == 1) {
		cowText += `
`+" ".repeat(Math.max(0, 8-width))+`&lt`+splitText[0]+`>`;
	}
	else {
		cowText += `
/`+splitText[0]+" ".repeat(width-splitText[0].length)+`\\`;
		for (let i = 1; i < splitText.length-1; i++) {
			cowText += `
|`+splitText[i]+" ".repeat(width-splitText[i].length)+`|`;
	  	}
		  cowText += `
\\`+splitText[splitText.length-1]+" ".repeat(width-splitText[splitText.length-1].length)+`/`;
	}
	cowText += `
 `+" ".repeat(Math.max(0, 8-width))+"-".repeat(width);
	return cowText+`
        \\  ^__^
         \\ (oo)\_______
           (__)\\       )\\/\\
               ||----w||
               ||     ||</pre>`;
}
//#endregion

const commands = [
	{command: "neofetch", function: (args) => { consoleWrite(neofetchInfo, "neofetch"); }},
	{command: "transrights", function: (args) => { 
		let re = args.slice(1).join(" ")+" "; 
		let de = re.trim() == ""
		let cl = "nowrap"
		if (de) { re = "█"; cl += " palette"}
		consoleWrite(`	<span class="tBlue  nowrap">`+re.repeat(1000)+`</span></br>
						<span class="tPink  nowrap">`+re.repeat(1000)+`</span></br>`+
				(!de ? `<span class="       nowrap">`+re.repeat(1000)+`</span></br>` :
					   `<span class="tWhite nowrap">`+re.repeat(1000)+`</span></br>`)
					  +`<span class="tPink  nowrap">`+re.repeat(1000)+`</span></br>
						<span class="tBlue  nowrap">`+re.repeat(1000)+`</span></br>`, cl); 
	}},
	{command: "echo", function: (args) => { consoleWrite(args.slice(1).join(" ")); }},
	{command: "cowsay", function: (args) => { consoleWrite(cowSay(args.slice(1).join(" "))); }},
	{command: "rev", function: (args) => { consoleWrite(args.slice(1).join(" ").split("").reverse().join("")); }},
	{command: "theme", function: (args) => {
		if (args.length < 2) {
			consoleWrite(themes.join(" "));
		}
		else if (!setTheme(args.slice(1).join(" "))) {
			consoleWrite(bash+": theme: theme not found");
		}
	}},
	{command: "cd", function: (args) => {
		if (args.length > 2) { consoleWrite(bash+": cd: too many arguments<br/>"); return; }
		if (args[1].startsWith("/")) { directory = args[1]; return; }
		if (args[1].startsWith("~")) { directory = homeDirectory; args[1] = args[1].slice(1); }
		if (args[1] != "") { directory += "/"+args[1]; }
	}},
	{command: "help", function: (args) => { let output = ""; commands.forEach(element => { output+= element.command+" "; }); consoleWrite(output);}},
	{command: "clear", function: (args) => { consoleClear(); }},

	{command: "window", function: (args) => { newWindow(args[1] || "", args[2] || 600, args[3] || 600) }},
	{command: "pacman", function: (args) => { startPacman(args[1] || 0) }},
	{command: "bezier", function: (args) => { startBezier() }},
];

function consoleClear(){
	myConsole.innerHTML = "";
}
function consoleWrite(text, className = ""){
	myConsole.innerHTML += "<span"+(className == "" ? "" : ` class="`+className+`"`)+">"+text+"</span>";
}
function prepareCommand(){
	consoleWrite("[guest@beegirl.gay "+getShortDir()+"]$ "+input);
	consoleInput = document.getElementById("consoleInput");
	consoleInput.focus();
	consoleInput.scrollIntoView();
}

document.addEventListener("keyup", (event) => {
	if (consoleInput != document.activeElement) return;
	if (event.key == "Enter") checkCommand();
	else if (event.key == "ArrowUp") {
		if (commandHistory.length == 0) return;
		if (commandHistDep == 0) storeComm = consoleInput.value;
		commandHistDep = Math.min(commandHistDep+1, commandHistory.length);
		consoleInput.value = commandHistory[commandHistory.length-commandHistDep]
	}
	else if (event.key == "ArrowDown") {
		consoleInput.value = storeComm;
		commandHistDep = Math.max(commandHistDep-1, 0);
		if (commandHistDep != 0) consoleInput.value = commandHistory[commandHistory.length-commandHistDep]
	}
});
function checkCommand(auto = false){
	if (consoleInput.value != ""){
		let command = consoleInput.value;
		if (!auto) pushHistory(command);
		commandHistDep = 0;
		consoleInput.insertAdjacentHTML("beforeBegin", command);
		consoleInput.remove();
		let args = command.split(" ");
		let success = false;
		commands.every(element => {
			if (args[0] == element.command) { element.function(args); success = true; return false; }
			return true;
		});
		if (!success) consoleWrite(bash+": "+args[0]+": command not found");
		prepareCommand();
	}
}

prepareCommand();
consoleInput.value = "neofetch";
checkCommand(true);

//#endregion
//#region Windows
const windows = [];
let movingWindow = 0;

function newWindow(title, width, height){
	let window = {	"index": 0,
					"mainDiv":null,
					"content":null,
					"callback":null,
					"mouseX":0,
					"mouseY":0,
					"onClose": () => {},
	};
	let startX = document.documentElement.clientWidth/2 - width/2;
	let startY = document.documentElement.clientHeight/2 - height/2;

	let mainDiv = document.createElement("div");
	document.body.appendChild(mainDiv);
	mainDiv.classList = "window";
	mainDiv.style = "top:"+startY+"px; left:"+startX+"px; width:"+width+"px; height: "+height+"px;";

	let content = document.createElement("div");
	mainDiv.appendChild(content);
	content.classList = "windowContent";

	let close = document.createElement("div");
	mainDiv.appendChild(close);
	close.classList = "windowClose";
	close.innerHTML = `
	<svg viewBox="0 0 100 100">
		<path	fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				d="m 15,50 h 70 v 35 h -35 v -70"/>
	</svg>`;
	close.onmousedown = () =>{
		window.onClose();
		windows.splice(window.index, 1);
		mainDiv.remove();
	}

	let header = document.createElement("div");
	mainDiv.appendChild(header);
	header.classList = "windowHeader";
	header.innerHTML = title;
	header.onmousedown = (e) =>{
		e = e || mainDiv.event;
		e.preventDefault();
		for (let i = 0; i < windows.length; i++){
			if (windows[i].mainDiv == mainDiv) movingWindow = i;
		}
		windows[movingWindow].mouseX = e.clientX;
		windows[movingWindow].mouseY = e.clientY;

		document.onmousemove = (e) => {
			e = e || mainDiv.event;
			e.preventDefault();

			let difX = windows[movingWindow].mouseX - e.clientX;
			let difY = windows[movingWindow].mouseY - e.clientY;
			windows[movingWindow].mouseX = e.clientX;
			windows[movingWindow].mouseY = e.clientY;

			windows[movingWindow].mainDiv.style.top = 
			Math.max(0, Math.min(document.documentElement.clientHeight - windows[movingWindow].mainDiv.offsetHeight, windows[movingWindow].mainDiv.offsetTop - difY))+"px";

			windows[movingWindow].mainDiv.style.left = 
			Math.max(0, Math.min(document.documentElement.clientWidth - windows[movingWindow].mainDiv.offsetWidth, windows[movingWindow].mainDiv.offsetLeft - difX))+"px";
		}
		document.onmouseup = (e) => {
			document.onmousemove = null;
		}
	}
	window.mainDiv = mainDiv;
	window.content = content;
	window.index = windows.push(window)-1;
	return window;
}
//#endregion
//#region Other
const hamburgerButton = document.getElementById("hamburger");

hamburgerButton.addEventListener("click", () => {
	hamburgerButton.setAttribute("aria-expanded", 
		hamburgerButton.getAttribute("aria-expanded") == "true" 
		? "false"
		: "true"
	);
});

const defaultTheme = document.getElementById("defaultTheme");
const otherTheme = document.getElementById("otherTheme");
const themes = ["default", "other"];

setTheme(localStorage.getItem("colTheme") || "default");

defaultTheme.onclick = () => { setTheme("default") }
otherTheme.onclick = () => { setTheme("other") }

function setTheme(theme){
	if (!themes.includes(theme)) return false;
	document.body.className = theme;
	localStorage.setItem("colTheme", theme);
	return true;
}
//#endregion