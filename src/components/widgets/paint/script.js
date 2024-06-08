const canvas = document.getElementById('canvas');
const pencilBtn = document.getElementById('pencil');
const eraserBtn = document.getElementById('eraser');
const lineBtn = document.getElementById('line');
const rectangleBtn = document.getElementById('rectangle');
const ellipseBtn = document.getElementById('ellipse');
const textBtn = document.getElementById('text');
const clearBtn = document.getElementById('clear');
const undoBtn = document.getElementById('undo');
const redoBtn = document.getElementById('redo');
const colorPicker = document.getElementById('colorPicker');
const lineWidth = document.getElementById('lineWidth');
const fontSelect = document.getElementById('fontSelect');
const fontSize = document.getElementById('fontSize');
const saveBtn = document.getElementById('save');

const ctx = canvas.getContext('2d');
const tools = document.querySelectorAll('.tool');

let drawing = false;
let tool = 'pencil';
let startX, startY;
let currentColor = '#000000';
let currentLineWidth = 1;
let savedImageData;
let undoStack = [];
let redoStack = [];
let isMoving = false;
let selectedShape = null;
colorPicker.value = '#000000';
lineWidth.value = 1;
const cursorIndicator = document.createElement('div');
cursorIndicator.classList.add('cursor-indicator');
document.body.appendChild(cursorIndicator);
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseleave', stopDrawing);
canvas.addEventListener('mousemove', updateCursor);
tools.forEach(toolBtn => {
 toolBtn.addEventListener('click', () => {
  tools.forEach(btn => btn.classList.remove('active'));
  toolBtn.classList.add('active');
  tool = toolBtn.id;
 });
});
clearBtn.addEventListener('click', clearCanvas);
undoBtn.addEventListener('click', undo);
redoBtn.addEventListener('click', redo);
colorPicker.addEventListener('change', (e) => currentColor = e.target.value);
lineWidth.addEventListener('change', (e) => currentLineWidth = e.target.value);
saveBtn.addEventListener('click', saveCanvas);

function startDrawing(e) {
 drawing = true;
 startX = e.offsetX;
 startY = e.offsetY;
 if (tool !== 'pencil' && tool !== 'eraser') savedImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
 ctx.beginPath();
 ctx.moveTo(startX, startY);
}

function stopDrawing(e) {
 drawing = false;
 if (tool !== 'pencil' && tool !== 'eraser') {
  draw(e);
  saveState();
 }
 ctx.beginPath();
}

function draw(e) {
 if (!drawing) {
  updateCursor(e);
  return;
 }
 ctx.globalCompositeOperation = tool === 'eraser' ? 'destination-out' : 'source-over';
 if (tool === 'pencil' || tool === 'eraser') {
  ctx.lineWidth = currentLineWidth;
  ctx.lineCap = 'round';
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
 } else {
  ctx.putImageData(savedImageData, 0, 0);
  ctx.lineWidth = currentLineWidth;
  ctx.lineCap = 'round';
  ctx.strokeStyle = currentColor;
  switch (tool) {
   case 'line':
    drawLine(e);
    break;
   case 'rectangle':
    drawRectangle(e);
    break;
   case 'ellipse':
    drawEllipse(e);
    break;
   case 'text':
    drawText(e);
    break;
  }
 }
}

function drawLine(e) {
 ctx.beginPath();
 ctx.moveTo(startX, startY);
 ctx.lineTo(e.offsetX, e.offsetY);
 ctx.stroke();
}

function drawRectangle(e) {
 ctx.beginPath();
 ctx.rect(startX, startY, e.offsetX - startX, e.offsetY - startY);
 ctx.stroke();
}

function drawEllipse(e) {
 ctx.beginPath();
 ctx.ellipse(
  (startX + e.offsetX) / 2,
  (startY + e.offsetY) / 2,
  Math.abs(e.offsetX - startX) / 2,
  Math.abs(e.offsetY - startY) / 2,
  0,
  0,
  2 * Math.PI
 );
 ctx.stroke();
}

function drawText(e) {
 const text = prompt('Zadejte text:');
 if (text !== null) {
  ctx.font = `${fontSize.value}px ${fontSelect.value}`;
  ctx.fillStyle = currentColor;
  ctx.fillText(text, startX, startY);
  saveState();
 }
}

function clearCanvas() {
 ctx.clearRect(0, 0, canvas.width, canvas.height);
 saveState();
}

function saveCanvas() {
 const link = document.createElement('a');
 link.download = 'obrazek.png';
 link.href = canvas.toDataURL('image/png');
 link.click();
}

function saveState() {
 undoStack.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
 redoStack = [];
}

function undo() {
 if (undoStack.length > 0) {
  redoStack.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
  const restoreState = undoStack.pop();
  ctx.putImageData(restoreState, 0, 0);
 }
}

function redo() {
 if (redoStack.length > 0) {
  undoStack.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
  const restoreState = redoStack.pop();
  ctx.putImageData(restoreState, 0, 0);
 }
}

function updateCursor(e) {
 cursorIndicator.style.width = `${currentLineWidth}px`;
 cursorIndicator.style.height = `${currentLineWidth}px`;
 cursorIndicator.style.borderColor = currentColor;
 cursorIndicator.style.left = `${e.pageX}px`;
 cursorIndicator.style.top = `${e.pageY}px`;
 cursorIndicator.style.borderRadius = '50%';
 cursorIndicator.style.backgroundColor = 'transparent';
 cursorIndicator.style.display = 'block';
}

canvas.addEventListener('mouseleave', () => {
 cursorIndicator.style.display = 'none';
});
