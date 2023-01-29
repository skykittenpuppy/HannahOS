//#region Console
document.addEventListener("keyup", checkCommand);
const myConsole = document.getElementById("console");
const input = `<input id="consoleInput" spellcheck="false"/>`;
let consoleInput;
let directory = "/home/guest";
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
<div>
	<span class="nowrap"><span class="colour04">Hannah</span>@<span class="colour04">beegirl.gay</span><br/></span>
	<span class="nowrap">------------------<br/></span>
	<span class="nowrap"><span class="colour11">OS</span>: EndeavourOS Linux x86_64<br/></span>
	<span class="nowrap"><span class="colour11">Name</span>: Hannah Hadfield<br/></span>
	<span class="nowrap"><pre><span class="colour11">LGBTQI+</span>: <img class="icon" src="Resources/GynoR.png"/>Gynoromantic, <img class="icon" src="Resources/PanS.png"/>Pansexual,   <img class="icon" src="Resources/PolyA.png"/>Polyamorous,</pre><br/></span>
	<span class="nowrap"><pre>         <img class="icon" src="Resources/TransG.png"/>Transgender,  <img class="icon" src="Resources/PlushG.png"/>Plushgender, <img class="icon" src="Resources/BeeG.png"/>Beegender</pre><br/></span>
	<span class="nowrap"><span class="colour11">Pronouns</span>: It/Its, They/Them, She/Her<br/></span>
	<span class="nowrap"><span class="colour11">Hobbies</span>: C# Programming, Bad Ukulele, <br/></span>
	<span class="nowrap"><span class="colour11">Placeholder</span>: <br/></span>
	<span class="nowrap"><span class="colour11">Placeholder</span>: <br/></span>
	<span class="nowrap"><span class="colour11">Idols</span>: Maia Arson Crimew, <br/></span>
	<span class="nowrap"><br/></span>
	<span class="nowrap"><span class="colour01">███</span><span class="colour03">███</span><span class="colour05">███</span><span class="colour07">███</span><span class="colour09">███</span><span class="colour11">███</span><span class="colour13">███</span><span class="colour15">███</span><br/></span>
	<span class="nowrap"><span class="colour02">███</span><span class="colour04">███</span><span class="colour06">███</span><span class="colour08">███</span><span class="colour10">███</span><span class="colour12">███</span><span class="colour14">███</span><span class="colour16">███</span><br/></span>
</div>`;
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
		if (re.trim() == "") re = "█";
		consoleWrite(`	<span class="other colour14 nowrap">`+re.repeat(1000)+`</span></br>
						<span class="other colour12 nowrap">`+re.repeat(1000)+`</span></br>
						<span class="other colour16 nowrap">`+re.repeat(1000)+`</span></br>
						<span class="other colour12 nowrap">`+re.repeat(1000)+`</span></br>
						<span class="other colour14 nowrap">`+re.repeat(1000)+`</span></br>`, "nowrap"); 
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

function checkCommand(event, bypass = false){
	if ((bypass || (event.key === "Enter" && consoleInput === document.activeElement)) && consoleInput.value != ""){
		let command = consoleInput.value;
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
checkCommand(new KeyboardEvent(""), true);

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