const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Filtrar SVG, mas manter .ttf e outras extensões
// config.resolver.assetExts = config.resolver.assetExts.filter(ext => ext !== 'svg');
config.resolver.assetExts.push('ttf');

// // Adicionar SVG em sourceExts
// config.resolver.sourceExts = [...config.resolver.sourceExts, 'svg'];

// // Aponte para o transformer de SVG
// config.transformer = {
//   babelTransformerPath: require.resolve('react-native-svg-transformer'),
// };

module.exports = config;