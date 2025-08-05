import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import Routes from './src/routes';
import { useAppFonts } from './src/hooks/useAppFonts';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/styles/theme';


SplashScreen.preventAutoHideAsync();

export default function App() {
  const fontsLoaded = useAppFonts();
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      if (fontsLoaded) {
        setAppIsReady(true);
      }
    }

    prepare();
  }, [fontsLoaded]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <Routes />
      </View>
    </ThemeProvider>
  );
}