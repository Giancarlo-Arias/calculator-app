import { View, Text, Platform } from 'react-native'
import { Slot } from 'expo-router'
import { useFonts } from 'expo-font';
import { Colors } from '@/constants/Colors';
import { StatusBar } from 'expo-status-bar';
import { globalStyles } from '@/styles/global-styles';

import * as NavigationBar from 'expo-navigation-bar';

NavigationBar.setBackgroundColorAsync('black');

const isAndroid = Platform.OS === 'android';

if (isAndroid) { // Solo para Android 
  NavigationBar.setBackgroundColorAsync('black');
}
const RootLayout = () => {

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) { 
    return null;
  }


  return (
    <View style={ globalStyles.background }>
      <Text>RootLayout</Text>
      <Slot/>

      <StatusBar style="light" />
    </View>
  )
}

export default RootLayout;