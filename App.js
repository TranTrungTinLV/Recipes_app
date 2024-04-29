import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import SplashScreen from './src/screens/SplashScreen';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import HomeScreen from './src/screens/Home';
import SearchScreen from './src/screens/Search';
import { AntDesign } from '@expo/vector-icons';
import colors from './src/constants/colors';
const Stack = createStackNavigator();

const BackButton = (props) => {
  return (
    <Pressable onPress={props.onPress}>
      <AntDesign name="arrowleft" size={24} color="black" style={{ left: 10, }} />
    </Pressable>
  )
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffffff',
    // card: 'rgba(0, 0, 0, 0.1)',

  },
}
export default function App() {
  return (
    <NavigationContainer theme={theme}>
      {/* <SplashScreen /> */}
      <Stack.Navigator screenOptions={{ headerTitleAlign: 'center', headerShadowVisible: false }} >
        <Stack.Screen name='SplashScreen' component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Home' options={{  cardShadowEnabled: false, headerLeft: null, gestureEnabled: false }} component={HomeScreen} />
        <Stack.Screen name='Search' component={SearchScreen} options={{ headerShown: true, headerLeft: (props) => <BackButton {...props} />, gestureEnabled: false }} />
      </Stack.Navigator>

    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
