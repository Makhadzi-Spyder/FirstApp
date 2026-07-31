import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function App() {
  
  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={MainScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainScreen() {

  const [Name, setName] = useState('');
  const [Surname, setSurname] = useState('');

  console.log("App works!");

  return (
    <View style={styles.welcomeText}>

      <View style={styles.mainPicture}>
        <Image style={styles.ImageSize} source={require('./images/Logo.jpeg')} />
      </View>

      <Text style={styles.welcomeText}>Welcome to your app!</Text>


        <View style={styles.InputFlex}> 
         <Text style={styles.label}>Enter Name:</Text>
         <TextInput placeholder="Jane" 
         value = {Name}
         autoCapitalize="characters"
         onChangeText={newText =>{
          const cleaned = newText.replace(/[^a-zA-Z]/g, '');
            const capitalized = cleaned.replace(/\b\w/g, (char) => char.toUpperCase());
          setName(capitalized);
         }}
         />

         
         <Text style={styles.label}>Enter Surname:</Text>
         <TextInput placeholder="Doe"
         value = {Surname} 
         autoCapitalize = "characters"
         onChangeText={newText => {
            const cleaned = newText.replace(/[^a-zA-Z]/g, '');
            const capitalized = cleaned.replace(/\b\w/g, (char) => char.toUpperCase());
          setSurname(capitalized);
         }}
         />

        </View>


      <Button title = "Add user" 
       onPress={() => {
        console.log("Name: " + Name + ""+ " Surname: " + Surname);
       }}/>

      <StatusBar style="auto" />

    
    </View>
  );
}


const styles = StyleSheet.create({
    welcomeText: {
      paddingTop: 30,
      color: 'lightblue',
      fontWeight: 'bold',
      fontSize: 28,
      textAlign: 'center',
    },
  
    line: {
    borderBottomColor: 'black',
    borderBottomWidth: 1, //only part needed to make the line visible
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

  InputFlex: {
    flexDirection: 'row',
    marginTop: 10,
  },
});
