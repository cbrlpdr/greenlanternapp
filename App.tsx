import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import onImg from "./assets/symbol-on.png";
import offImg from "./assets/symbol-off.png";
import { useState } from 'react';

export default function App() {
  const [isOn, setIsOn] = useState(false);

  const handleLanternPress = () => {
    setIsOn(!isOn);
  }

  return (
    <View style={isOn?styles.containerOn:styles.containerOff}>
      <TouchableOpacity onPress={handleLanternPress}>
      <Image source={isOn? onImg : offImg} style={{ width: 180, height: 180 }} />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
    backgroundColor: '#020',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerOff: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
