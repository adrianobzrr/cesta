
import Reactf from 'react';
import { StatusBar, SafeAreaView,  StyleSheet, Text, View } from 'react-native';
import Cesta from './src/telas/cesta';
import { useFonts,  Montserrat_400Regular, Montserrat_700Bold} from "@expo-google-fonts/montserrat";


export default function App() {
  const [fonteCarregada] =useFonts({
    "MonteserratRegular": Montserrat_400Regular,
    "MonteserratBold": Montserrat_700Bold,
  });

  if(!fonteCarregada){
    return <View/>
  }
  return (
    <View>
      <StatusBar/>
      <Cesta/>
    </View>
  );
}


