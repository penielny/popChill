import { Image, View, Text, TouchableOpacity } from "react-native";
import tw from 'twrnc'
import { Ionicons } from '@expo/vector-icons';
import { useAppState } from "../../context/State";

export default function EditorsChoiceCard({data}) {
    const { appState, setAppState } = useAppState()
    return (
        <TouchableOpacity
        onPress={()=>setAppState({ ...appState, selectedMovie: data, modalState: true })}
            style={tw`flex-row p-3 items-center bg-white  border-gray-100 border my-2 rounded-xl`} >
            <Image source={{ uri: data.image }} style={tw`h-15 w-15 rounded-xl`} />
            <View style={tw`flex-1 mx-2 `}>
                <Text style={tw`font-bold `}>{data.title}</Text>
                <Text style={tw`text-xs`}>{"www.clonexi.ml"}</Text>
            </View>
            <View>
                <Ionicons name="play-circle" size={20} />
            </View>
        </TouchableOpacity>
    )

}