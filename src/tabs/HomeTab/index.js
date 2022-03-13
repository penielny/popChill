import { View, Text, FlatList, Image, TouchableOpacity, ScrollView, TextInput, Modal, Pressable, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import tw from 'twrnc'
import { Ionicons } from '@expo/vector-icons';
import NowShowingCard from './../../components/NowShowingCard'
import EditorsChoiceCard from './../../components/EditorsCard'
import { NOW_SHOWING, EDITORS_CHOICE, BASE_URL } from '../../config'
import { useAppState } from '../../context/State';
import axios from 'axios';

import CheckBox from 'react-native-check-box'
import { useNavigation } from '@react-navigation/native';
import QualityModal from '../../components/QualityModal';


export default function HomeTab() {
  // const [modalVisible, setModalVisible] = useState(useAppState)
  const { appState, setAppState ,setSearchQuery } = useAppState()
  const navigation = useNavigation()


  return (
    <ScrollView style={tw`flex-1`}>
      <View style={tw`bg-white pt-4`}>
        <View style={tw`flex-row bg-gray-200 mx-3 rounded-xl items-center px-3`}>
          <Ionicons name={"search"} size={20} style={tw`text-gray-400`} />
          <TextInput value={appState.searchQuery} onChangeText={(text) => setSearchQuery(text)} placeholder="Search movie" style={tw`flex-1 p-4`} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Search')
            }}
          >
            <Ionicons name="chevron-forward" size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={tw`bg-white px-5 py-5`}>
        <View style={tw`flex-row`}>
          <Text style={tw`font-bold text-xl`}>Now</Text>
          <Text style={tw` text-xl`}> Showing</Text>
        </View>
      </View>

      <View style={tw`flex-1 bg-white`}>
        <FlatList
          data={appState.nowShowing}
          horizontal={true}
          keyExtractor={(item, key) => key}
          showsHorizontalScrollIndicator={false}
          renderItem={(item, index) => <NowShowingCard data={item.item} index={index} />}
        />
      </View>
      <View style={tw`bg-white px-5 pt-10`}>
        <View style={tw`flex-row`}>
          <Text style={tw`font-bold text-xl`}>Editors</Text>
          <Text style={tw` text-xl`}> Choice</Text>
        </View>
      </View>
      <View style={tw`flex-1 bg-white px-3`}>
        <FlatList
          data={EDITORS_CHOICE}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, key) => key}
          renderItem={(item, index) => <EditorsChoiceCard data={item.item} index={index} />}
        />
      </View>
      <QualityModal />
    </ScrollView>
  )
}




