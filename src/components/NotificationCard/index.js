import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'

export default function NotificationCard({ data }) {
    return (
        <View style={tw`border bg-gray-100 border-gray-100 p-4 rounded w-full mb-2`}>
            <View style={tw`flex-row w-full flex-wrap items-center`}>
                <Text style={tw`mt-3 font-bold text-orange-600`}>Creator.</Text>
                <Text style={tw`font-bold text-gray-900`}>
                    {data.msg}
                </Text>
                <Text style={tw`mt-3 font-bold text-gray-600`}>{data.date}</Text>
            </View>
        </View>
    )
}