import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashbaordScreen from './src/screens/DashboardScreen';
import HeaderBar from './src/components/HeaderBar';
import { StateProvider } from './src/context/State';
import PlayerScreen from './src/screens/PlayerScreen';
import LandingScreen from './src/screens/LandingScreen';
import SearchScreen from './src/screens/Searchscreen';
import NotificationScreen from './src/screens/NotificationScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <StateProvider>
      <NavigationContainer>
        <Stack.Navigator
        >
          <Stack.Screen
           name="Landing" component={LandingScreen} options={{ headerShown:false,}} />
          <Stack.Screen
           name="Home" component={DashbaordScreen} options={{headerShown:true,header:()=><HeaderBar/>}} />
          <Stack.Screen
           name="Player" component={PlayerScreen} options={{ headerShown:false,}} />
          <Stack.Screen
           name="Search" component={SearchScreen} options={{headerShown:true,header:()=><HeaderBar/>}}/>
           <Stack.Screen
           name="Notification" component={NotificationScreen} options={{headerShown:true,header:()=><HeaderBar/>}}/>
        </Stack.Navigator>
        
      </NavigationContainer>
    </StateProvider>
  );
}