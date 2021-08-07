import { ViewProps, ViewStyle } from 'react-native';

export interface ScreenProps {
  children: JSX.Element | JSX.Element[];
  style?: ViewStyle;
}

export interface ContentsScreenProps extends ViewProps {
  children: JSX.Element;
  isScroll?: boolean;
}

export interface AbsoluteFullScreenProps {
  children: JSX.Element;
}
