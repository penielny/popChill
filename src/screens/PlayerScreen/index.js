import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { Video } from 'expo-av'
import VideoPlayer from 'expo-video-player'
import tw from "twrnc"
import React, { useState } from 'react'
import { WebView } from 'react-native-webview';
import { useAppState } from '../../context/State'

import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
export default function PlayerScreen() {
    const { appState } = useAppState()
    const [alerts, setAlerts] = useState(true)
    const navigation = useNavigation()
    
    return (
        <View style={tw`flex-1 relative`}>
            {appState.useNative ? <VideoPlayer

                videoProps={{
                    shouldPlay: true,
                    resizeMode: Video.RESIZE_MODE_CONTAIN,
                    // ❗ source is required https://docs.expo.io/versions/latest/sdk/video/#props
                    source: {
                        uri: appState.donwloadUrl,
                    },
                }}
            /> :
                <WebView
                    style={tw`flex-1`}
                    source={{ uri: appState.donwloadUrl }}>
                </WebView>}
            {alerts ? <SafeAreaView style={tw`absolute top-0`}>
                <View style={tw`bg-yellow-200 p-3 border-b-2`}>
                    <Text style={tw`font-bold`}>Video might take some time to play. please be patient while it loads.</Text>
                </View>
                <View style={tw`bg-yellow-200 p-3 `}>
                    <Text style={tw`font-bold`}>Native player supports online mp4 Files. To play .mkv or other file please go to settings.</Text>
                </View>
                <TouchableOpacity
                style={tw`bg-red-200`}
                    onPress={() => setAlerts(prev => !prev)}
                >
                    <Text style={tw`text-red-500 p-3 text-center font-bold`}>Close Alerts</Text>
                </TouchableOpacity>
            </SafeAreaView> : <></>}
            <SafeAreaView>
                <TouchableOpacity
                
                onPress={() => navigation.goBack()}
                style={tw`absolute bottom-20 left-5 flex items-center justify-center p-3 border border-white rounded-full`} >
                    <Ionicons style={tw`text-white font-bold`} name="close" size={20} />
                </TouchableOpacity>
            </SafeAreaView>

        </View>
    )
}


