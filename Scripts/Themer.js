let themerApp = new Application("Themer", "Resources/ThemerIcon.png", true, "18em", "8em",
function() {
	console.log(this)
	this.windowContent.innerHTML = `
	<span style="grid-area: p1"><span class="colour01">███</span><span class="colour03">███</span><span class="colour05">███</span><span class="colour07">███</span><span class="colour09">███</span><span class="colour11">███</span><span class="colour13">███</span><span class="colour15">███</span></span>
	<span style="grid-area: p2"><span class="colour02">███</span><span class="colour04">███</span><span class="colour06">███</span><span class="colour08">███</span><span class="colour10">███</span><span class="colour12">███</span><span class="colour14">███</span><span class="colour16">███</span></span>`
	let buttonNum = 1;
	themes.forEach(theme => {
		let themeButton = document.createElement("button");
		themeButton.classList = theme;
		themeButton.innerHTML = theme;
		themeButton.style.gridArea = "t"+buttonNum;
		buttonNum += 1;
		themeButton.onclick = () => {
			setTheme(theme);
		}
		this.windowContent.appendChild(themeButton);
	});
	while(buttonNum < 9){
		let themeButton = document.createElement("button");
		themeButton.classList = "emptyTheme";
		themeButton.style.gridArea = "t"+buttonNum;
		buttonNum += 1;
		this.windowContent.appendChild(themeButton);
	}
});