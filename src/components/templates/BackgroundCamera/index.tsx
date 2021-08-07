import React, { useEffect, useState, useRef } from 'react';
import { View, StatusBar } from 'react-native';
import { Camera } from 'expo-camera';

import { AbsoluteFullScreen } from '../../ui/Screens';
import { Title, Text } from '../../ui/Texts';
import BasicCenter from '../BasicCenter';

import { BackgroundCameraProps } from './type';
import { color } from '../../../constants';

import { ControllerForVision } from './Controller';

// 이제 찍는걸 매번 가져와서 api 실리게 하는 ?
export default function BackgroundCamera({ contants }: BackgroundCameraProps) {
  const ref = useRef<Camera>(null);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [type, setType] = useState<'back' | 'front'>(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return (
      <BasicCenter
        contants={
          <>
            <Title style={{ color: color.mainColor }}>
              {backgroundCameraConstants.isNotGrantedTitle}
            </Title>
            <View style={{ marginTop: 8 }}>
              <Text>{backgroundCameraConstants.isNotGrantedText}</Text>
            </View>
          </>
        }
      />
    );
  }

  const getImage = () => {
    (async () => {
      // console.log()
      const camera = ref.current;
      if (camera) {
        const photo = await camera.takePictureAsync();
        console.log({ getImage: JSON.stringify(photo) });
      }
    })();
  };

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <AbsoluteFullScreen>
        <Camera ref={ref} style={{ flex: 1 }} type={type}>
          <ControllerForVision
            onStart={getImage}
            onEnd={() => {}}
            onChangeType={() => setType((prev) => (prev === 'back' ? 'front' : 'back'))}
          />
          {contants}
        </Camera>
      </AbsoluteFullScreen>
    </>
  );
}

const backgroundCameraConstants = {
  isNotGrantedTitle: '카메라에 접근 할 수 없습니다.',
  isNotGrantedText: '기기의 환경설정에서 카메라 접근 권한을 허용해주세요.',
};
