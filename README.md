# @makinox/image-creator

A library to create images.

## Used

- Typescript

Link to [image-creator!](https://image-creator.jesusbossa.dev/)

![Image of image-creator](./src/images/preview.png)

## Example

```ts
import CreateImage from './script/creation';

CreateImage({ filePath: './test.png', extraLogo: './src/assets/B.svg' }).then((created) => console.log({ created }));
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.
