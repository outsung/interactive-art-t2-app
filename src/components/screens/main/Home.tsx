import React from 'react';
import { View, Linking } from 'react-native';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { color } from '../../../constants';

import { Title, Text } from '../../ui/Texts';
import { TextButton } from '../../ui/Buttons';
import BasicCenter from '../../templates/BasicCenter';

import Socket from '../../../utils/socket';

export const HomeScreenOptions: BottomTabNavigationOptions = {
  tabBarIcon: ({ focused }) => (
    <MaterialCommunityIcons name="home" size={18} color={focused ? color.mainColor : color.black} />
  ),
  tabBarLabel: ({ focused }) => (
    <Text
      style={{
        color: focused ? color.mainColor : color.black,
        fontSize: 14,
      }}
    >
      홈
    </Text>
  ),
};
export type HomeScreenParams = undefined;
export default function HomeScreen() {
  return (
    <BasicCenter
      contants={
        <>
          <Title style={{ color: color.mainColor }}>{homeScreenConstants.title}</Title>

          {/* buttons */}
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <TextButton
              title="풍등 띄우기"
              style={{
                marginRight: 5,
              }}
              titleStyle={{ fontWeight: 'bold' }}
              onPress={() => Socket.instance?.emit('animationStart')}
            />
            <TextButton
              title="풍등 띄우기"
              style={{
                marginLeft: 5,
              }}
              titleStyle={{ fontWeight: 'bold' }}
              onPress={() => Socket.instance?.emit('animationStart')}
            />
          </View>

          {/* description */}
          <View style={{ marginTop: 25 }}>
            <Text
              style={{
                color: color.gray,
              }}
            >
              {homeScreenConstants.description}
            </Text>
          </View>

          {/* link */}
          <View style={{ marginTop: 10 }}>
            <TextButton
              title="https://outsung.github.io/interactive-art-t2/"
              onPress={() => Linking.openURL('https://outsung.github.io/interactive-art-t2/')}
            />
          </View>
        </>
      }
    />
  );
}

const homeScreenConstants = {
  title: '풍등 조작 버튼',
  description: '아래 링크에서 확인 가능합니다.',
};
