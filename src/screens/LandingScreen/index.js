import { View, Text, Image, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import tw from 'twrnc'
import { SafeAreaView } from 'react-native-safe-area-context'
import logo from './../../../assets/icon.png';
import { useAppState } from '../../context/State';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function LandingScreen() {
  const { appState, setAppState } = useAppState()
  const navigation = useNavigation()

  // useEffect(() => {
  //   if (appState.nowShowing.length > 0) {
  //     navigation.navigate("Home")
  //   }
  // }, [appState.nowShowing])


  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>

      <View style={tw`flex-1 items-center justify-center w-full`}>
        <View style={tw`flex-1 items-center justify-center`}>
          <Image source={logo} style={tw`w-100 h-100`} />
          {appState.nowShowing.length <= 0 ? 
          <View style={tw`bg-gray-200 p-5 rounded-full`}>
            <ActivityIndicator size={40} />
          </View> :
            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              style={tw`bg-gray-200 p-5 rounded-full`}>
              <Ionicons name="chevron-forward" color="black" style={tw`font-bold`}/>
            </TouchableOpacity>}
        </View>
        <View style={tw`flex-row items-center justify-center my-2`}>
          <Text style={tw`text-center text-gray-500`}>Developed by </Text>
          <Text style={tw`text-center font-bold`}>Peniel 👐</Text>
        </View>
        <Text style={tw`text-center font-bold text-gray-500 text-xs`}>DREAMSOFT TECH. (+233 578 567 316)</Text>
      </View>
    </SafeAreaView>
  )
}