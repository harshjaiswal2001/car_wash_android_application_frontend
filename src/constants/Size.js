import {Dimensions, Platform, PixelRatio} from 'react-native';
// import {DESIGN_WIDTH} from './AppDefines';

const DESIGN_WIDTH = 415;
export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
    Dimensions.get('window');

export function pixelNormalize(value) {
    return (SCREEN_WIDTH * value) / DESIGN_WIDTH;
}
