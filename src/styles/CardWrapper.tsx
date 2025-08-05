import React from 'react';
import { Platform, View, StyleSheet, ViewProps } from 'react-native';

interface Props extends ViewProps {
  children: React.ReactNode;
}

export const CardWrapper: React.FC<Props> = ({ children, style, ...rest }) => {
  return (
    <View
      style={[
        { overflow: 'visible' },
        styles.shadow,
        style
      ]}
      {...rest}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOffset: { width: 4, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      backgroundColor: '#fff',
      borderRadius: 12,
      overflow: 'visible'
    },
    android: {
      elevation: 4,
      backgroundColor: '#fff',
      borderRadius: 12,
      shadowColor: '#000',
      shadowOffset: { width: 4, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      overflow: 'visible'
    },
    default: {
      // Web
      backgroundColor: '#fff',
      borderRadius: 12,
      shadowColor: '#000',
      shadowOffset: { width: 4, height: 2 }, 
      shadowOpacity: 0.1,
      shadowRadius: 4,
      overflow: 'visible'
    },
  }) as any,
});