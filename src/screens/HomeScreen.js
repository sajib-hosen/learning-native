import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { HeroImage } from '../../assets'
import * as Animatable from 'react-native-animatable';

const HomeScreen = () => {

    const navigation = useNavigation()
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        })
    },[])


  return (
    <SafeAreaView className='flex-1 relative bg-white' >

      {/* first section  */}
      <View className='flex-row px-6 mt-8 items-center space-x-2 ' >
        <View className='bg-black w-16 h-16 rounded-full items-center justify-center  ' >
          <Text className=' text-3xl font-semibold text-[#00bcc9]' >Go</Text>
        </View>
        <Text className='text-3xl text-[#2a2b4b] font-semibold ' >Travel</Text>
      </View>


      {/* second section  */}
      <View className='px-6 mt-8 space-y-3 ' >
        <Text className='text-[#3c6072] text-[42px] ' >Enjoy the trip with</Text>
        <Text className='text-[#00bcc9] text-[38px] font-bold ' >Good Moments</Text>

        <Text className='text-[#3c6072] text-base ' >Lorem slk a the l slks os slkdla alskdj las djowej sdsdkljsl Lorem slk a the l slks os slkdla alskdj las djowej </Text>
      </View>

      {/* Circle section  */}
      <View className='w-[480px] h-[480px] bg-[#00bcc9] rounded-full absolute bottom-36 -right-36 ' ></View>
      <View className='w-[480px] h-[480px] bg-[#e99265] rounded-full absolute -bottom-28 -left-36 ' ></View>

      {/* Image container  */}
      <View className='flex-1 items-center justify-center relative ' >

        <Animatable.Image animation='pulse' easing='ease-in-out' source={HeroImage} className='w-full h-full mt-20 object-cover ' />

        {/* go button  */}
        <View className='absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00bcc9] rounded-full items-center justify-center ' >
          <TouchableOpacity onPress={()=>navigation.navigate('Discover')} >
              <Animatable.View animation='pulse' easing='ease-in-out' iterationCount='infinite' className='w-20 h-20 items-center justify-center bg-[#00bcc9] rounded-full ' >
                <Text className='text-gray-50 text-[36px] font-semibold ' >Go</Text>
              </Animatable.View>
          </TouchableOpacity>
        </View>

      </View>


    </SafeAreaView>
  )
}

export default HomeScreen;

// https://www.youtube.com/watch?v=JqPezeQiwxk&t=715s