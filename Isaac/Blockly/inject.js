var blocklyContainer = document.getElementById('blocklyContainer');
var blocklyDiv = document.getElementById('blocklyDiv');
var workspace = Blockly.inject(blocklyDiv, 
  {toolbox: BlocklyToolbox,
  zoom: {controls: false,
         wheel: true,
         startScale: 1.0, 
         maxScale: 3, 
         minScale: 0.3, 
         scaleSpeed: 1.2},
  trashcan: false,});
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
  let codeElm = document.getElementById('blocklyCode')
  codeElm.style.color = null;
  try {
    var code = Blockly.Lua.workspaceToCode(workspace);
    //code = 'local moveDir = {["Up"]=0, ["Left"]=0, ["Down"]=0, ["Right"]=0}\nlocal shootDir = {["Up"]=0, ["Left"]=0, ["Down"]=0, ["Right"]=0}\nlocal background = Sprite()\n--[[temp]]\n--temp\nlocal function CreateTexture(temp)\n//comment\n\n\n\n\n\n//another'
    //
    //NOTE: Cannot get Lua formatting to function properly
    //      Avoid using comments in the code
    //      THEY WILL NOT BE PRETTIFIED CORRECTLY
    //
    codeElm.innerText = code;
    codeElm.classList.remove('prettyprinted');
    PR.prettyPrint();
  }
  catch (e) {
    codeElm.innerText = e+"\n\nPlease (don't yet) report this issue to Hannah. (I know)";
    codeElm.style.color = 'red';
  }
}
workspace.addChangeListener(myUpdateFunction);
onresize();
Blockly.svgResize(workspace);

function myFunction() {
  let codeElm = document.getElementById('blocklyCode')

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(codeElm.innerText);

  /* Alert the copied text 
  alert("Copied the text: " + codeElm.innerText);/**/
}