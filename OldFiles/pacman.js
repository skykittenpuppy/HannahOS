const image = new Image();
image.src = "Resources/Pacman/Sprites2.png";
const mazes = [
    {
		tiles: [
			[00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
			[00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
			[15, 15, 15, 15, 15, 15, 11, 03, 03, 03, 03, 03, 03, 03, 03, 03, 03, 03, 03, 03, 03, 07, 15, 15, 15, 15, 15, 15],
			[15, 15, 15, 15, 15, 15, 09, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 06, 15, 15, 15, 15, 15, 15],
			[15, 15, 15, 15, 15, 15, 09, 00, 04, 08, 00, 04, 12, 12, 12, 12, 08, 00, 04, 08, 00, 06, 15, 15, 15, 15, 15, 15],
			[15, 15, 15, 15, 15, 15, 09, 00, 06, 09, 00, 02, 03, 07, 11, 03, 01, 00, 06, 09, 00, 06, 15, 15, 15, 15, 15, 15],
			[15, 15, 15, 15, 15, 15, 09, 00, 06, 09, 00, 00, 00, 06, 09, 00, 00, 00, 06, 09, 00, 06, 15, 15, 15, 15, 15, 15],
			[15, 15, 15, 15, 15, 15, 09, 00, 06, 13, 12, 08, 00, 06, 09, 00, 04, 12, 14, 09, 00, 06, 15, 15, 15, 15, 15, 15],
			[03, 03, 03, 03, 03, 03, 01, 00, 06, 11, 03, 01, 00, 02, 01, 00, 02, 03, 07, 09, 00, 02, 03, 03, 03, 03, 03, 03],
			[00, 00, 00, 00, 00, 00, 00, 00, 06, 09, 00, 00, 00, 00, 00, 00, 00, 00, 06, 09, 00, 00, 00, 00, 00, 00, 00, 00],
			[12, 12, 08, 00, 04, 12, 12, 12, 14, 09, 00, 04, 12, 12, 12, 12, 08, 00, 06, 13, 12, 12, 12, 08, 00, 04, 12, 12],
			[11, 03, 01, 00, 02, 03, 03, 03, 07, 09, 00, 02, 03, 07, 11, 03, 01, 00, 06, 11, 03, 03, 03, 01, 00, 02, 03, 07],
			[09, 00, 00, 00, 00, 00, 00, 00, 06, 09, 00, 00, 00, 06, 09, 00, 00, 00, 06, 09, 00, 00, 00, 00, 00, 00, 00, 06],
			[09, 00, 04, 12, 12, 12, 08, 00, 06, 13, 12, 08, 00, 06, 09, 00, 04, 12, 14, 09, 00, 04, 12, 12, 12, 08, 00, 06],
			[09, 00, 02, 03, 03, 07, 09, 00, 02, 03, 03, 01, 16, 02, 01, 16, 02, 03, 03, 01, 00, 06, 11, 03, 03, 01, 00, 06],
			[09, 00, 00, 00, 00, 06, 09, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 06, 09, 00, 00, 00, 00, 06],
			[13, 12, 12, 08, 00, 06, 13, 12, 08, 00, 20, 28, 26, 31, 31, 21, 28, 24, 00, 04, 12, 14, 09, 00, 04, 12, 12, 14],
			[03, 03, 07, 09, 00, 02, 03, 03, 01, 00, 22, 16, 16, 16, 16, 16, 16, 25, 00, 02, 03, 03, 01, 00, 06, 11, 03, 03],
			[00, 00, 02, 01, 00, 00, 00, 00, 00, 00, 22, 16, 16, 16, 16, 16, 16, 25, 00, 00, 00, 00, 00, 00, 06, 09, 00, 00],
			[08, 00, 00, 00, 00, 04, 12, 12, 08, 00, 22, 16, 16, 16, 16, 16, 16, 25, 00, 04, 12, 12, 08, 00, 02, 01, 00, 04],
			[09, 00, 04, 08, 00, 06, 11, 03, 01, 00, 18, 19, 19, 19, 19, 19, 19, 17, 00, 02, 03, 07, 09, 00, 00, 00, 00, 06],
			[09, 00, 06, 09, 00, 06, 09, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 06, 09, 00, 04, 08, 00, 06],
			[09, 00, 06, 09, 00, 06, 09, 00, 04, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 08, 00, 06, 09, 00, 06, 09, 00, 06],
			[01, 00, 06, 09, 00, 06, 09, 00, 02, 03, 03, 03, 03, 07, 11, 03, 03, 03, 03, 01, 00, 06, 09, 00, 06, 09, 00, 02],
			[00, 00, 06, 09, 00, 06, 09, 00, 00, 00, 00, 00, 00, 06, 09, 00, 00, 00, 00, 00, 00, 06, 09, 00, 06, 09, 00, 00],
			[12, 12, 14, 09, 00, 06, 13, 12, 12, 12, 12, 08, 00, 06, 09, 00, 04, 12, 12, 12, 12, 14, 09, 00, 06, 13, 12, 12],
			[11, 03, 03, 01, 00, 02, 03, 03, 03, 03, 03, 01, 16, 02, 01, 16, 02, 03, 03, 03, 03, 03, 01, 00, 02, 03, 03, 07],
			[09, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 06],
			[09, 00, 04, 08, 00, 04, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 08, 00, 04, 08, 00, 06],
			[09, 00, 06, 09, 00, 06, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 09, 00, 06, 09, 00, 06],
			[09, 00, 06, 09, 00, 06, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 09, 00, 06, 09, 00, 06],
			[09, 00, 02, 01, 00, 06, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 09, 00, 02, 01, 00, 06],
			[09, 00, 00, 00, 00, 06, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 09, 00, 00, 00, 00, 06],
			[13, 12, 12, 12, 12, 14, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 13, 12, 12, 12, 12, 14],
			[00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
			[00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
		], 
		ghostX: 13.5, ghostY: 18,
		pacX:   13.5, pacY:   27,
	},
];
const pellets = [
    [
        [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
        [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
        [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
        [00, 00, 00, 00, 00, 00, 00, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 00, 00, 00, 00, 00, 00, 00],
        [00, 00, 00, 00, 00, 00, 00, 01, 00, 00, 01, 00, 00, 00, 00, 00, 00, 01, 00, 00, 01, 00, 00, 00, 00, 00, 00, 00],
        [00, 00, 00, 00, 00, 00, 00, 03, 00, 00, 01, 00, 00, 00, 00, 00, 00, 01, 00, 00, 03, 00, 00, 00, 00, 00, 00, 00],
        [00, 00, 00, 00, 00, 00, 00, 01, 00, 00, 01, 01, 01, 00, 00, 01, 01, 01, 00, 00, 01, 00, 00, 00, 00, 00, 00, 00],
        [00, 00, 00, 00, 00, 00, 00, 01, 00, 00, 00, 00, 01, 00, 00, 01, 00, 00, 00, 00, 01, 00, 00, 00, 00, 00, 00, 00],
        [00, 00, 00, 00, 00, 00, 00, 01, 00, 00, 00, 00, 01, 00, 00, 01, 00, 00, 00, 00, 01, 00, 00, 00, 00, 00, 00, 00],
        [01, 01, 01, 01, 01, 01, 01, 01, 00, 00, 01, 01, 01, 01, 01, 01, 01, 01, 00, 00, 01, 01, 01, 01, 01, 01, 01, 01],
        [00, 00, 00, 01, 00, 00, 00, 00, 00, 00, 01, 00, 00, 00, 00, 00, 00, 01, 00, 00, 00, 00, 00, 00, 01, 00, 00, 00],
        [00, 00, 00, 01, 00, 00, 00, 00, 00, 00, 01, 00, 00, 00, 00, 00, 00, 01, 00, 00, 00, 00, 00, 00, 01, 00, 00, 00],
        [00, 01, 01, 01, 01, 01, 01, 01, 00, 00, 01, 01, 01, 00, 00, 01, 01, 01, 00, 00, 01, 01, 01, 01, 01, 01, 01, 00],
        [00, 01, 00, 00, 00, 00, 00, 01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01, 00, 00, 00, 00, 00, 01, 00],
        [00, 01, 00, 00, 00, 00, 00, 01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01, 00, 00, 00, 00, 00, 01, 00],
        [00, 01, 01, 01, 01, 00, 00, 01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01, 00, 00, 01, 01, 01, 01, 00],
        [00, 00, 00, 00, 01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01, 00, 00, 00, 00],
        [00, 00, 00, 00, 01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01, 00, 00, 00, 00],
        [01, 01, 00, 00, 01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01, 00, 00, 01, 01],
        [00, 01, 01, 01, 01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01, 00, 00, 01, 00],
        [00, 01, 00, 00, 01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01, 01, 01, 01, 00],
        [00, 01, 00, 00, 01, 00, 00, 01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01, 00, 00, 01, 00, 00, 01, 00],
        [00, 01, 00, 00, 01, 00, 00, 01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01, 00, 00, 01, 00, 00, 01, 00],
        [00, 01, 00, 00, 01, 00, 00, 01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01, 00, 00, 01, 00, 00, 01, 00],
        [01, 01, 00, 00, 01, 00, 00, 01, 01, 01, 01, 01, 01, 00, 00, 01, 01, 01, 01, 01, 01, 00, 00, 01, 00, 00, 01, 01],
        [00, 00, 00, 00, 01, 00, 00, 00, 00, 00, 00, 00, 01, 00, 00, 01, 00, 00, 00, 00, 00, 00, 00, 01, 00, 00, 00, 00],
        [00, 00, 00, 00, 01, 00, 00, 00, 00, 00, 00, 00, 01, 00, 00, 01, 00, 00, 00, 00, 00, 00, 00, 01, 00, 00, 00, 00],
        [00, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 00],
        [00, 01, 00, 00, 01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01, 00, 00, 01, 00],
        [00, 01, 00, 00, 01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01, 00, 00, 01, 00],
        [00, 03, 00, 00, 01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01, 00, 00, 03, 00],
        [00, 01, 00, 00, 01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01, 00, 00, 01, 00],
        [00, 01, 01, 01, 01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01, 01, 01, 01, 00],
        [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
        [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
        [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    ],
];
const red = "#ff0000";
const pink = "#ffb7ff";
const blue = "#00ffff";
const orange = "#ffb751";

const renderScale = 8 * 2;

function GetSpritePos(num) {
    if (num < 16) { return { x: num * 8, y: 0 } }
    else if (num < 32) { return { x: (num - 16) * 8, y: 8 } }
    else if (num < 36) { return { x: 0, y: (num - 31) * 16 } }
}
function RenderMaze(context, curMaze) {
	context.drawImage(image, 132, 12, 8, 8, 0, 0, 28 * renderScale, 36 * renderScale);
	for (let y = 0; y < 36; y++) {
		for (let x = 0; x < 28; x++) {
			let p = GetSpritePos(mazes[curMaze].tiles[y][x]);
			context.drawImage(image, p.x, p.y, 8, 8, x * renderScale, y * renderScale, renderScale, renderScale);
		}
	}
}
function RenderPellets(context, frame, curPellets) {
	for (let y = 0; y < 36; y++) {
		for (let x = 0; x < 28; x++) {
			let pe = curPellets[y][x];
			if (pe == 0) continue;
			let p = {x: (15+pe) * 8, y:0};
			if (pe == 3 && Math.floor(frame/2)%2 == 1) p.x = p.x -8;
			context.drawImage(image, p.x, p.y, 8, 8, x * renderScale, y * renderScale, renderScale, renderScale);
		}
	}
}
function RenderPacman(context, frame, pacman) {
	p = { x: 0, y: 112 }
	if (pacman.state == "dying") p = { x: 0, y: 96 };
	else {
		p.x = p.x + pacman.facing * 32;
		if (frame%2 == 1) p.x += 16;
		if (frame%4 == 0) p = {x: 0, y: 128};
	}
	context.drawImage(image, p.x, p.y, 8, 8, (pacman.x-0.5) * renderScale, (pacman.y-0.5) * renderScale, renderScale, renderScale);
	context.drawImage(image, p.x+8, p.y, 8, 8, (pacman.x+0.5) * renderScale, (pacman.y-0.5) * renderScale, renderScale, renderScale);
	context.drawImage(image, p.x, p.y+8, 8, 8, (pacman.x-0.5) * renderScale, (pacman.y+0.5) * renderScale, renderScale, renderScale);
	context.drawImage(image, p.x+8, p.y+8, 8, 8, (pacman.x+0.5) * renderScale, (pacman.y+0.5) * renderScale, renderScale, renderScale);
}
function RenderGhost(context, frame, ghost) {
		let c = ghost;
		let i = 0;
		switch(c.colour){
			case red:
				i = 0; break;
			case pink:
				i = 1; break;
			case blue:
				i = 2; break;
			case orange:
				i = 3; break;
		}
		p = GetSpritePos(32 + i);
		if (c.state == "frightened") p = { x: 0, y: 96 };
		else p.x = p.x + c.facing * 32;
		if (c.state == "eaten") p.y = 80;
		else p.x = p.x + (frame % 2) * 16;
		if (c.state == "frightened" && c.timer <= 50) p.x = p.x + Math.floor(frame / 2) % 2 * 32;
		context.drawImage(image, p.x, p.y, 8, 8, (c.x-0.5)*renderScale, (c.y-0.5)*renderScale, renderScale, renderScale);
		context.drawImage(image, p.x + 8, p.y, 8, 8, (c.x+0.5)*renderScale, (c.y-0.5)*renderScale, renderScale, renderScale);
		context.drawImage(image, p.x, p.y + 8, 8, 8, (c.x-0.5)*renderScale, (c.y+0.5)*renderScale, renderScale, renderScale);
		context.drawImage(image, p.x + 8, p.y + 8, 8, 8, (c.x+0.5)*renderScale, (c.y+0.5)*renderScale, renderScale, renderScale);
}
function ComputeGhost(context, frame, ghosts, i, pacman, curMaze) {
	let c = ghosts[i];
	let o = [];
	let b = { x: 0, y: 0, f: c.facing, d: 10000000 };
	let checkDirs = true;
	if (c.state == "sleep") {
		if (c.y == mazes[curMaze].ghostY - 0.5) c.facing = 2;
		else if (c.y == mazes[curMaze].ghostY + 0.5) c.facing = 0;

		if (c.facing == 0) c.y -= 0.5;
		else if (c.facing == 2) c.y += 0.5;
		return;
	}
	else if (c.x == mazes[curMaze].ghostX && c.y == mazes[curMaze].ghostY - 3) {
		c.state = "chase";
		o[3] = { x:  0.5, y: 0, f: 3 };
		o[1] = { x: -0.5, y: 0, f: 1 };
		checkDirs = false;
	}
	else if (c.state == "leave") {
		c.y == mazes[curMaze].ghostY;

		if (c.x > mazes[curMaze].ghostX) { c.x -= 0.5; c.facing = 1; }
		else if (c.x < mazes[curMaze].ghostX) { c.x += 0.5; c.facing = 3; }
		else if (c.x = mazes[curMaze].ghostX) { c.y -= 0.5; c.facing = 0; }
		return;
	}
	else if (c.state == "eaten" && 
				c.x >= mazes[curMaze].ghostX-0.5 && c.x <= mazes[curMaze].ghostX+0.5 && 
				c.y >= mazes[curMaze].ghostY - 3 && c.y <= mazes[curMaze].ghostY) {
		c.facing = 2;
		c.x = 13.5;
		c.y += 0.5;
		if (c.y == 18) {
			c.state = "leave";
		}
		return;
	}

	if (c.state == "chase" || c.state == "scatter"){
		c.state = Math.floor((frame%400)/200) == 0 ? "chase" : "scatter";
	}
	else if (c.state == "frightened"){
		if (c.x == pacman.x && c.y == pacman.y) c.state = "eaten";
		if (c.timer <= 0) { c.state = "chase"; }
	}

	const t = GetGhostTarget(ghosts, i, pacman);
	if (checkDirs){
		for (let d = 0; d < 4; d++) {
			if (((c.facing + 2) % 4) == d) continue;
			let m = { x: 0, y: 0, f: d };
			if (d == 0) m.y = -1;
			else if (d == 1) m.x = -1;
			else if (d == 2) m.y = 1;
			else if (d == 3) m.x = 1;
			const w = mazes[curMaze].tiles[c.y + m.y][c.x + m.x]
			if (!(w == 0 || w == 16 || w == undefined || (w == 31 && c.state == "eaten"))) continue;
			if (m.y == -1 && w == 16) continue;
			o[d] = m;
		}
	}
	for (let d = 0; d < 4; d++) {
		if (o[d] == undefined) continue;
		m = o[d];
		m.d = (c.x + m.x - t.x) * (c.x + m.x - t.x) + (c.y + m.y - t.y) * (c.y + m.y - t.y);
		if (c.state == "frightened") m.d = Math.random() * 100;
		if (m.d < b.d) {
			b = m;
		}
	}
	c.x = (c.x + b.x + 28) % 28;
	c.y = c.y + b.y;
	c.facing = b.f;
	c.timer = Math.max(0, c.timer-1);
	context.lineWidth = 0.25*renderScale;
	context.strokeStyle = c.colour;
	context.lineCap = "round";
	context.globalAlpha = 0.5;
	context.beginPath();
	context.moveTo((c.x+0.5) * renderScale, (c.y+0.5) * renderScale);
	context.lineTo((t.x+0.5) * renderScale, (t.y+0.5) * renderScale);
	context.stroke();
	/*context.beginPath();
	context.moveTo((c.x+0.5) * renderScale, (c.y+0.5) * renderScale);
	context.lineTo((c.x+0.5+b.x*5) * renderScale, (c.y+0.5+b.y*5) * renderScale);
	context.stroke();*/
	if (c.colour == orange) {
		context.beginPath();
		context.arc((pacman.x+0.5) * renderScale, (pacman.y+0.5) * renderScale, 8*renderScale, 0, 2 * Math.PI);
		context.globalAlpha = 0.25;
		context.stroke();
	}
	context.globalAlpha = 1;
	if (c.state == "frightened"){
		if (c.x == pacman.x && c.y == pacman.y) c.state = "eaten";
		if (c.timer <= 0) { c.state = "chase"; }
	}
}
function GetGhostTarget(ghosts, ii, pacman) {
	let c = ghosts[ii];
	let i = 0;
	switch(c.colour){
		case red:
			i = 0; break;
		case pink:
			i = 1; break;
		case blue:
			i = 2; break;
		case orange:
			i = 3; break;
	}
	let state = c.state;
	let target = { x: 0, y: 0, c: 0 }
	switch(state){
		case "sleep":
		case "frightened":
		default:
			if (i == 0)      target = { x: c.x, y: c.y }
			else if (i == 1) target = { x: c.x, y: c.y }
			else if (i == 2) target = { x: c.x, y: c.y }
			else if (i == 3) target = { x: c.x, y: c.y }
			break;
		case "chase":
			if (i == 0) target = { x: pacman.x, y: pacman.y }
			else if (i == 1) {
				if (pacman.facing == 0) target = { x: pacman.x - 4, y: pacman.y - 4 }
				else target = { x: pacman.x + 4 * ((pacman.facing - 2) % 2), y: pacman.y + 4 * ((pacman.facing - 1) % 2) }
			}
			else if (i == 2) {
				let intermediary = { x: 0, y: 0 }
				if (pacman.facing == 0) intermediary = { x: pacman.x - 2, y: pacman.y - 2 }
				else intermediary = { x: pacman.x + 2 * ((pacman.facing - 2) % 2), y: pacman.y + 2 * ((pacman.facing - 1) % 2) }
				target = { x: pacman.x + (intermediary.x - ghosts[0].x), y: pacman.y + (intermediary.y - ghosts[0].y) }
			}
			else if (i == 3) {
				const g = c;
				const d = (g.x - pacman.x) * (g.x - pacman.x) + (g.y - pacman.y) * (g.y - pacman.y);
				if (d > 64) target = { x: pacman.x, y: pacman.y }
				else target = { x: 0, y: 34 }
			}
			break;
		case "scatter":
			if (i == 0)      target = { x: 25, y: -1 }
			else if (i == 1) target = { x: 03, y: -1 }
			else if (i == 2) target = { x: 27, y: 34 }
			else if (i == 3) target = { x: 00, y: 34 }
			break;
		case "eaten":
			target = { x: 14, y: 16 }
			break;
	}
	return target;
}
function ComputePacman(pacman, curMaze, curPellets, ghosts){
	let moved = false;
	if (pacman.timer > 0){
		let m = {x: 0, y: 0};
		switch(pacman.tryFace){
			case 0:
			default:
				m.y = -1;
				break;
			case 1:
				m.x = -1;
				if (pacman.x % 1 != 0) m.x = -0.5;
				break;
			case 2:
				m.y = 1;
				break;
			case 3:
				m.x = 1;
				if (pacman.x % 1 != 0) m.x = 0.5;
				break;
		}
		let newTile = mazes[curMaze].tiles[pacman.y+m.y][pacman.x+m.x];
		if (newTile == 0 || newTile == 16 || newTile == undefined) { 
			pacman.x += m.x; 
			pacman.y += m.y; 
			pacman.facing = pacman.tryFace;
			moved = true;
		} 
	} 
	if (!moved) {
		let m = {x: 0, y: 0};
		switch(pacman.facing){
			case 0:
			default:
				m.y = -1;
				break;
			case 1:
				m.x = -1;
				if (pacman.x % 1 != 0) m.x = -0.5;
				break;
			case 2:
				m.y = 1;
				break;
			case 3:
				m.x = 1;
				if (pacman.x % 1 != 0) m.x = 0.5;
				break;
		}
		let newTile = mazes[curMaze].tiles[pacman.y+m.y][pacman.x+m.x];
		if (newTile == 0 || newTile == 16 || newTile == undefined) { 
			pacman.x += m.x; 
			pacman.y += m.y; 
		} 
	}
	pacman.x = (pacman.x + 28) % 28;

	if (curPellets[pacman.y][pacman.x] == 3) {
		for (let ghost of ghosts){
			if (ghost.state == "sleep" || ghost.state == "leave" || ghost.state == "enter" || ghost.state == "eaten") continue;
			ghost.state = "frightened";
			ghost.timer = 150;
			
		}
	}
	pacman.timer = Math.max(0, pacman.timer-1);
	curPellets[pacman.y][pacman.x] = 0;
	return curPellets.every( (row) => {
		return row.every( (e) => {
			return e == 0;
		})
	})
}

function startPacman(mazeNum){
	let window = newWindow("Pacman", 460, 580);
	window.content.classList += " pacman"
	let canvas = document.createElement("canvas");
	canvas.width = 28 * renderScale;
	canvas.height = 36 * renderScale;
	window.content.appendChild(canvas);
	let context = canvas.getContext("2d");
	context.imageSmoothingEnabled = false;

	let frame;
	let curMaze;
	let curPellets;
	let ghosts;
	let pacman;
	let go;
	Restart(mazeNum);

    let id = setInterval(DoFrame, 100);
	window.onClose = () => {
		clearInterval(id); 
	}

	function Restart(mazeNum) {
		frame = 0;
		curMaze = Math.min(0, Math.max(mazes.length-1, mazeNum));
		curPellets = structuredClone(pellets[curMaze]);
		//curPellets = pellets[curMaze];
		ghosts = [
			{ colour: red,    x: mazes[curMaze].ghostX,     y: mazes[curMaze].ghostY - 3, facing: 1, state: "leave", timer: 0 },
			{ colour: pink,   x: mazes[curMaze].ghostX,     y: mazes[curMaze].ghostY,     facing: 2, state: "sleep", timer: 0 },
			{ colour: blue,   x: mazes[curMaze].ghostX - 2, y: mazes[curMaze].ghostY,     facing: 0, state: "sleep", timer: 0 },
			{ colour: orange, x: mazes[curMaze].ghostX + 2, y: mazes[curMaze].ghostY,     facing: 0, state: "sleep", timer: 0 },
		];
		pacman = { x: mazes[curMaze].pacX, y: mazes[curMaze].pacY, facing: 1, state: "alive", tryFace: 1, timer: 0 };
		go = false;
		won = false;
		window.content.onmousedown = () => { 
			go = true; 
			frame = 0; 
			window.content.onmousedown = null; 
		}
		document.onkeydown = (event) => {
			if (!go) return;
			if (event.key == "w") { 
				pacman.tryFace = 0;
				pacman.timer = 3; 
			}
			else if (event.key == "s") { 
				pacman.tryFace = 2;
				pacman.timer = 3; 
			}
			else if (event.key == "a") { 
				pacman.tryFace = 1;
				pacman.timer = 3; 
			}
			else if (event.key == "d") { 
				pacman.tryFace = 3;
				pacman.timer = 3; 
			}
		}
		DoFrame();
	}
	function DoFrame() {
		if (frame == 20) ghosts[1].state = "leave";
		if (frame == 60) ghosts[2].state = "leave";
		if (frame == 100) ghosts[3].state = "leave";
		frame++;
		RenderMaze(context, curMaze);
		RenderPellets(context, frame, curPellets);
		if (!won) for (let i = 0; i < ghosts.length; i++){
			if (go) ComputeGhost(context, frame, ghosts, i, pacman, curMaze);
			RenderGhost(context, frame, ghosts[i]);
		}
		if (go && !won) won = ComputePacman(pacman, curMaze, curPellets, ghosts);
		RenderPacman(context, frame, pacman);
	}
}