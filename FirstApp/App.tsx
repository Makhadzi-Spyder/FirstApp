import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.welcomeText}>
      <View style={styles.mainPicture}>
        <Image style={styles.ImageSize} source={require('./images/Logo.jpeg')} />
      </View>
      <Text style={styles.welcomeText}>Welcome to your app!</Text>
      <Text style={styles.label}>Enter Name:</Text>
      <TextInput placeholder="Jane" />
      <View style={styles.line} />
      <Text style={styles.label}>Enter Surname:</Text>
      <TextInput placeholder="Doe" />
      <Button title = "Add user" />
    </View>
  );
}

const styles = StyleSheet.create({
    welcomeText: {
      paddingTop: 30,
      color: 'purple',
      fontWeight: 'bold',
      fontSize: 28,
      textAlign: 'center',
    },
  
    line: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '100%',
    marginVertical: 10,
  },

  label:{
    fontWeight: 'bold',
  },

  mainPicture: {
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  ImageSize: {
    width: 200,
    height: 200,
  },
});
