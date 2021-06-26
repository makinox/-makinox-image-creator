import fs from 'fs';
import { createCanvas, loadImage } from 'canvas';
import { CreateImageProps } from './creation.type';

function CreateImage({
  width = 1200,
  height = 630,
  backgroundColor = '#000',
  titleFontStyle = 'bold 70pt Open Sans',
  textAlign = 'center',
  textTitle = 'Hello, World!',
  titleFillStyle = '#047788',
  titleColor = '#fff',
  subTextColor = '#fff',
  subTextFontStyle = 'bold 30pt Open sans',
  subText = 'image-creator.jesusbossa.dev',
  extraLogo,
  filePath,
}: CreateImageProps): Promise<boolean> {
  return new Promise((resolve) => {
    try {
      const canvas = createCanvas(width, height);
      const context = canvas.getContext('2d');

      context.fillStyle = backgroundColor;
      context.fillRect(0, 0, width, height);

      context.font = titleFontStyle;
      context.textAlign = textAlign;
      context.textBaseline = 'top';
      context.fillStyle = titleFillStyle;

      const textWidth = context.measureText(textTitle).width;
      context.fillRect(600 - textWidth / 2 - 10, 170 - 5, textWidth + 20, 120);
      context.fillStyle = titleColor;
      context.fillText(textTitle, 600, 170);

      context.fillStyle = subTextColor;
      context.font = subTextFontStyle;
      context.fillText(subText, 600, 530);

      if (extraLogo) {
        loadImage(extraLogo).then((image) => {
          context.drawImage(image, 20, 530, 65, 85);
          const buffer = canvas.toBuffer('image/png');
          fs.writeFileSync(filePath, buffer);
          resolve(true);
        });
      } else {
        const buffer = canvas.toBuffer('image/png');
        fs.writeFileSync(filePath, buffer);
        resolve(true);
      }
    } catch (error) {
      console.error(error);
      resolve(false);
    }
  });
}

export default CreateImage;
