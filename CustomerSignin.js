import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity,TextInput, View, Switch, Image, Pressable, SafeAreaView, ActivityIndicator, Touchable } from 'react-native';
import { Modal, Portal, Button, Provider } from 'react-native-paper';
import { useNavigation, useIsFocused } from '@react-navigation/native';



export default function CustomerSignin({navigation}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };
 
  const handleNavigation=(screenname)=>{
    console.log(screenname);
    navigation.navigate(screenname);
}



const isFocused = useIsFocused();
  const [pressCount, setPressCount] = useState(0);

  useEffect(() => {
    if (!isFocused) {
      // Reset pressCount when screen is not focused
      setPressCount(0);
    }
  }, [isFocused]);

  const handlePress = () => {
    setPressCount(prevCount => prevCount + 1);
    console.log(pressCount);
    if (pressCount === 2) {
      // Call your function here
      navigation.navigate('AdminCustomer');

    }
  };


  return (

    <View style={styles.main}>



      <Pressable style={styles.upper} onPress={handlePress}>
        <Image style={styles.img} source={require('./logo.png')} />
        <Text style={styles.txt}>
          Taste is not only Bio-Chronicle
        </Text >
        <Text style={styles.txt}>It's also psychological</Text>

      </Pressable>

      <View style={styles.txtfld}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#F76106"

        value={email}
        onChangeText={handleEmailChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#F76106"

        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry
      />

<Pressable
          style={{}}>
          <Text style={{fontSize:14,color:"#F76106",alignSelf:"center", marginTop:20,fontFamily: 'cursive',
    fontWeight:"bold"}}>Forget password</Text>
        </Pressable>

      

      </View>

      <View style={styles.sec}>

        <Pressable onPress={()=>handleNavigation("Categorypg")}
          style={
            styles.pressable}>
          <Text style={styles.txt}>Sign-In</Text>
        </Pressable>

        <Text style={{fontSize:24,color:"#F76106",alignSelf:"center", marginVertical:5,fontFamily: 'cursive',
    fontWeight:"bold"}}>______ OR ______   </Text>

        <Pressable onPress={()=>handleNavigation("CustomerSignup")}
          style={
            styles.pressable}>
          <Text style={styles.txt}>Sign-Up</Text>
        </Pressable>

      </View>
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
    paddingTop: -10,
    color: "white",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    color: "white",
    fontSize: 24,
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
  },

  sec: {
    marginTop: 50,
  },

  txtfld:{
    marginTop:60
  },


  input:{
    
    // backgroundColor: '#B9B2AD',
    padding: 10,
    borderRadius:20,
    height: 50,
    color: "white",
    marginTop: 20,
    borderWidth:2,
    borderColor:"#F76106",
    marginHorizontal:25,
  },



});
