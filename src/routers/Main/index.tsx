import React from 'react';
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Color from '../../constants/color';
import { Text } from '../../components/Texts';

import { BottomTabNavigatorGenerator } from '../../types/navigation';
import { AppStackNavigationProps } from '../Router';
import HomeScreen, { HomeScreenParams } from '../../screens/main/Home';

export type MainTabNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<MainTabParamList>,
  AppStackNavigationProps
>;
export type MainTabParamList = {
  Home: HomeScreenParams;
};

const { BottomTab, screens } = BottomTabNavigatorGenerator<MainTabParamList>({
  Home: {
    component: HomeScreen,
    options: {
      tabBarIcon: ({ focused }) => (
        <MaterialCommunityIcons
          name={'home'}
          size={18}
          color={focused ? Color.mainColor : Color.black}
        />
      ),
      tabBarLabel: ({ focused }) => (
        <Text
          style={{
            color: focused ? Color.mainColor : Color.black,
            fontSize: 14,
          }}
        >
          홈
        </Text>
      ),
    },
  },
});

export default function MainNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="Home">
      {Object.entries(screens).map(([key, { component, options }], i) => (
        <BottomTab.Screen key={i} name={key} component={component} options={options} />
      ))}
    </BottomTab.Navigator>
  );
}
