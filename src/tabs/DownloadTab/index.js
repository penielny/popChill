import { View, Text,FlatList,Dimensions} from 'react-native'
import React from 'react'
import tw from 'twrnc'
import DownloadCard from '../../components/DownloadCard'
import { SAVED_MOVIES } from '../../config'
import { useAppState } from '../../context/State'


const numColumns = 2

export default function DownloadTab() {

  const { appState} = useAppState()

  return (
    <View style={tw`bg-white flex-1`}>
      <View style={tw`bg-white px-5 py-5`}>
        <View style={tw`flex-row`}>
          <Text style={tw`font-bold text-xl`}>Saved</Text>
          <Text style={tw` text-xl`}> Movies</Text>
        </View>
      </View>
      <View style={tw`flex-1`}>

        <FlatList 
        numColumns={numColumns}
        data = {appState.saved_list}
        renderItem={(item, index) => <DownloadCard data={item.item} index={index}/>}
        keyExtractor={(item, index) =>index}
        />

      </View>
    </View>
  )
}