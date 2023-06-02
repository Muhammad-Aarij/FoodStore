import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, TextInput, View, Switch, Image, Pressable, SafeAreaView, ActivityIndicator, Touchable, ScrollView } from 'react-native';
import { Modal, List, RadioButton, Provider } from 'react-native-paper';




export default function Payment() {
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [city, setCity] = useState('');
  const [paymentAddress, setPaymentAddress] = useState('');
  const [pincode, setpincode] = useState('');

  const handleDeliveryAddressChange = (text) => {
    setDeliveryAddress(text);
  };

  const handleCityChange = (text) => {
    setCity(text);
  };
  const handlepincodeChange = (text) => {
    setpincode(text);
  };

  const handlePaymentAddressChange = (text) => {
    setPaymentAddress(text);
  };
  const createTwoButtonAlert = () =>
    Alert.alert('', 'Order Successfully Placed', [

      { text: 'X', onPress: () => console.log('OK Pressed') },
    ]);





  const [selectedValue, setSelectedValue] = useState('');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);


  const dropdownOptions = [
    { label: 'Cash on Delivery', value: 'Cash on Delivery' },
    { label: 'Credit Card', value: 'Credit Card' },
    { label: 'Debit Card', value: 'Debit Card' },

  ];

  const handleValueChange = (itemValue) => {
    setSelectedValue(itemValue);
    setIsDropdownVisible(false);
  };


  return (

    <View style={styles.main}>
      <ScrollView>



        <View style={styles.upper}>
          <Image style={styles.img} source={require('./logo.png')} />
          <Text style={styles.txt}>
            Taste is not only Bio-Chronicle
          </Text >
          <Text style={styles.txt}>It's also psychological</Text>

        </View>

        <View style={styles.txtfld}>

          <TextInput
            style={styles.input}
            placeholder="Delivery Address"
            placeholderTextColor="#F76106"

            value={deliveryAddress}
            onChangeText={handleDeliveryAddressChange}
          />
          <TextInput
            style={styles.input}
            placeholder="City"
            placeholderTextColor="#F76106"

            value={city}
            onChangeText={handleCityChange}
          />


          <List.Accordion
            style={styles.lst}
            title={selectedValue ? selectedValue : 'Select Category'}
            titleStyle={{ color: "#F76106" }} // Set the color to black

            placeholderTextColor="#F76106"
            expanded={isDropdownVisible}
            onPress={() => setIsDropdownVisible(!isDropdownVisible)}
          >
            {dropdownOptions.map((option) => (
              <List.Item
                key={option.value}
                title={option.label}
                titleStyle={{ color: "#F76106" }} // Set the color to black

                color="#F76106"
                left={(props) => (
                  <RadioButton.Android
                    {...props}
                    color="#F76106"
                    status={selectedValue === option.value ? 'checked' : 'unchecked'}
                  />
                )}
                onPress={() => handleValueChange(option.value)}
              />
            ))}
          </List.Accordion>





          {selectedValue=='Cash on Delivery'  &&
            <TextInput
            style={styles.input}
            placeholder="Payment Address"
            placeholderTextColor="#F76106"

            value={paymentAddress}
            onChangeText={handlePaymentAddressChange}
          />
}
          {(selectedValue=='Credit Card' || selectedValue=='Debit Card' )  &&
            <TextInput
            style={styles.input}
            keyboardType='numeric'
            placeholder="Enter Zip Code"
            placeholderTextColor="#F76106"

            value={pincode}
            onChangeText={handlepincodeChange}
          />
}



        </View>

        <View style={styles.sec}>


          <Pressable
            style={
              styles.pressable}>
            <Text style={styles.txt} onPress={createTwoButtonAlert} >Confirm Order</Text>
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
    fontWeight: "bold"

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
    marginHorizontal: 80,
    marginBottom: 30,
  },

  sec: {
    marginTop: 50,
  },

  txtfld: {
    marginTop: 30,
    backgroundColor:"black",
    marginHorizontal:20,
  },


  input: {

    backgroundColor:"black",
    color:"white",
    height: 80,
    color: "white",
    // marginTop: 20,
    borderWidth: 2,
    borderColor: "#F76106",
    // marginHorizontal:20
    marginVertical:"2%",
    
  },

  lst:{
    backgroundColor:"black",
    color:"white",
    height: 80,
    color: "white",
    // marginTop: 20,
    borderWidth: 2,
    
    borderColor: "#F76106",
    // marginHorizontal:20

},





});
