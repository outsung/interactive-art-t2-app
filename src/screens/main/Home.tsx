import React, { useEffect } from 'react';
import { View, Alert, Linking } from 'react-native';
// import { useRecoilState } from 'recoil';

import Socket from '../../utils/socket';

// import { CounterAtom } from '../../recoils/atoms/counter';

import Color from '../../constants/color';
import { Title, Text } from '../../components/Texts';
import { TextButton } from '../../components/Buttons';

export type HomeScreenParams = undefined;
export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Title
        style={{
          color: Color.mainColor,
        }}
      >{`아래 버튼을 클릭 하시면 풍등이 날라갑니다.`}</Title>
      <TextButton
        title={'Start !'}
        style={{
          marginTop: 20,
          height: 60,
          justifyContent: 'center',
          alignContent: 'center',
        }}
        titleStyle={{ fontWeight: 'bold', fontSize: 30 }}
        onPress={() => Socket.instance?.emit('animationStart')}
      />

      <Text
        style={{
          marginTop: 25,
          color: Color.gray,
        }}
      >
        {'아래 링크에서 확인 가능합니다.'}
      </Text>
      <TextButton
        title={'https://outsung.github.io/interactive-art-t2/'}
        style={{
          marginTop: 10,
        }}
        onPress={() => Linking.openURL('https://outsung.github.io/interactive-art-t2/')}
      />
    </View>
  );
}
