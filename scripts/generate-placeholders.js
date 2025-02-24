const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Configuration for the images
const config = {
  width: 1200,
  height: 800,
  images: [
    {
      name: 'ai-ecommerce-analytics',
      colors: ['#2E3192', '#1BFFFF'],
      pattern: 'circuit'
    },
    {
      name: 'ai-design-generation',
      colors: ['#8E2DE2', '#4A00E0'],
      pattern: 'dots'
    },
    {
      name: 'ai-workflow-automation',
      colors: ['#00C9FF', '#92FE9D'],
      pattern: 'flow'
    },
    {
      name: 'ai-data-visualization',
      colors: ['#F953C6', '#B91D73'],
      pattern: 'grid'
    },
    {
      name: 'ai-content-intelligence',
      colors: ['#7F00FF', '#E100FF'],
      pattern: 'neural'
    },
    {
      name: 'ai-social-networking',
      colors: ['#11998E', '#38EF7D'],
      pattern: 'connections'
    }
  ]
};

// Create the images directory if it doesn't exist
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Function to generate a gradient background
function drawGradient(ctx, colors) {
  const gradient = ctx.createLinearGradient(0, 0, config.width, config.height);
  gradient.addColorStop(0, colors[0]);
  gradient.addColorStop(1, colors[1]);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, config.width, config.height);
}

// Function to add pattern overlay
function drawPattern(ctx, pattern, colors) {
  ctx.globalAlpha = 0.1;
  ctx.strokeStyle = '#FFFFFF';
  ctx.lineWidth = 2;

  switch (pattern) {
    case 'circuit':
      // Draw circuit-like pattern
      for (let i = 0; i < 20; i++) {
        const x = Math.random() * config.width;
        const y = Math.random() * config.height;
        drawCircuitPattern(ctx, x, y);
      }
      break;
    case 'dots':
      // Draw dot grid pattern
      for (let i = 0; i < config.width; i += 50) {
        for (let j = 0; j < config.height; j += 50) {
          ctx.beginPath();
          ctx.arc(i, j, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      break;
    case 'flow':
      // Draw flowing lines
      for (let i = 0; i < 10; i++) {
        drawFlowingLine(ctx);
      }
      break;
    case 'grid':
      // Draw data grid pattern
      drawGridPattern(ctx);
      break;
    case 'neural':
      // Draw neural network pattern
      drawNeuralPattern(ctx);
      break;
    case 'connections':
      // Draw connection nodes
      drawConnectionPattern(ctx);
      break;
  }
  ctx.globalAlpha = 1;
}

// Helper function to draw circuit pattern
function drawCircuitPattern(ctx, x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  for (let i = 0; i < 4; i++) {
    const newX = x + (Math.random() - 0.5) * 200;
    const newY = y + (Math.random() - 0.5) * 200;
    ctx.lineTo(newX, newY);
  }
  ctx.stroke();
}

// Helper function to draw flowing line
function drawFlowingLine(ctx) {
  ctx.beginPath();
  ctx.moveTo(0, Math.random() * config.height);
  for (let i = 0; i < config.width; i += 50) {
    ctx.quadraticCurveTo(
      i, Math.random() * config.height,
      i + 50, Math.random() * config.height
    );
  }
  ctx.stroke();
}

// Helper function to draw grid pattern
function drawGridPattern(ctx) {
  for (let i = 0; i < config.width; i += 100) {
    for (let j = 0; j < config.height; j += 100) {
      ctx.strokeRect(i, j, 100, 100);
      if (Math.random() > 0.5) {
        ctx.fillRect(i + 40, j + 40, 20, 20);
      }
    }
  }
}

// Helper function to draw neural pattern
function drawNeuralPattern(ctx) {
  const nodes = [];
  for (let i = 0; i < 20; i++) {
    nodes.push({
      x: Math.random() * config.width,
      y: Math.random() * config.height
    });
  }

  nodes.forEach(node => {
    ctx.beginPath();
    ctx.arc(node.x, node.y, 5, 0, Math.PI * 2);
    ctx.fill();

    nodes.forEach(otherNode => {
      if (Math.random() > 0.7) {
        ctx.beginPath();
        ctx.moveTo(node.x, node.y);
        ctx.lineTo(otherNode.x, otherNode.y);
        ctx.stroke();
      }
    });
  });
}

// Helper function to draw connection pattern
function drawConnectionPattern(ctx) {
  const points = [];
  for (let i = 0; i < 15; i++) {
    points.push({
      x: Math.random() * config.width,
      y: Math.random() * config.height,
      connections: Math.floor(Math.random() * 3) + 2
    });
  }

  points.forEach(point => {
    ctx.beginPath();
    ctx.arc(point.x, point.y, 8, 0, Math.PI * 2);
    ctx.fill();

    for (let i = 0; i < point.connections; i++) {
      const otherPoint = points[Math.floor(Math.random() * points.length)];
      ctx.beginPath();
      ctx.moveTo(point.x, point.y);
      ctx.lineTo(otherPoint.x, otherPoint.y);
      ctx.stroke();
    }
  });
}

// Generate all images
config.images.forEach(image => {
  const canvas = createCanvas(config.width, config.height);
  const ctx = canvas.getContext('2d');

  // Draw gradient background
  drawGradient(ctx, image.colors);

  // Add pattern overlay
  drawPattern(ctx, image.pattern, image.colors);

  // Save the image
  const buffer = canvas.toBuffer('image/jpeg', { quality: 0.9 });
  fs.writeFileSync(path.join(imagesDir, `${image.name}.jpg`), buffer);
});

console.log('Generated placeholder images successfully!'); 