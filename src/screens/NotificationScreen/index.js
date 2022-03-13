import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import DownloadCard from '../../components/DownloadCard'
import { SAVED_MOVIES } from '../../config'
import { useAppState } from '../../context/State'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import NotificationCard from '../../components/NotificationCard'


export default function NotificationScreen() {

  const { appState } = useAppState()
  const navigation = useNavigation()


  return (
    <View style={tw`bg-white flex-1`}>
      <View style={tw`bg-white px-5 py-5`}>
        <View style={tw`flex-row`}>
          <Text style={tw`font-bold text-xl`}>Recent</Text>
          <Text style={tw` text-xl`}> Notifications</Text>
          <View style={tw`flex-1`} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={tw`flex-row items-center`}>
            <Ionicons name={"chevron-back"} size={20} style={tw`text-blue-400`} />
            <Text style={tw` text-xl text-blue-500`}> Back</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={tw`flex-1 p-3`}>
        <FlatList
          data={appState.notifications}
          renderItem={(item, index) => <NotificationCard data={item.item} key={index} />}
        />
      </View>
    </View>
  )
}