import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { DEFAULT_PROFILE } from '../../config'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import logo from './../../../assets/icon.png'

export default function HeaderBar() {
    const navigation  = useNavigation();
    return (
        <>
            <View style={tw`p-5 bg-white mt-5 w-full flex-row items-center justify-between mr-3`}>
                <View style={tw`flex-row items-center`}>
                    <Image source={logo} style={tw`h-15 w-15 rounded-full p-5 border-gray-100 border`} />
                    <View style={tw`ml-2`}>
                        <Text style={tw`font-bold`}>Hello {Math.floor(100000 + Math.random() * 900000)} 👋</Text>
                        <Text>Enjoy your favourite movies!</Text>
                    </View>
                </View>
                <TouchableOpacity style={tw`bg-gray-200 p-3 rounded-full`} 
                onPress={() =>navigation.navigate("Notification")}>
                    <Ionicons name="notifications-outline" size={20} />
                </TouchableOpacity>
            </View>

        </>
    )
}