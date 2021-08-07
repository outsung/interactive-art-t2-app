import React, { useState } from 'react';
import { View } from 'react-native';

import { AbsoluteFullScreen } from '../../ui/Screens';
import { IconButton } from '../../ui/Buttons';

import { ControllerProps } from './type';

export function ControllerForVision({ onChangeType, onStart, onEnd }: ControllerProps) {
  const [isStart, setIsStart] = useState(false);
  return (
    <AbsoluteFullScreen>
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <View
          style={{
            paddingHorizontal: 8,
            height: 150,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <IconButton
            style={{
              padding: 4,
              borderRadius: 32,
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
            }}
            onPress={() => {}}
            name="cog"
            iconStyle={{ transform: [{ rotate: '90deg' }] }}
          />

          <IconButton
            style={{
              padding: 4,
              borderRadius: 60,
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
            }}
            onPress={() => {
              setIsStart(!isStart);
              if (!isStart) {
                onStart();
              } else {
                onEnd();
              }
            }}
            name="play"
            size={60}
          />

          <IconButton
            style={{
              padding: 4,
              borderRadius: 32,
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
            }}
            onPress={onChangeType}
            name="autorenew"
            iconStyle={{ transform: [{ rotate: '90deg' }] }}
          />
        </View>
      </View>
    </AbsoluteFullScreen>
  );
}

/*
<View
    style={{
    height: 50 + expo.statusBarHeight,
    paddingTop: expo.statusBarHeight,
    flexDirection: 'row',
    }}
>
    <IconButton
    style={{
        padding: 4,
        borderRadius: 32,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    }}
    name="cog"
    iconStyle={{ transform: [{ rotate: '90deg' }] }}
    />
</View>

*/
