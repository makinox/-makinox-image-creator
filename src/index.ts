import CreateImage from './script/creation';

// './src/assets/B.svg'

CreateImage({ filePath: './test.png' }).then((created) => console.log({ created }));
