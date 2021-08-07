import React from 'react';
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import { BottomTabNavigatorGenerator } from '../../types/navigation';
import { AppStackNavigationProps } from '../Router';
import HomeScreen, {
  HomeScreenParams,
  HomeScreenOptions,
} from '../../components/screens/main/Home';
import CameraScreen, {
  CameraScreenParams,
  CameraScreenOptions,
} from '../../components/screens/main/Camera';

export type MainTabNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<MainTabParamList>,
  AppStackNavigationProps
>;
export type MainTabParamList = {
  HomeScreen: HomeScreenParams;
  CameraScreen: CameraScreenParams;
};

const { BottomTab, screens } = BottomTabNavigatorGenerator<MainTabParamList>({
  HomeScreen: {
    component: HomeScreen,
    options: HomeScreenOptions,
  },
  CameraScreen: {
    component: CameraScreen,
    options: CameraScreenOptions,
  },
});

export default function MainNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="Home">
      {Object.entries(screens).map(([key, { component, options }]) => (
        <BottomTab.Screen key={key} name={key} component={component} options={options} />
      ))}
    </BottomTab.Navigator>
  );
}
