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
    //var code = Blockly.Javascript.workspaceToCode(workspace);
    codeElm.innerText = code;
    codeElm.classList.remove('prettyprinted');
    PR.prettyPrint();
  }
  catch (e) {
    codeElm.innerText = e+"\n\nPlease (don't yet) report this issue to Hannah. (I know)";
    codeElm.style.color = 'red';
  }
  /*const lineNums = document.getElementById('blocklyCodeNums');
  lineNums.innerText = '';
  const temp = code.split('\n');
  //temp.pop();
  temp.forEach(function(_, i) {
    lineNums.innerText += (i+1) + '\n';
  });*/
  /*const lineNums = document.getElementById('blocklyCodeNums');
  const lastNum = document.getElementById('blocklyCodeNums').innerText.split('\n').length;
  lineNums.innerText = '';
  for (var i = 1; i < lastNum; i++) {
    lineNums.innerText += (i+1)+'\n';
  }*/
}
workspace.addChangeListener(myUpdateFunction);
onresize();
Blockly.svgResize(workspace);
/*const lineNums = document.getElementById('blocklyCodeNums');
lineNums.innerText += "1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n";
lineNums.innerText += "11\n12\n13\n14\n15\n16\n17\n18\n19\n20\n";
lineNums.innerText += "21\n22\n23\n24\n25\n26\n27\n28\n29\n30\n";
lineNums.innerText += "31\n32\n33\n34\n35\n36\n37\n38\n39\n40\n";
lineNums.innerText += "41\n42\n43\n44\n45\n46\n47\n48\n49\n50";*/

function myFunction() {
  let codeElm = document.getElementById('blocklyCode')

  /* Select the text field 
  codeElm.select();
  codeElm.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(codeElm.innerText);

  /* Alert the copied text 
  alert("Copied the text: " + codeElm.innerText);/**/
}