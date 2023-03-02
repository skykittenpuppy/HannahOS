let consoleApp = new Application("Console", "Resources/ConsoleIcon.png", true, "50em", "34em",
function() {
	this.windowContent.commandHistDep = 0;
	this.windowContent.storeComm = "";
	this.windowContent.directory = "/home/guest";
	prepareCommand(this.windowContent);
	this.windowContent.consoleInput.value = "neofetch";
	checkCommand(this.windowContent, true);

	document.addEventListener("keyup", (event) => {
		if (this.windowContent.consoleInput != document.activeElement) return;
		if (event.key == "Enter") checkCommand(this.windowContent);
		else if (event.key == "ArrowUp") {
			if (commandHistory.length == 0) return;
			if (this.windowContent.commandHistDep == 0) this.windowContent.storeComm = this.windowContent.consoleInput.value;
			this.windowContent.commandHistDep = Math.min(this.windowContent.commandHistDep+1, commandHistory.length);
			this.windowContent.consoleInput.value = commandHistory[commandHistory.length-this.windowContent.commandHistDep]
		}
		else if (event.key == "ArrowDown") {
			this.windowContent.consoleInput.value = this.windowContent.storeComm;
			this.windowContent.commandHistDep = Math.max(this.windowContent.commandHistDep-1, 0);
			if (this.windowContent.commandHistDep != 0) this.windowContent.consoleInput.value = commandHistory[commandHistory.length-this.windowContent.commandHistDep]
		}
	});
});

const shell = "bash";
const rootDirectory = "/";
const homeDirectory = "/home/guest";
const commandHistLen = 20;
let commandHistory = []
if (localStorage.getItem("commandHistory")) commandHistory = JSON.parse(localStorage.getItem("commandHistory"));
const input = `<input id="consoleInput" spellcheck="false" autocomplete="off"/>`;
const neofetchInfo = `
<img src="Resources/neofetch/PFP.png"/>
<pre>
 <span class="colour04">Hannah</span>@<span class="colour04">beegirl.gay</span>
 ------------------
 <span class="colour11">OS</span>: EndeavourOS Linux x86_64
 <span class="colour11">Name</span>: Hannah Hadfield
 <span class="colour11">LGBTQI+</span>: <img class="icon" src="Resources/neofetch/GynoR.png"/>Gynoromantic, <img class="icon" src="Resources/neofetch/PanS.png"/>Pansexual,   <img class="icon" src="Resources/neofetch/PolyA.png"/>Polyamorous,
          <img class="icon" src="Resources/neofetch/TransG.png"/>Transgender,  <img class="icon" src="Resources/neofetch/PlushG.png"/>Plushgender, <img class="icon" src="Resources/neofetch/BeeG.png"/>Beegender
 <span class="colour11">Pronouns</span>: It/Its, They/Them, She/Her
 <span class="colour11">Hobbies</span>: C# Programming, Bad Ukulele, 
 <span class="colour11">Placeholder</span>: 
 <span class="colour11">Placeholder</span>: 
 <span class="colour11">Idols</span>: Maia Arson Crimew, 

 <span class="palette"><span class="colour01">███</span><span class="colour03">███</span><span class="colour05">███</span><span class="colour07">███</span><span class="colour09">███</span><span class="colour11">███</span><span class="colour13">███</span><span class="colour15">███</span></span>
 <span class="palette"><span class="colour02">███</span><span class="colour04">███</span><span class="colour06">███</span><span class="colour08">███</span><span class="colour10">███</span><span class="colour12">███</span><span class="colour14">███</span><span class="colour16">███</span></span>
</pre>`;
const commands = [
	{command: "neofetch", function: (window, args) => { consoleWrite(window, neofetchInfo, "neofetch"); }},
	{command: "transrights", function: (window, args) => { 
		let re = args.slice(1).join(" ")+" "; 
		let de = re.trim() == ""
		let cl = "nowrap"
		if (de) { re = "█"; cl += " palette"}
		consoleWrite(window,
					`<span class="tBlue  nowrap">`+re.repeat(1000)+`</span></br>`+
					`<span class="tPink  nowrap">`+re.repeat(1000)+`</span></br>`+
			(!de ?	`<span class="       nowrap">`+re.repeat(1000)+`</span></br>`:
					`<span class="tWhite nowrap">`+re.repeat(1000)+`</span></br>`)+
					`<span class="tPink  nowrap">`+re.repeat(1000)+`</span></br>`+
					`<span class="tBlue  nowrap">`+re.repeat(1000)+`</span></br>`, cl); 
	}},
	{command: "echo", function: (window, args) => { consoleWrite(window, args.slice(1).join(" ")); }},
	{command: "cowsay", function: (window, args) => { consoleWrite(window, cowSay(args.slice(1).join(" "))); }},
	{command: "rev", function: (window, args) => { consoleWrite(window, args.slice(1).join(" ").split("").reverse().join("")); }},
	{command: "theme", function: (window, args) => {
		if (args.length < 2) {
			consoleWrite(window, themes.join(" "));
		}
		else if (!setTheme(args.slice(1).join(" "))) {
			consoleWrite(window, bash+": theme: theme not found");
		}
	}},
	{command: "cd", function: (window, args) => {
		if (args.length > 2) { consoleWrite(window, bash+": cd: too many arguments<br/>"); return; }
		console.log(args[1])
		if (args[1] == undefined || args[1] == "") {window.directory = homeDirectory; return;}
		if (args[1].startsWith("/")) {window.directory = args[1]; return;}
		if (args[1].startsWith("~")) {window.directory = homeDirectory; args[1] = args[1].slice(1);}
		window.directory += "/"+args[1];
	}},
	{command: "help", function: (window, args) => { let output = ""; commands.forEach(element => { output+= element.command+" "; }); consoleWrite(window, output);}},
	{command: "clear", function: (window, args) => { consoleClear(window); }},
	{command: "pacman", function: (window, args) => { appList["Pacman"].openApp(args[1] || 0) }},
	{command: "bezier", function: (window, args) => { appList["Bézier"].openApp() }},
];

function getShortDir(window){
	if (window.directory == rootDirectory) return "/";
	if (window.directory == homeDirectory) return "~";
	const arr = window.directory.split("/");
	return arr[arr.length-1];
}
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

function consoleClear(window){
	window.innerHTML = "";
}
function consoleWrite(window, text, className = ""){
	window.innerHTML += "<span"+(className == "" ? "" : ` class="`+className+`"`)+">"+text+"</span>";
}
function prepareCommand(window){
	consoleWrite(window, "[guest@beegirl.gay "+getShortDir(window)+"]$ "+input);
	window.consoleInput = window.getElementsByTagName("input")[0];
	window.consoleInput.focus();
	window.consoleInput.scrollIntoView();
}
function checkCommand(window, auto = false){
	if (window.consoleInput.value != ""){
		let command = window.consoleInput.value;
		if (!auto) pushHistory(window, command);
		commandHistDep = 0;
		window.consoleInput.insertAdjacentHTML("beforeBegin", command);
		window.consoleInput.remove();
		let args = command.split(" ");
		let success = false;
		commands.every(element => {
			if (args[0] == element.command) { element.function(window, args); success = true; return false; }
			return true;
		});
		if (!success) consoleWrite(window, shell+": "+args[0]+": command not found");
		prepareCommand(window);
	}
}
function pushHistory(window, command){
	commandHistory.push(command);
	if(commandHistory.length > commandHistLen) 
	commandHistory = commandHistory.slice(commandHistory.length-commandHistLen, commandHistory.length);
	localStorage.setItem("commandHistory", JSON.stringify(commandHistory));
}