import React from 'react';
import { Button, Image, Text, TextInput, View } from 'react-native';
import { Path, Svg } from 'react-native-svg';

const Login = () => {
    const [userName, setUserName] = React.useState('')
    const image = {uri: 'https://reactjs.org/logo-og.png'};

    return (
        <View className=' w-full h-full flex justify-center items-center shadow-lg relative border-2 border-red-400 ' >

            <View className='border border-gray-300 bg-slate-50 rounded p-3 py-6 mx-3 w-full min-w-[280px] max-w-[300px]  '> 
                <View className='flex flex-row justify-center items-center bg-slate-50 ' >
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/295/295128.png', }} style={{width: 40, height: 40}} />
                    <Text className='flex flex-col pl-4  ' >
                        <Text className="flex-1 items-center justify-center " >Noho Halal Meat</Text>
                        <Text className="flex-1 items-center justify-center " >and Grocery</Text>
                    </Text>
                </View>

                <View className='flex justify-center items-center mt-2 ' >
                    <Text className='flex justify-center items-center font-extrabold text-yellow-500' >LOG IN</Text>
                </View>

                <View className='mt-6 ' >
                    <TextInput className='p-4 border border-gray-300 rounded ' onChange={(e)=>setUserName(e.target.value)} placeholder='E-mail' />
                    <TextInput secureTextEntry={true} className='p-4 border border-gray-300 rounded my-6 ' onChange={(e)=>setUserName(e.target.value)} placeholder='Password' />
                    <Button className='p-2' color="#f194ff" title="Log in" />
                </View>
            </View>

        </View>
    );
};

export default Login;

// /* https://www.youtube.com/watch?v=1ZNjEdcs6UA */