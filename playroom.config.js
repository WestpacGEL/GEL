module.exports = {
  components: './packages',
  outputPath: './dist/playroom',

  // Optional:
  title: 'Westpac GEL',
  // themes: './src/themes',
  frameComponent: './playroom/frame.js',
  widths: [320, 375, 768, 1024],
  exampleCode: `
    <Button>
      Hello World!
    </Button>
  `,
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: [/node_modules/],
          use: [
            {
              loader: 'babel-loader',
            },
          ],
        },
      ],
    },
  }),
};
