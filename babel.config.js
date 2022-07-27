module.exports = { 
    presets: [
        [
          "@babel/preset-env",
          {
            useBuiltIns: "entry",
            modules: false,
            corejs: "3.6.4",
          },
        ],
    ],
    plugins: [
        '@babel/plugin-transform-runtime'
    ],
    exclude: [/core-js/],
  };