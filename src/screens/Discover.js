import React, { useLayoutEffect } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Discover = () => {

    const navigation = useNavigation()
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        })
    },[])


    return (
        <SafeAreaView className='flex-1 relative bg-white ' >
            <View className='flex-row items-center justify-between px-8 ' >
                <View className='' >
                    <Text className='text-[40px] text-[#0b646b] font-bold ' >Discover</Text>
                    <Text className='' >The beauty today</Text>
                </View>
                <View>img</View>
            </View>
        </SafeAreaView>
    )
}

export default Discover