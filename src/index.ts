import fs from 'fs';
import { createCanvas, loadImage } from 'canvas';

const width = 1200;
const height = 630;

const canvas = createCanvas(width, height);
const context = canvas.getContext('2d');

context.fillStyle = '#000';
context.fillRect(0, 0, width, height);

context.font = 'bold 70pt Open Sans';
context.textAlign = 'center';
context.textBaseline = 'top';
context.fillStyle = '#047788';

const text = 'Hello, World!';

const textWidth = context.measureText(text).width;
context.fillRect(600 - textWidth / 2 - 10, 170 - 5, textWidth + 20, 120);
context.fillStyle = '#fff';
context.fillText(text, 600, 170);

context.fillStyle = '#fff';
context.font = 'bold 30pt Open sans';
context.fillText('voib.jesusbossa.dev', 600, 530);

loadImage('./src/assets/B.svg').then((image) => {
  context.drawImage(image, 20, 530, 65, 85);
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync('./test.png', buffer);
});
