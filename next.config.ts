// next.config.js
module.exports = {
  output: 'export',
  basePath: '/game-app',
  assetPrefix: '/game-app/',
  images: { unoptimized: true },
  
  // Добавьте для стабильности хэшей
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },
};