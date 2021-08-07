import React from 'react';
import { SafeAreaView, KeyboardAvoidingView, ScrollView, StyleSheet, View } from 'react-native';

import { color } from '../../../constants';

import { ScreenProps, ContentsScreenProps, AbsoluteFullScreenProps } from './type';

export function Screen({ children, style }: ScreenProps) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: color.white,
        ...style,
      }}
    >
      {children}
    </SafeAreaView>
  );
}

export function ContentsScreen({ children, isScroll = false, ...props }: ContentsScreenProps) {
  return (
    <KeyboardAvoidingView {...props}>
      {isScroll ? (
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}>
          {children}
        </ScrollView>
      ) : (
        <>{children}</>
      )}
    </KeyboardAvoidingView>
  );
}

export function AbsoluteFullScreen({ children }: AbsoluteFullScreenProps) {
  return <View style={StyleSheet.absoluteFillObject}>{children}</View>;
}
