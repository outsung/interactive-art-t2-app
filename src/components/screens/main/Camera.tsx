import React from 'react';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { color } from '../../../constants';

import { Text } from '../../ui/Texts';
import BackgroundCamera from '../../templates/BackgroundCamera';

export const CameraScreenOptions: BottomTabNavigationOptions = {
  tabBarIcon: ({ focused }) => (
    <MaterialCommunityIcons
      name="camera"
      size={18}
      color={focused ? color.mainColor : color.black}
    />
  ),
  tabBarLabel: ({ focused }) => (
    <Text
      style={{
        color: focused ? color.mainColor : color.black,
        fontSize: 14,
      }}
    >
      카메라
    </Text>
  ),
};
export type CameraScreenParams = undefined;
export default function CameraScreen() {
  return <BackgroundCamera contants={<></>} />;
}

const cameraScreenConstants = {
  title: '카메라',
  description: '여기는 컴포넌트 테스트를 할 수 있는 화면입니다!',
  information: '실제 어플에서는 테스트 화면이 제외됩니다.',
};
