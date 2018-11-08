/**
 * 对样式的处理
 */
exports.handleStyle = function(option, modules = false) {
  const basicOptions = {
    test: /\.(css|less)$/,
    use: [
      require.resolve('style-loader'),
      {
        loader: require.resolve('css-loader'),
        options: {
          importLoaders: 1,
          modules,
          localIdentName: '[hash:base64:4]'
        }
      },
      require.resolve('postcss-loader'),
      {
        loader: require.resolve('less-loader'),
        options: {
          // modifyVars: {
          //   '@primary-color': '#32bba4',
          //   '@font-family-no-number': '-apple-system, SF UI Text, Arial, Microsoft YaHei, sans-serif;'
          // }
          javascriptEnabled: true
        }
      }
    ]
  };

  return Object.assign(basicOptions, option);
};
