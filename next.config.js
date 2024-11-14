module.exports = {

  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,

  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: 'url-loader',
    });

    return config;
  },
};