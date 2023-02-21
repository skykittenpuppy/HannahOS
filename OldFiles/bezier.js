function startBezier(){
	let win = newWindow("Bezier Curves", 500, 520);
	win.content.classList += " bezier"
	let canvas = document.createElement("canvas");
	canvas.width = 1000;
	canvas.height = 1000;
	win.content.appendChild(canvas);
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
				let p = getMousePosInContent(win.content, e);
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
				let p = getMousePosInContent(win.content, e);
				if (p == null) return;
				p.c = 0xFFFFFF;
				points.push(p);
				RecalcCurve(context, points, curPoint);
			}
		}
	}
	document.onmousemove = (e) => {
		if (curPoint == undefined) return;
		let p = getMousePosInContent(win.content, e);
		if (p != null) {
			p.c = points[curPoint].c;
			points[curPoint] = p;
		}
		RecalcCurve(context, points, curPoint);
	}
}
function getMousePosInContent(content, e){
	let rect = content.getBoundingClientRect();
	if (e.clientX < rect.left || e.clientX > rect.left + rect.width ||
		e.clientY < rect.top || e.clientY > rect.top + rect.height) return null;
	let remapX = (e.clientX - rect.left) / rect.width * 1000;
	let remapY = (e.clientY - rect.top) / rect.height * 1000;
	return {
		x: remapX,
		y: remapY,
	}
}
function RecalcCurve(context, points, curPoint){
	context.clearRect(0, 0, 1000, 1000);
	context.lineWidth = 5;
	context.strokeStyle = "black";
	context.beginPath();
	for (let i = 0; i < points.length; i++){
		context.lineTo(points[i].x, points[i].y);
	}
	context.stroke();
	if (curPoint != undefined){
		context.fillStyle = "white";
		context.beginPath();
		context.arc(points[curPoint].x, points[curPoint].y, 15, 0, 7);
		context.fill();
	}
	for (let i = 0; i < points.length; i++){
		context.fillStyle = "#"+("000000"+points[i].c.toString(16)).slice(-6);
		context.beginPath();
		context.arc(points[i].x, points[i].y, 10, 0, 7);
		context.fill();
	}
	for (let i = 0; i < 1; i+= 0.0005){
		let p = Bezier(i, points);
		context.fillStyle = "#"+("000000"+p.c.toString(16)).slice(-6);
		context.beginPath();
		context.arc(p.x, p.y, 3, 0, 7);
		context.fill();
	}
}
function Bezier(t, points){
	if (points.length == 2) {
		return LerpCPoint(t, points[0], points[1]);
	} else {
		let newPoints = [];
		for (let i = 0; i < points.length-1; i++){
			newPoints.push(LerpCPoint(t, points[i], points[i+1]));
		}
		return Bezier(t, newPoints);
	}
}
function LerpCPoint(t, a, b){
	return {
		x: Lerp1d(t, a.x, b.x), 
		y: Lerp1d(t, a.y, b.y),
		c: LerpCol(t, a.c, b.c),
	}
}
function Lerp1d (t, a, b){
	return a + (b - a) * t;
}
function LerpCol(t, a, b){
	let R = (Lerp1d(t, (a & 0xff0000) >> 16, (b & 0xff0000) >> 16) << 16);
	let G = (Lerp1d(t, (a & 0x00ff00) >> 08, (b & 0x00ff00) >> 08) << 08);
	let B = (Lerp1d(t, (a & 0x0000ff) >> 00, (b & 0x0000ff) >> 00) << 00);
	return R+G+B;
}