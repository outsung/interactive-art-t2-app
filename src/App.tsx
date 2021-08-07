import React, { useEffect } from 'react';

import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { RecoilRoot } from 'recoil';

import Socket from './utils/socket';

import Router from './routers/Router';

export default () => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    Socket.init();
    console.log('connect!', Socket.instance?.connected);
    Socket.instance?.onAny((...props) => console.log('on', { props }));
    Socket.instance?.on('connect_error', (err) => {
      console.log('connect_error!!', err.name, err.message);
    });

    // return () => Socket.disconnect();
  }, []);

  return (
    <RecoilRoot>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Router />
    </RecoilRoot>
  );
};
