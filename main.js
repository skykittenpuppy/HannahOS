//#region Console
const hamburgerButton = document.getElementById("hamburger");
let consoleInput = document.getElementById("consoleInput");
const rootDirectory = "/";
const homeDirectory = "/home/guest";
let directory = "/home/guest";
const bash = "bash";
const neofetchInfo = `
<div class="neofetch">
	<img src="Resources/icon.png"/>
	<div>
		<span class="colour04">Hannah</span>@<span class="colour04">beegirl.gay</span><br/>
		------------------<br/>
		<span class="colour11">OS</span>: EndeavourOS Linux x86_64<br/>
		<span class="colour11">Name</span>: Hannah Hadfield<br/>
		<span class="colour11">LGTBQI+</span>: Gynoromantic, Pansexual, Polyamorous,<br/>
		<pre>         Transgender, Plushgender, Beegender</pre>
		<span class="colour11">Pronouns</span>: It/Its, They/Them, She/Her<br/>
		<span class="colour11">Hobbies</span>: , , <br/>
		<span class="colour11">Placeholder</span>: <br/>
		<span class="colour11">Placeholder</span>: <br/>
		<span class="colour11">Placeholder</span>: <br/>
		<br/>
		<span class="colour01">███</span><span class="colour03">███</span><span class="colour05">███</span><span class="colour07">███</span><span class="colour09">███</span><span class="colour11">███</span><span class="colour13">███</span><span class="colour15">███</span><br/>
		<span class="colour02">███</span><span class="colour04">███</span><span class="colour06">███</span><span class="colour08">███</span><span class="colour10">███</span><span class="colour12">███</span><span class="colour14">███</span><span class="colour16">███</span><br/>
	</div>
</div>
`;
const transrights = `
<span class="lightBlue">██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████</span></br>
<span class="lightPink">██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████</span></br>
<span class="white"    >██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████</span></br>
<span class="lightPink">██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████</span></br>
<span class="lightBlue">██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████</span></br>
`;

hamburgerButton.addEventListener("click", () => {
	hamburgerButton.setAttribute("aria-expanded", 
		hamburgerButton.getAttribute("aria-expanded") === "true" 
		? "false"
		: "true");
});

const commands = [
	{command: "neofetch", function: (args) => { consoleWrite(neofetchInfo); }},
	{command: "transrights", function: (args) => { consoleWrite(transrights); }},
	{command: "echo", function: (args) => { consoleWrite(args.slice(1).join(" ")+"<br/>"); }},
	{command: "cowsay", function: (args) => { 
		if (args.length < 2) consoleWrite(bash+": cd: too few arguments<br/>")
		consoleWrite(cowSay(args.slice(1).join(" "))); 
	}},
	{command: "rev", function: (args) => { consoleWrite(args.slice(1).join(" ").split("").reverse().join("")+"<br/>"); }},
	{command: "cd", function: (args) => {
		if (args.length > 2) consoleWrite(bash+": cd: too many arguments<br/>")
		else if (args[1].startsWith("/")) directory = args[1];
		else if (args[1].startsWith("~")) directory = homeDirectory+"/"+args[1].slice(1);
		else directory += "/"+args[1];
	}},
	{command: "clear", function: (args) => { consoleClear(); }},
	{command: "help", function: (args) => {commands.forEach(element => {
		consoleWrite(element.command+" ");
	}); consoleWrite("<br/>");}},
];

document.addEventListener("keyup", checkCommand);

function prepareCommand(){
	consoleWrite("[guest@beegirl.gay "+getShortDir()+"]$ ");
	consoleInput.value = "";
}
function getShortDir(){
	if (directory == rootDirectory) return "/";
	if (directory == homeDirectory) return "~";
	const arr = directory.split("/");
	return arr[arr.length-1];
}

function checkCommand(event, bypass = false){
	if (((event.key === "Enter" && consoleInput === document.activeElement) || bypass) && consoleInput.value != ""){
		consoleWrite(consoleInput.value+"<br/>");
		let args = consoleInput.value.split(" ");
		let success = false;
		commands.every(element => {
			if (args[0] == element.command) { element.function(args); success = true; return false; }
			return true;
		});
		if (!success) consoleWrite(bash+": "+args[0]+": command not found<br/>");
		prepareCommand();
	}
}
function consoleWrite(text){
	consoleInput.insertAdjacentHTML("beforeBegin", text);
}
function cowSay(text){
	//let splitText = text.match(/.{1,20}/g);
	let splitText = [""];
	let temp = 0;
	text.split(" ").forEach(element => {
		console.log((splitText[temp].length +1+ element.length));
		if ((splitText[temp].length +1+ element.length) > 20){
			console.log("over 20");
			temp++;
			splitText[temp] = element;
		}
		else {
			splitText[temp] += (splitText[temp] == "" ? "" : " ") + element;
		}
	});
	let width = splitText[0].length
	let cowText = `<pre> `+" ".repeat(Math.max(0, 8-width))+"_".repeat(width);
	if (splitText.length == 1) {
		cowText += `
`+" ".repeat(Math.max(0, 8-width))+`&lt`+splitText[0]+`>`;
	}
	else {
		cowText += `
/`+splitText[0]+`\\`;
		for (let i = 1; i < splitText.length-1; i++) {
			cowText += `
|`+splitText[i]+`|`;
	  	}
		  cowText += `
\\`+splitText[splitText.length-1]+" ".repeat(Math.max(0, width-splitText[splitText.length-1].length))+`/`;
	}
	cowText += `
 `+" ".repeat(Math.max(0, 8-width))+"-".repeat(splitText[0].length);
	return cowText+`
        \\   ^__^
         \\  (oo)\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||</pre>`;
}
function consoleClear(){
	consoleInput.parentElement.innerHTML = '<input id="consoleInput" spellcheck="false"/>';
	consoleInput = document.getElementById("consoleInput");
}

prepareCommand();
consoleInput.value = "neofetch";
document.activeElement = consoleInput;
checkCommand(new KeyboardEvent(""), true);
//#endregion
//#region Themes

//Theme Buttons
const defaultTheme = document.getElementById("defaultTheme");
const otherTheme = document.getElementById("otherTheme");

let theme = "default";
theme = localStorage.getItem("colTheme") || "default";

document.body.className = theme;
localStorage.setItem("colTheme", theme);

defaultTheme.onclick = () => {
	document.body.className = "default";
	localStorage.setItem("colTheme", "default");
}
otherTheme.onclick = () => {
	document.body.className = "other";
	localStorage.setItem("colTheme", "other");
}

//#endregion