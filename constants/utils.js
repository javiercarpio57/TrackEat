import { Platform, StatusBar } from 'react-native';
import { theme } from 'galio-framework';

export const StatusHeight = StatusBar.currentHeight;
export const HeaderHeight = (theme.SIZES.BASE * 3.5 + (StatusHeight || 0));
export const trackeatUrl = "http://192.168.1.19:9000/";
export const iPhoneX = () => Platform.OS === 'ios' && (height === 812 || width === 812);