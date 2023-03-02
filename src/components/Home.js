import React from 'react';
import { Image, Text, TextInput, View } from 'react-native';

const Home = () => {
    const [userName, setUserName] = React.useState('')


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', border: '1px solid red', height:'100%' }}>
            <Text>Welcome to Native.</Text>
            <Text className="flex-1 items-center justify-center bg-white text-blue-600 " >
                Open up App.js to start working on your app!
            </Text>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/295/295128.png', }} style={{width: 100, height: 100}} />
            <TextInput onChange={(e)=>setUserName(e.target.value)} placeholder='Enter your name.' style={{border:'1px solid blue'}} />
            <Text>{userName}</Text>
        </View>
    );
};

export default Home;