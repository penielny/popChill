import { View, Text, FlatList, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc'
import DownloadCard from '../../components/DownloadCard'
import { BASE_URL, SAVED_MOVIES } from '../../config'
import { useAppState, search_movies } from '../../context/State'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function SearchScreen() {

  const { appState, setAppState, setSearchQuery } = useAppState()

  const [isLoading, setIsLoading] = useState(false)
  const navigation = useNavigation()

  const search_movies = () => {
    setIsLoading(true)
    fetch(`${BASE_URL}/movies/${appState.searchQuery}`)
      .then((response) => response.json())
      .then(data => setAppState({ ...appState, searchresult: data }))
      .catch((error) => setAppState({ ...appState, searchresult: EDITORS_CHOICE }))
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    search_movies()
  }, [])


  return (
    <View style={tw`bg-white flex-1`}>
      <View style={tw`bg-white pt-4`}>
        <View style={tw`flex-row bg-gray-200 mx-3 rounded-xl items-center px-3`}>
          <Ionicons name={"search"} size={20} style={tw`text-gray-400`} />
          <TextInput value={appState.searchQuery} onChangeText={(text) => setSearchQuery(text)} placeholder="Search movie" style={tw`flex-1 p-4`} />
          {isLoading ?
            <ActivityIndicator />
            : <TouchableOpacity
              onPress={() => search_movies()}
            >
              <Ionicons name="chevron-forward" size={20} />
            </TouchableOpacity>}
        </View>
      </View>

      <View style={tw`bg-white px-5 py-5`}>
        <View style={tw`flex-row`}>
          <Text style={tw`font-bold text-xl`}>Search</Text>
          <Text style={tw` text-xl`}> Results</Text>
          <View style={tw`flex-1`} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={tw`flex-row items-center`}>
            <Ionicons name={"chevron-back"} size={20} style={tw`text-blue-400`} />
            <Text style={tw` text-xl text-blue-500`}> Back</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={tw`flex-1`}>

        <FlatList
          numColumns={2}
          data={appState.searchresult}
          renderItem={(item, index) => <DownloadCard data={item.item} index={index} />}
          keyExtractor={(item, index) => index}
        />

      </View>
    </View>
  )
}