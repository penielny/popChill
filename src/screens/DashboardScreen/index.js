import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTab from '../../tabs/HomeTab';
import DownloadTab from '../../tabs/DownloadTab';
import SettingTab from '../../tabs/SettingTab';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function DashbaordScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{
         tabBarActiveTintColor: 'gray',
         headerShown:false,
        tabBarIcon:(focused,color)=><Ionicons size={30} name="film-outline" />}} name="Explore" component={HomeTab} />
      <Tab.Screen options={{
         tabBarActiveTintColor: 'gray',
         headerShown:false,
        tabBarIcon:(focused,color)=><Ionicons size={30} name="download-outline" />}} name="Saved" component={DownloadTab} />
      <Tab.Screen options={{
         tabBarActiveTintColor: 'gray',
         headerShown:false,
        tabBarIcon:(focused,color)=><Ionicons size={30} name="construct-outline" />}} name="Settings" component={SettingTab} />
    </Tab.Navigator>

  )
}