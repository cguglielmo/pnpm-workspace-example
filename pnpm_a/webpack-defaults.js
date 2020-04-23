const path = require('path');

module.exports = (env, args) => {
  console.log('mode: ' + args.mode);
  return {
    target: 'web',
    mode: args.mode,
    module: {
      rules: [{
        // # Babel
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            plugins: [
              require.resolve('@babel/plugin-transform-runtime')
            ],
            presets: [
              [require.resolve('@babel/preset-env'), {
                debug: false,
                targets: {
                  firefox: '35',
                  chrome: '40',
                  ie: '11',
                  edge: '12',
                  safari: '8'
                }
              }]
            ]
          }
        }
      }]
    }
  };
};
