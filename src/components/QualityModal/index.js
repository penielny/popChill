import { View, Text, Modal, Pressable, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useAppState } from '../../context/State';
import CheckBox from 'react-native-check-box'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc'
import axios from 'axios'
import { BASE_URL } from '../../config';

export default function QualityModal() {
    const { appState, setAppState, create_saved } = useAppState()
    const [isloading, setIsloading] = useState(true);
    const [quality, setQuality] = useState([])
    const [downloadurl, setDownloadurl] = useState("");
    const navigation = useNavigation()

    useEffect(() => {
        getQuanlities()
    }, [appState.selectedMovie])


    function getQuanlities() {
        if (appState.selectedMovie.link == "" || appState.selectedMovie.link == null) {
            return;
        }
        setIsloading(true);
        axios.post(`${BASE_URL}/movies`, { link: appState.selectedMovie.link })
            .then(response => setQuality(response.data))
            .catch(error => console.log("e=>", error))
            .finally(() => setIsloading(false));
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={appState.modalState}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setAppState({ ...appState, modalState: !appState.modalState });
                console.log("closing")
            }}
        >
            <Pressable style={tw`flex-1 `}
                onPress={() => setAppState({ ...appState, modalState: !appState.modalState })}
            >

            </Pressable>
            <View style={tw`h-1/2 bg-white shadow border-t-2 border-gray-100`}>
                {isloading ?
                    <View style={tw`h-full w-full items-center justify-center`}>
                        <View style={tw`flex-1`}></View>
                        <ActivityIndicator style={tw``} size={20} />
                        <Text>Please wait...</Text>
                        <View style={tw`flex-1`}></View>
                    </View>
                    :
                    <>
                        <View style={tw`flex items-center p-3`}>
                            <TouchableOpacity>
                                <View style={tw`w-30 rounded- bg-gray-500 p-1`}></View>
                            </TouchableOpacity>
                        </View>
                        {quality.length ? <View style={tw`flex-1 px-3`}>
                            <Text style={tw`font-bold  text-center mb-1`}>Select Quality</Text>
                            <ScrollView>
                                {
                                    quality[1].map((q, i) => (
                                        <View key={`${i}`} style={tw`flex-row bg-gray-200 p-3 my-1 rounded border-black shadow`}>
                                            <Pressable
                                                style={tw`flex-1 font-bold`}
                                            >
                                                <Text style={tw`flex-1 font-bold`}>{q[0]}</Text>
                                            </Pressable>
                                            <CheckBox
                                                style={{ padding: 10 }}
                                                onClick={() => setDownloadurl(q[1])}
                                                isChecked={(downloadurl === q[1])}

                                            />

                                        </View>
                                    ))
                                }
                            </ScrollView>
                        </View> : <></>}
                        <TouchableOpacity
                            onPress={() => {
                                create_saved(downloadurl)
                                /* cmove to PlayerScreen */
                                navigation.navigate('Player')
                            }}
                            style={tw`w-full p-6 ${downloadurl === "" ? 'bg-gray-500' : 'bg-blue-400'} flex-row items-center justify-center`}>
                            <Text style={tw`text-white font-bold text-center`}>Play Now</Text>
                            <Ionicons name={"download"} size={20} style={tw`text-white mx-2`} />
                        </TouchableOpacity>
                    </>
                }
            </View>
        </Modal>)
}