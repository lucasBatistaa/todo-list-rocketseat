import { useEffect } from 'react';

import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar';

import { Inter_400Regular, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';

import Home from './src/screens/Home';

export default function App() {
  const [loaded, error] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error])

  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <StatusBar style='light' translucent />
      <Home />
    </>
  );
}