import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc'
import { useAppState } from '../../context/State';
import { useNavigation } from '@react-navigation/native';

export default function DownloadCard({ data }) {
  const {appState, setAppState} = useAppState()
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {setAppState({ ...appState, selectedMovie: data, modalState: true }); navigation.navigate('Explore')}}
      style={tw`relative h-70 w-50 bg-white p-2 rounded-xl`}>
      <Image source={{ uri: data.image }} style={tw`h-full w-full rounded-xl`} />

    </TouchableOpacity>
  )

}