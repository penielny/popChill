import { View, Text } from 'react-native'
import React from 'react'
import tw from "twrnc";
import ToggleBtn from 'react-jpc-toggle-btn'
import { useAppState } from '../../context/State';
import CheckBox from 'react-native-check-box';

export default function SettingTab() {
  const { setNative, appState } = useAppState()
  const getToggleStatus = (state) => {
    console.log(state.wanted)
  }

  return (
    <View style={tw`flex-1 bg-white p-3 border-t border-gray-100`}>
      <View style={tw`bg-white  py-5`}>
        <View style={tw`flex-row`}>
          <Text style={tw`font-bold text-xl`}>Application</Text>
          <Text style={tw` text-xl`}> Settings</Text>
          <View style={tw`flex-1`} />

        </View>
      </View>
      <View style={tw`rounded border-gray-100 bg-white  p-3`}>
        <View style={tw`flex-row items-center`}>
          <Text style={tw`flex-1 text-gray-700 mb-2 `}>Use Native Player to play videos in the app.</Text>
          <CheckBox
            isChecked={appState.useNative}
            onClick={() => setNative(!appState.useNative)}
            onPress={() => setNative(!appState.useNative)}
          />
        </View>

      </View>
    </View>
  )
}

/**
 * adaptive logo 1024 x 1024 pxl
 * splash 1284 pxl x 2778 pxl
 * icon 1024 pxl x 1024 pxl 
 * favicon 48pxl x 48pxl
 * 
 */