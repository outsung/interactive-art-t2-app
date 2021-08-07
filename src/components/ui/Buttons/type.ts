import { TouchableOpacityProps, TextStyle } from 'react-native';
import { IconSet } from '../../../types/string';

export interface TextButtonProp extends TouchableOpacityProps {
  title: string;
  titleStyle?: TextStyle;
  fixed?: boolean;
}

export interface IconButtonProp extends TouchableOpacityProps {
  name: IconSet;
  size?: number;
  iconStyle?: TextStyle;
  fixed?: boolean;
}
