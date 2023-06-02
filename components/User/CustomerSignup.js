import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity,TextInput, View, Switch, Image, Pressable, SafeAreaView, ActivityIndicator, Touchable, ScrollView } from 'react-native';
import { Modal, Portal, Button, Provider } from 'react-native-paper';




export default function App({navigation}) {
  
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleFullNameChange = (text) => {
    setFullName(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleContactChange = (text) => {
    setContact(text);
  };

  const handleAddressChange = (text) => {
    setAddress(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
  };


  const handleNavigation=(screenname)=>{
    console.log(screenname);
    navigation.navigate(screenname);
}


  return (

    <View style={styles.main}>
      <ScrollView>



      <View style={styles.upper}>
        <Image style={styles.img} source={require('./logo.png')} />
        <Text style={styles.txt}>
          Taste is not only Bio-Chemical
        </Text >
        <Text style={styles.txt}>It's also psychological</Text>

      </View>

      <View style={styles.txtfld}>
      
      <TextInput
        style={styles.input}
        placeholder="Full Name"
                placeholderTextColor="#F76106"

        value={fullName}
        onChangeText={handleFullNameChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
                placeholderTextColor="#F76106"

        value={email}
        onChangeText={handleEmailChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Contact"
                placeholderTextColor="#F76106"

        value={contact}
        onChangeText={handleContactChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
                placeholderTextColor="#F76106"

        value={address}
        onChangeText={handleAddressChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
                placeholderTextColor="#F76106"

        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#F76106"
        value={confirmPassword}
        onChangeText={handleConfirmPasswordChange}
        secureTextEntry
      />


      

      </View>

      <View style={styles.sec}>

        
        <Pressable onPress={()=>handleNavigation("Categorypg")}
          style={
            styles.pressable}>
          <Text style={styles.txt}>Sign-Up</Text>
        </Pressable>

      </View>
      </ScrollView>
    </View>


  );

}


const styles = StyleSheet.create({

  main: {

    flex: 1,
    padding: 20,
    backgroundColor: "black",
  },
  upper: {
    paddingTop: 30,
    color: "white",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    color: "white",
    fontSize: 20,
    alignSelf: "center",
    fontFamily: 'cursive',
    fontWeight:"bold"
    

  },
  img: {
    width: 188,
    height: 188,
  },

  pressable: {
    justifyContent: "center",
    backgroundColor: '#F76106',
    padding: 10,
    borderRadius: 50,
    height: 50,
    color: "white",
    marginTop: 5,
    marginHorizontal:80,
    marginBottom:30,
  },

  sec: {
    marginTop: 50,
  },

  txtfld:{
    marginTop:30
  },


  input:{
    
    borderWidth:2,
    borderColor:"#F76106",
    padding: 10,
    borderRadius:20,
    height: 50,
    color: "white",
    marginTop: 20,
    marginHorizontal:25,
  },



});
