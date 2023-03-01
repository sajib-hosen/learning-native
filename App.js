// import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Home from './components/Home';
import { TailwindProvider } from 'tailwindcss-react-native';

export default function App() {

  return (
    <TailwindProvider>
      <View style={{border: '1px solid blue'}}  >
        <Text className="flex-1 items-center justify-center bg-white text-blue-500 font-black " >APP</Text>
        <Home/>
      </View>
    </TailwindProvider>
  );
}

// basic components 
{/* <View></View> */}
{/* <Text></Text> */}
{/* <Image></Image> */}
{/* <ScrollView></ScrollView> */}
{/* <TextInput></TextInput> */}