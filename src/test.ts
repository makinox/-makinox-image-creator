import CreateImage from './script/creation';

CreateImage({ filePath: './test.png', extraLogo: './src/assets/B.svg' }).then((created) => console.log({ created }));
