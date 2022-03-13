import { View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useAppState } from '../../context/State'




export default function NowShowingCard({ data }) {
    const { appState, setAppState } = useAppState()

    return (
        <TouchableOpacity
            onPress={()=>setAppState({ ...appState, selectedMovie: data, modalState: true })}
            style={tw`h-70 w-50 bg-gray-700 mx-3 shadow-lg rounded-xl`}>
            <Image source={{ uri: data.image }} style={tw`h-full w-full rounded-xl`} />
        </TouchableOpacity>)
}
