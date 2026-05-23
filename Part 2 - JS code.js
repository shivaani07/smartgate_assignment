// PIECE 1: Block Definition (What it looks like)
// ------------------------------------------------------------
 
Blockly.defineBlocksWithJsonArray([
  {
    "type": "open_gate_with_speed",
    "message0": "Open Gate with speed %1",
    "args0": [
      {
        "type": "field_number",
        "name": "SPEED",
        "value": 5,
        "min": 1,
        "max": 10
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 160,
    "tooltip": "Opens the gate at a given speed (1=slow, 10=fast)"
  }
]);
 
 
// ------------------------------------------------------------
// PIECE 2: Code Generator (What code it produces)
// ------------------------------------------------------------
 
javascript.javascriptGenerator.forBlock['open_gate_with_speed'] = function(block) {
  
  // Read the speed value the user typed into the block
  const speed = block.getFieldValue('SPEED');
 
  // Convert speed (1-10) into a delay in milliseconds
  // Speed 10 = 0ms delay (instant)
  // Speed 1  = 90ms delay (slow)
  const delayMs = (10 - speed) * 10;
 
  // This is the code that gets generated when block is used
  const code = `servo.write(90);\ndelay(${delayMs});\n`;
 
  return code;
};