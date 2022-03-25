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
onresize();
Blockly.svgResize(workspace);