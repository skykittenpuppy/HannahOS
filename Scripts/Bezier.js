let bezierApp = new Application("Bézier", "Resources/BezierIcon.png", true, "32em", "33.5em",
function() {
	let win = this
	let canvas = document.createElement("canvas");
	canvas.width = 1000;
	canvas.height = 1000;
	win.windowContent.appendChild(canvas);
	let context = canvas.getContext("2d");
	context.imageSmoothingEnabled = false;

	let curPoint = undefined;
	let points = [
		{x: 10, y: 10, c: 0xFF0000}, 
		{x: 10, y:990, c: 0xFFFF00}, 
		{x:500, y: 10, c: 0x00FF00}, 
		{x:990, y:990, c: 0x00FFFF},
		{x:990, y: 10, c: 0x0000FF},
	]
	RecalcCurve(context, points, curPoint);

	document.onmousedown = (e) => {
		if (curPoint != undefined) { 
			if (e.button == 2){
				points.splice(curPoint, 1);
			}
			curPoint = undefined; 
			RecalcCurve(context, points, curPoint);
		}
		else {
			if (e.button == 0){
				let p = getMousePosInContent(win.windowContent, e);
				if (p == null) return;
				let best = {point: null, dist: 1000000};
				for (let i = 0; i < points.length; i++){
					let sqrDist = ((p.x-points[i].x) * (p.x-points[i].x)) + ((p.y-points[i].y) * (p.y-points[i].y));
					if (sqrDist < best.dist){
						best.point = i;
						best.dist = sqrDist;
					}
				}
				curPoint = best.point;
			} else if (e.button == 2){
				let p = getMousePosInContent(win.windowContent, e);
				if (p == null) return;
				p.c = 0xFFFFFF;
				points.push(p);
				RecalcCurve(context, points, curPoint);
			}
		}
	}
	document.onmousemove = (e) => {
		if (curPoint == undefined) return;
		let p = getMousePosInContent(win.windowContent, e);
		if (p != null) {
			p.c = points[curPoint].c;
			points[curPoint] = p;
		}
		RecalcCurve(context, points, curPoint);
	}
});