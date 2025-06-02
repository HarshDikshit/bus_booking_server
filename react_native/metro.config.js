const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {withNativeWind}= require('nativewind/metro');
/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = mergeConfig(getDefaultConfig(__dirname), {
    transformer: {
        babelTransformerPath: require.resolve('react-native-svg-transformer'),
    }, resolver: {
        assetExts: getDefaultConfig(__dirname).resolver.assetExts.filter(
            ext => ext !== 'svg',
        ),
        sourceExts: [...getDefaultConfig(__dirname).resolver.sourceExts, 'svg']
    },
});

module.exports = withNativeWind(config, {input: './global.css'})