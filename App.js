import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import Login from './src/components/Login';
import Discover from './src/screens/Discover';
import HomeScreen from './src/screens/HomeScreen';
const Stack = createNativeStackNavigator();


export default function App() {


  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Discover" component={Discover} />

        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}


// https://www.youtube.com/watch?v=JqPezeQiwxk&t=715s
