// Game setup
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game variables
let isGameRunning = true;

// Main game loop
function gameLoop() {
  if (!isGameRunning) return;

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Example game action: drawing a simple red rectangle as the player
  ctx.fillStyle = 'red';
  ctx.fillRect(100, 100, 50, 50); // Change this to represent player or game elements

  // Call game loop again
  requestAnimationFrame(gameLoop);
}

// Start the game
gameLoop();
