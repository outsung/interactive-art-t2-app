import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { color } from '../../../constants';

import { Text } from '../Texts';

import { TextButtonProp, IconButtonProp } from './type';

export function TextButton({ title, titleStyle, ...props }: TextButtonProp) {
  return (
    <TouchableOpacity
      {...props}
      style={[
        {
          paddingHorizontal: 16,
          paddingVertical: 8,
          borderRadius: 10,
          backgroundColor: color.mainColor,
        },
        props.style,
      ]}
      activeOpacity={0.7}
    >
      <Text
        style={{
          color: color.white,
          fontSize: 16,
          ...titleStyle,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export function IconButton({ name, iconStyle, size = 32, ...props }: IconButtonProp) {
  return (
    <TouchableOpacity
      {...props}
      style={[
        { justifyContent: 'center', alignItems: 'center', width: size * 1.5, height: size * 1.5 },
        props.style,
      ]}
      activeOpacity={0.7}
    >
      <MaterialCommunityIcons style={[iconStyle]} size={size} color={color.white} name={name} />
    </TouchableOpacity>
  );
}
