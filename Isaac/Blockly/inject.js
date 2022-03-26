var blocklyContainer = document.getElementById('blocklyContainer');
var blocklyDiv = document.getElementById('blocklyDiv');
var workspace = Blockly.inject(blocklyDiv, {toolbox: BlocklyToolbox});
var onresize = function(e) {
  // Compute the absolute coordinates and dimensions of blocklyContainer.
  var element = blocklyContainer;
  var x = 0;
  var y = 0;
  do {
    x += element.offsetLeft;
    y += element.offsetTop;
    element = element.offsetParent;
  } while (element);
  // Position blocklyDiv over blocklyContainer.
  blocklyDiv.style.left = x + 'px';
  blocklyDiv.style.top = y + 'px';
  blocklyDiv.style.width = blocklyContainer.offsetWidth + 'px';
  blocklyDiv.style.height = blocklyContainer.offsetHeight + 'px';
  Blockly.svgResize(workspace);
};
window.addEventListener('resize', onresize, false);
function myUpdateFunction(e) {
  document.getElementById('blocklyCode').style.color = null;
  try {
    var code = Blockly.Lua.workspaceToCode(workspace);
    document.getElementById('blocklyCode').innerText = code;
  }
  catch (e) {
    document.getElementById('blocklyCode').innerText = e+"\n\nPlease (don't yet) report this issue to Hannah. (I know)";
    document.getElementById('blocklyCode').style.color = 'red';
  }
  /*const lineNums = document.getElementById('blocklyCodeNums');
  lineNums.innerText = '';
  const temp = code.split('\n');
  //temp.pop();
  temp.forEach(function(_, i) {
    lineNums.innerText += (i+1) + '\n';
  });*/
}
workspace.addChangeListener(myUpdateFunction);
onresize();
Blockly.svgResize(workspace);
/*const lineNums = document.getElementById('blocklyCodeNums');
lineNums.innerText = '';
for (var i = 0; i < 1000; i++) {
  lineNums.innerText += (i+1) + '\n';
}*/