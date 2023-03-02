let pacmanApp = new Application("Pacman", "Resources/PacmanIcon.png", true, 28 * renderScale + "px", "calc(" + 36 * renderScale + "px + 1.5em)",
function(args) {
	let window = this;
	let canvas = document.createElement("canvas");
	canvas.width = 28 * renderScale;
	canvas.height = 36 * renderScale;
	window.windowContent.appendChild(canvas);
	let context = canvas.getContext("2d");
	context.imageSmoothingEnabled = false;

	let frame;
	let curMaze;
	let curPellets;
	let ghosts;
	let pacman;
	let go;
	Restart(args[0]);

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
		window.windowContent.onmousedown = () => { 
			go = true; 
			frame = 0; 
			window.windowContent.onmousedown = null; 
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
});