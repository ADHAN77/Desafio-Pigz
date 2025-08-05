import { useFonts } from 'expo-font';

export function useAppFonts() {
  const [fontsLoaded] = useFonts({
    'Poppins_400Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins_500Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
    'Poppins_600SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins_700Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
    'Roboto': require('../../assets/fonts/Roboto-VariableFont_wdth,wght.ttf'),
  });
  return fontsLoaded;
}
