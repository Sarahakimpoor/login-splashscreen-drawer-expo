import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from './Screen/LoginScreen';
import HomeScreen from './Screen/drawerScreens/HomeScreen';
import RegisterScreen from './Screen/RegisterScreen';
import DrawerNavigationRoutes from './Screen/DrawerNavigationRoutes';
import SettingsScreen from './Screen/drawerScreens/SettingScreen';
import SplashScreen from './Screen/SplashScreen';

const Stack = createNativeStackNavigator();

const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: 'Register', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="SplashScreen">
      {/* SplashScreen which will come once for 5 Seconds */}
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        // Hiding header for Splash Screen
        options={{headerShown: false}}
      />
      {/* Auth Navigator: Include Login and Signup */}
      <Stack.Screen
        name="Auth"
        component={Auth}
        options={{headerShown: false}}
      />
      {/* Navigation Drawer as a landing page */}
      <Stack.Screen
        name="DrawerNavigationRoutes"
        component={DrawerNavigationRoutes}
        // Hiding header for Navigation Drawer
        options={{headerShown: false}}
      />
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

/*<Stack.Navigator initialRouteName="">
        {/* Auth Navigator: Include Login and Signup }
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        /> */
